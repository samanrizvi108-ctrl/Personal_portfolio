import { useEffect, useRef } from 'react'

// Ghibli-style cutout figure for the homepage hero.
// This should be a TRANSPARENT PNG (subject removed from background) placed at
// public/saman-ghibli.png (or set VITE_GHIBLI path).
// It floats ABOVE the frosted glass as a soft, magical figure. If the file is
// missing, a gentle placeholder keeps the layout ready.
const GHIBLI_SRC = import.meta.env.VITE_GHIBLI || '/saman-ghibli.png'

export default function GhibliCutout() {
  const ref = useRef(null)
  useEffect(() => {
    const img = ref.current
    if (!img) return
    img.onerror = () => { img.style.display = 'none'; img.parentElement?.classList.add('no-ghibli') }
  }, [])
  return (
    <div className="ghibli-cutout">
      <img ref={ref} src={GHIBLI_SRC} alt="Saman, illustrated" className="ghibli-img" />
      <div className="ghibli-placeholder">
        <span>Ghibli cutout here</span>
        <small>drop public/saman-ghibli.png (transparent)</small>
      </div>
      <div className="ghibli-glow" />
    </div>
  )
}
