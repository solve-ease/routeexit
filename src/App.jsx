import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [imageSrc, setImageSrc] = useState('')

  const getImageForViewport = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const isPortrait = height > width

    if (width >= 1024) {
      // Desktop view
      return '/desktop.webp'
    } else if (width >= 768) {
      // Tablet view (768px to 1023px)
      if (isPortrait) {
        // Tablet portrait - use mobile image
        return '/mobile.webp'
      } else {
        // Tablet landscape - use tablet image, fallback to desktop
        return '/tablet.webp'
      }
    } else {
      // Mobile view (< 768px) - portrait orientation
      return '/mobile.webp'
    }
  }

  useEffect(() => {
    // Set initial image
    setImageSrc(getImageForViewport())

    // Handle resize events
    const handleResize = () => {
      setImageSrc(getImageForViewport())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="app">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Full screen responsive image"
          className="full-screen-image"
        />
      )}
    </div>
  )
}

export default App
