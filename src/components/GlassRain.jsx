import { useEffect, useRef } from 'react'

// Procedural "water on glass" layer: static condensation speckles + sliding beads
// with trails. Sits inside the frosted hero pane (rendered behind the pane's
// backdrop-filter so the headline reads as refracted through rainy glass).
export default function GlassRain({ opacity = 0.9 }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0, h = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let beads = []
    let specks = []

    function newBead() {
      return {
        x: Math.random() * w,
        y: -Math.random() * h,
        r: Math.random() * 3 + 2,
        speed: Math.random() * 0.9 + 0.35,
        trail: Math.random() * 34 + 16,
      }
    }
    function resize() {
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w
      canvas.height = h
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      beads = Array.from({ length: Math.max(7, Math.floor(w / 110)) }, newBead)
      specks = Array.from({ length: Math.floor((w * h) / 5500) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.14 + 0.04,
      }))
    }
    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const s of specks) {
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.arc(s.x, s.y, s.r, 0, 7)
        ctx.fill()
      }
      for (const b of beads) {
        const g = ctx.createLinearGradient(b.x, b.y - b.trail, b.x, b.y)
        g.addColorStop(0, 'rgba(255,255,255,0)')
        g.addColorStop(1, 'rgba(255,255,255,0.22)')
        ctx.strokeStyle = g
        ctx.lineWidth = b.r * 0.8
        ctx.beginPath()
        ctx.moveTo(b.x, b.y - b.trail)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
        ctx.beginPath()
        ctx.fillStyle = 'rgba(255,255,255,0.38)'
        ctx.arc(b.x, b.y, b.r, 0, 7)
        ctx.fill()
        b.y += b.speed
        b.x += 0.18
        if (b.y > h + b.trail) {
          Object.assign(b, newBead(), { y: -b.trail })
        }
      }
      raf = requestAnimationFrame(draw)
    }
    resize()
    window.addEventListener('resize', resize)
    if (reduce) draw()
    else raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none' }}
    />
  )
}
