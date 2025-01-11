'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Background from './Background'
import Image from 'next/image'

export default function LoadingPage({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          onLoadingComplete()
          return 100
        }
        const diff = Math.random() * 20
        return Math.min(oldProgress + diff, 100)
      })
    }, 100)

    // Force complete after 5 seconds
    const forceCompleteTimer = setTimeout(() => {
      clearInterval(timer)
      onLoadingComplete()
    }, 5000)

    return () => {
      clearInterval(timer)
      clearTimeout(forceCompleteTimer)
    }
  }, [onLoadingComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, when: "afterChildren" }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Background />
      <motion.div 
        className="relative z-10 flex flex-col items-center space-y-8"
        variants={itemVariants}
      >
        <motion.div 
          className="relative h-[300px] w-[300px]"
          variants={itemVariants}
        >
          <Image
            src="/logo.png?height=80&width=80"
            alt="Venus Voice Logo"
            fill
            style={{ objectFit: 'contain' }}
            className="h-[100%] w-[100%]"
          />
        </motion.div>
      
        <motion.div 
          className="w-[8rem] h-2 bg-blue-900 rounded-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.div 
            className="h-full bg-yellow-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

LoadingPage.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired
}