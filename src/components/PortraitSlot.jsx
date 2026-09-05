import { useEffect, useRef } from 'react'

// Portrait "seen through the rain".
// The photo itself stays SHARP — it renders ABOVE the hero's frosted pane.
// A subtle "droplets on the window" layer sits in FRONT of the photo for the
// rain-on-glass feel without blurring her face.
// Drop a real photo at public/saman.jpg (or set VITE_PORTRAIT path) to fill it.
const PORTRAIT_SRC = import.meta.env.VITE_PORTRAIT || '/saman.jpg'

export default function PortraitSlot() {
  const ref = useRef(null)
  useEffect(() => {
    const img = ref.current
    if (!img) return
    img.onerror = () => { img.style.display = 'none'; img.parentElement?.classList.add('no-photo') }
  }, [])
  return (
    <div className="portrait">
      <img ref={ref} src={PORTRAIT_SRC} alt="Saman Rizvi" className="portrait-img" />
      <div className="portrait-placeholder">
        <span>Her photo, through the rain</span>
        <small>drop public/saman.jpg</small>
      </div>
      <div className="portrait-duotone" />
      <div className="portrait-window-rain" aria-hidden="true" />
    </div>
  )
}
