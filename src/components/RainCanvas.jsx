import { useEffect, useRef } from 'react'

// Global atmospheric rain overlay — fixed, on top of the page, pointer-events none.
// Depth-layered falling streaks + rare crimson-tinted lightning. Honors reduced motion.
export default function RainCanvas({ opacity = 0.55, zIndex = 900, density = 1 }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0, h = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let drops = []
    let flash = 0
    let flashCooldown = 240 + Math.random() * 500

    function makeDrop() {
      const depth = Math.random()
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        len: 9 + depth * 22,
        speed: 5 + depth * 11,
        width: 0.6 + depth * 1.7,
        alpha: 0.06 + depth * 0.22,
      }
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.floor((w * h) / 8000 * density)
      drops = Array.from({ length: Math.max(40, count) }, makeDrop)
    }
    function draw() {
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = 'round'
      for (const d of drops) {
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.len)
        grad.addColorStop(0, 'rgba(205,214,232,0)')
        grad.addColorStop(1, `rgba(214,223,240,${d.alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = d.width
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x + d.width * 0.6, d.y + d.len)
        ctx.stroke()
        d.y += d.speed
        if (d.y > h + d.len) {
          d.y = -d.len
          d.x = Math.random() * w
        }
      }
      if (flash > 0) {
        ctx.fillStyle = `rgba(255,238,238,${flash * 0.10})`
        ctx.fillRect(0, 0, w, h)
        flash -= 0.02
      } else if (!reduce) {
        flashCooldown -= 1
        if (flashCooldown <= 0) {
          flash = 1
          flashCooldown = 420 + Math.random() * 900
        }
      }
      raf = requestAnimationFrame(draw)
    }
    resize()
    window.addEventListener('resize', resize)
    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density])
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex, opacity }}
    />
  )
}
