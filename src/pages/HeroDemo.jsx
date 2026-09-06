import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Page } from '../motion'

/* ─────────────────────────────────────────────────────────────
   VARIANT 1 — Parallax depth layers (v2)
   - saman.jpg is the actual portrait (665x1182, full res)
   - Foreground = ghibli cutout (small, decorative)
   - All layers centered, aspect-locked, no awkward cropping
   ───────────────────────────────────────────────────────────── */
function ParallaxHero() {
  const ref = useRef(null)
  const [t, setT] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r) return
      const cx = (e.clientX - r.left) / r.width - 0.5
      const cy = (e.clientY - r.top) / r.height - 0.5
      setT({ x: cx, y: cy })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Portrait aspect: 665/1182 = 0.5626 (tall portrait)
  // Keep the card height within the hero container (which is 78vh) with margin
  const PORTRAIT_H = 'min(72vh, 640px)'
  const PORTRAIT_W = `calc(${PORTRAIT_H} * 0.5626)`

  const layers = [
    { src: '/saman.jpg',        depth: 22, scale: 1.00, z: 2, blur: 0,  mix: 'normal',     opacity: 1.0,  w: PORTRAIT_W, h: PORTRAIT_H, top: '52%', left: '50%' },
    { src: '/saman.jpg',        depth: 50, scale: 1.12, z: 1, blur: 20, mix: 'luminosity', opacity: 0.45, w: PORTRAIT_W, h: PORTRAIT_H, top: '52%', left: '50%' },
    { src: '/saman-ghibli.png', depth: 14, scale: 1.0,  z: 4, blur: 0,  mix: 'normal',     opacity: 0.95, w: '120px',    h: '148px',    top: '15%', left: '82%' },
  ]

  return (
    <div
      ref={ref}
      className="parallax-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: 'min(78vh, 720px)',
        overflow: 'hidden',
        borderRadius: 24,
        background: 'radial-gradient(120% 80% at 50% 30%, #1a0a0a 0%, #060203 70%)',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5,
          background:
            'radial-gradient(60% 50% at 50% 50%, transparent 35%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div className="demo-rain" />

      {layers.map((l, i) => {
        const tx = t.x * l.depth
        const ty = t.y * l.depth * 0.6
        // framer-motion's animate REPLACES the transform, so include the
        // translate(-50%, -50%) centering here.
        return (
          <motion.img
            key={i}
            src={l.src}
            alt=""
            draggable={false}
            initial={false}
            animate={{
              x: `calc(-50% + ${tx}px)`,
              y: `calc(-50% + ${ty}px)`,
              scale: l.scale,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
            style={{
              position: 'absolute',
              left: l.left,
              top: l.top,
              width: l.w,
              height: l.h,
              objectFit: 'contain',
              zIndex: l.z,
              filter: l.blur ? `blur(${l.blur}px) brightness(0.7) saturate(1.05)` : 'none',
              mixBlendMode: l.mix,
              opacity: l.opacity,
              boxShadow: l.z === 2
                ? '0 30px 80px -20px rgba(156,31,36,0.5), 0 0 0 1px rgba(255,255,255,0.06)'
                : 'none',
              borderRadius: 14,
              willChange: 'transform',
            }}
          />
        )
      })}

      <div
        style={{
          position: 'absolute', left: 32, bottom: 32, zIndex: 10,
          color: '#f6f1ea', maxWidth: 380,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7, marginBottom: 6 }}>
          VARIANT 1 · PARALLAX
        </div>
        <div style={{ fontFamily: 'serif', fontSize: 36, lineHeight: 1.05, fontWeight: 500 }}>
          Move your cursor.<br />
          <span style={{ color: '#e89a9e' }}>Watch the depth.</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   VARIANT 4 — Particle field (v2, proper portrait)
   - Uses saman.jpg (real 665x1182 portrait) at high resolution
   - Larger points, normal blending, proper portrait silhouette
   ───────────────────────────────────────────────────────────── */

function ParticleField({ imageUrl, count = 12000 }) {
  const pointsRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0, target: { x: 0, y: 0 } })
  const originalRef = useRef(null)
  const sampledRef = useRef(0)

  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imageUrl
    img.onload = () => {
      if (cancelled) return
      // saman-ghibli.png has TRANSPARENT background. The subject is fully
      // isolated, so we use the alpha channel to mask out everything else.
      // Sample at the PNG's native resolution (or 1.5x for density).
      const w = 270
      const h = Math.round((img.height / img.width) * w)
      const c = document.createElement('canvas')
      c.width = w; c.height = h
      const ctx = c.getContext('2d')
      ctx.drawImage(img, 0, 0, w, h)
      const data = ctx.getImageData(0, 0, w, h).data

      // For an isolated subject, take EVERY non-transparent pixel. No luminance
      // filter — keep the full color range of the illustration.
      const all = []
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
          if (a < 50) continue
          all.push(x, y, r, g, b)
        }
      }
      // Use as many points as possible (up to count). The PNG has ~30K
      // visible pixels; we'll target count but sample down if needed.
      const totalCandidates = all.length / 5
      const target = Math.min(count, totalCandidates)
      const stride = Math.max(1, Math.floor(totalCandidates / target))
      const pts = []
      let sampled = 0
      // World space: tall portrait, 270x332 → aspect 0.813
      // Use 4 tall × 3.25 wide (matches aspect)
      const worldH = 4.0
      const worldW = worldH * (w / h)
      for (let i = 0; i < all.length; i += 5 * stride) {
        const x = all[i], y = all[i + 1], r = all[i + 2], g = all[i + 3], b = all[i + 4]
        const wx = (x / w - 0.5) * worldW
        const wy = -(y / h - 0.5) * worldH
        const wz = (Math.random() - 0.5) * 0.15
        pts.push(
          wx, wy, wz,
          r / 255, g / 255, b / 255
        )
        sampled++
      }
      const flat = new Float32Array(pts)
      originalRef.current = new Float32Array(flat)
      sampledRef.current = sampled

      if (pointsRef.current) {
        const g = pointsRef.current.geometry
        g.setAttribute('position', new THREE.BufferAttribute(flat.slice(), 3))
        g.setAttribute('color',    new THREE.BufferAttribute(flat, 3))
        g.setDrawRange(0, sampled)
        g.attributes.position.needsUpdate = true
        g.attributes.color.needsUpdate = true
        g.computeBoundingSphere()
        console.log('[particle] sampled', sampled, 'of', totalCandidates, 'candidates from', imageUrl)
      }
    }
    return () => { cancelled = true }
  }, [imageUrl, count])

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -((e.clientY / window.innerHeight) * 2 - 1)
      mouseRef.current.target = { x: nx, y: ny }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Allocate at full requested count; we'll setDrawRange when image loads
  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3))
  geom.setAttribute('color',    new THREE.BufferAttribute(new Float32Array(count * 3), 3))

  const mat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
    sizeAttenuation: true,
  })

  useFrame((state) => {
    const t = state.clock.elapsedTime
    mouseRef.current.x += (mouseRef.current.target.x - mouseRef.current.x) * 0.05
    mouseRef.current.y += (mouseRef.current.target.y - mouseRef.current.y) * 0.05

    const pos = pointsRef.current?.geometry.attributes.position
    const original = originalRef.current
    if (!pos || !original) return
    const arr = pos.array
    const ox = mouseRef.current.x * 0.5
    const oy = mouseRef.current.y * 0.5
    const sampled = sampledRef.current
    for (let i = 0, idx = 0; i < sampled * 3; i += 3, idx += 3) {
      const baseX = original[i]
      const baseY = original[i + 1]
      const baseZ = original[i + 2]
      const wob = Math.sin(t * 1.5 + baseX * 3.0) * 0.015
      arr[i]     = baseX + ox + wob
      arr[i + 1] = baseY + oy + wob * 0.7
      arr[i + 2] = baseZ + Math.sin(t * 0.9 + baseY * 2.5) * 0.06
    }
    pos.needsUpdate = true
  })

  return <points ref={pointsRef} geometry={geom} material={mat} />
}

function ParticleHero() {
  return (
    <div
      className="particle-hero"
      style={{
        position: 'relative',
        width: '100%',
        height: 'min(78vh, 720px)',
        overflow: 'hidden',
        borderRadius: 24,
        background: 'radial-gradient(120% 80% at 50% 30%, #0a0405 0%, #000 70%)',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ParticleField imageUrl="/saman-ghibli.png" count={30000} />
      </Canvas>

      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'radial-gradient(60% 50% at 50% 50%, transparent 50%, rgba(140,20,30,0.12) 80%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      <div className="demo-rain" />

      <div
        style={{
          position: 'absolute', left: 32, bottom: 32, zIndex: 10,
          color: '#f6f1ea', maxWidth: 380,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7, marginBottom: 6 }}>
          VARIANT 4 · PARTICLE FIELD
        </div>
        <div style={{ fontFamily: 'serif', fontSize: 36, lineHeight: 1.05, fontWeight: 500 }}>
          30,000 living points.<br />
          <span style={{ color: '#e89a9e' }}>Formed from her portrait.</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroDemo() {
  const [mode, setMode] = useState('parallax')
  return (
    <Page>
      <section style={{ padding: '120px 24px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, opacity: 0.6, marginBottom: 8 }}>
            HERO CONCEPT DEMO
          </div>
          <h1 style={{
            fontFamily: 'serif', fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.05, margin: 0, fontWeight: 500,
            color: '#f6f1ea',
          }}>
            Pick the look you want for the home hero.
          </h1>
          <p style={{ opacity: 0.7, marginTop: 12, color: '#f6f1ea' }}>
            Now using <code style={{ color: '#e89a9e' }}>saman.jpg</code> (the real portrait) for both.
            Move your cursor.
          </p>

          <div style={{
            display: 'inline-flex', gap: 8, marginTop: 24, padding: 4,
            background: 'rgba(255,255,255,0.04)', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { k: 'parallax', label: '1 · Parallax depth' },
              { k: 'particle', label: '4 · Particle field' },
            ].map((b) => (
              <button
                key={b.k}
                onClick={() => setMode(b.k)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  letterSpacing: 0.5,
                  color: mode === b.k ? '#1a0a0a' : '#f6f1ea',
                  background: mode === b.k
                    ? 'linear-gradient(180deg, #f6f1ea 0%, #e5dccd 100%)'
                    : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {mode === 'parallax' ? <ParallaxHero /> : <ParticleHero />}

        <div style={{
          marginTop: 24, padding: 20, borderRadius: 12,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          color: '#f6f1ea', fontSize: 14, lineHeight: 1.6,
        }}>
          {mode === 'parallax' ? (
            <>
              <strong style={{ color: '#e89a9e' }}>How it works:</strong>{' '}
              The real portrait (saman.jpg) is stacked twice: one sharp in the center,
              one blurred behind for atmosphere. The Ghibli cutout floats as a small
              accent in the upper-right. Cursor offset multiplies per layer (22/50/14px),
              so each moves at a different speed. The portrait keeps its full aspect
              ratio (no cropping). No WebGL, just transforms.
            </>
          ) : (
            <>
              <strong style={{ color: '#e89a9e' }}>How it works:</strong>{' '}
              saman.jpg is sampled at 600px wide, ~30,000 colored points trace the
              full portrait — face, hair, clothing, and the restaurant background
              all become point cloud. Each point gently wobbles in z, all follow
              cursor with parallax. Normal blending keeps her real skin/clothing tones.
              Uses three.js.
            </>
          )}
        </div>
      </section>
    </Page>
  )
}
