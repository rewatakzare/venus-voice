'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingPage from './Components/LoadingPage'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Courses from './Components/Courses'
import Aboutus from './Components/Aboutus'
import Founders from './Components/Founders'
import Educators from './Components/Educators'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FAQ from './Components/Faq'
import Testimonials from './Components/Testimonial'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (!hasLoaded) {
      setIsLoading(true)
      setHasLoaded(true)
    }
  }, [hasLoaded])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <main className='max-w-full overflow-hidden'>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingPage key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : ( 
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Home />
            <Courses/>
            <Aboutus/>
            <Founders/>
            <Educators/>
            <Testimonials/>
            <Contact/>
            <FAQ/>
            <Footer/>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

