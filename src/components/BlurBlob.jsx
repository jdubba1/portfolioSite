import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function BlurBlob() {
  const blobRef = useRef()

  const handleMouseMove = event => {
    console.log("blob on the mouves")
    const { clientX, clientY } = event
    const blob = blobRef.current
    blob.style.left = `${clientX}px`
    blob.style.top = `${clientY}px`
  }

  return (
    <motion.div
      id="blob"
      ref={blobRef}
      className="bg-red-500 h-34vmax z-50 aspect-w-1 aspect-h-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-aquamarine to-mediumpurple animate-rotate duration-20s infinite opacity-80"
      onMouseMove={handleMouseMove}
      animate={{ filter: "blur(5px)" }}
      transition={{ duration: 0.3 }}
    />
  )
}