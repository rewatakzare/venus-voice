'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Background from './Background'

export default function LoadingPage({ onLoadingComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 4000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Background/>
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src="/logo.png"
          alt="Venus Voice Logo"
          className="w-80 h-80"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            y: { duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 1 }
          }}
        />
      </div>
    </motion.div>
  )
}

