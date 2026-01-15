'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from './Home'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  const courseLinks = [
    { name: 'Professional English', href: '/courses#professional-english' },
    { name: 'Business Communication and Soft Skills', href: '/courses#business-communication' },
    { name: 'Master of Business Communication', href: '/courses#mbc' },
    { name: 'IELTS', href: '/courses#ielts' },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= 50) {
        setIsVisible(true)
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCoursesOpen(false)
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setIsMobileCoursesOpen(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen)
  }

  const toggleMobileCoursesDropdown = (e) => {
    e.preventDefault()
    setIsMobileCoursesOpen(!isMobileCoursesOpen)
  }

  const handleMobileLinkClick = () => {
    setIsOpen(false)
    setIsMobileCoursesOpen(false)
  }

  return (
    <nav className={`text-yellow-500  fixed top-0 left-0 right-0 z-50 transition-transform duration-300  ${isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isOpen ? 'bg-[#000027]' : 'backdrop-blur-md'
    }`} 
    >
      <div className="backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png?height=80&width=80"
                  alt="Venus Voice Logo"
                  width={80}
                  height={80}
                  className="h-[20%] w-auto pt-2"
                />
                <span className="md:text-xl text-xl font-semibold">Venus Voice</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-400 "
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8 ">
              <Link href="/" className="text-gray-500 hover:text-gray-400">
                Home
              </Link>
              <Link href="/About" className="text-gray-500 hover:text-gray-400">
                About
              </Link>
              <Link href="/Blog" className="text-gray-500 hover:text-gray-400">
                Blog
              </Link>
              <Link href="" className="text-gray-500 hover:text-gray-400">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleCoursesDropdown}
                  className="text-gray-500 hover:text-gray-400 flex items-center"
                >
                  Courses
                  <svg
                    className={`ml-1 h-5 w-5 transform transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isCoursesOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg ring-1 bg-[#000027]">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/courses#professional-english" className="block px-4 py-2 text-sm text-white hover:bg-blue-900" role="menuitem">Professional English</Link>
                      <Link href="/courses#business-communication" className="block px-4 py-2 text-sm text-white hover:bg-blue-900" role="menuitem">Business Communication and Soft Skills</Link>
                      <Link href="/courses#mbc" className="block px-4 py-2 text-sm text-white hover:bg-blue-900" role="menuitem">Master of Business Communication</Link>
                      <Link href="/courses#ielts" className="block px-4 py-2 text-sm text-white hover:bg-blue-900" role="menuitem">IELTS</Link>
                    </div>
                  </div>
                )}
              </div>
              </Link>
              <Link href="/Contact" className="text-gray-500 hover:text-gray-400">
                Contact
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state  */}
       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#000027]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-400 hover:bg-gray-50"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>
            <Link
              href="/About"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-400 hover:bg-gray-50"
              onClick={handleMobileLinkClick}
            >
              About
            </Link>
            <Link
              href="/Blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-400 hover:bg-gray-50"
              onClick={handleMobileLinkClick}
            >
              Blog
            </Link>
            <div>
              <button
                onClick={toggleMobileCoursesDropdown}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-400 hover:bg-gray-50"
              >
                Courses
                <svg className={`ml-1 h-5 w-5 transform transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isMobileCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {courseLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2 text-base text-gray-500 hover:text-gray-400 hover:bg-gray-50"
                    onClick={handleMobileLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/Contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-400 hover:bg-gray-50"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
        </div>
      </div>
    </nav>
  )
}



