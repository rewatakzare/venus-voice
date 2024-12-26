import Link from 'next/link'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Contact', href: '/Contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
]

const courseLinks = [
  { name: 'Professional English', href: '/courses#professional-english' },
  { name: 'Business Communication and Soft Skill', href: '/courses#business-communication' },
  { name: 'Master Business Communication', href: '/courses#mbc' },
  { name: 'IELTS Preparation Course', href: '/courses#ielts' },
  { name: 'Our Educators', href: '#educators' },
]

export default function Footer() {
  return (
    <footer className="bg-[#000027] text-white p-4 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 text-center">
                <Image
                  src="/logo.png?height=128&width=128"
                  alt="Venus Voice Logo"
                  layout="fill"
                  objectFit="contain"
                  className='bg-[#000027] rounded-full'
                />
              </div>
              <p className="text-gray-600 text-sm">
              Your journey to professional English starts here! Join Venus Voice for personalized, result-driven courses and achieve success in both personal and professional spheres.
              </p>
            </div>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name} className="border-b border-dotted border-gray-500 pb-2">
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-4">
              {courseLinks.map((link) => (
                <li key={link.name} className="border-b border-dotted border-gray-500 pb-2">
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <a href="tel:+919302395463" className="flex hover:text-yellow-400 transition-colors">
                <FaPhoneAlt  className='mr-2 w-4 h-4'/> +91 93023 95463
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <a href="mailto:venusvoice24@gmail.com" className="flex hover:text-yellow-400 transition-colors">
                <IoMdMail className='mr-2 w-5 h-6'/>venusvoice24@gmail.com
                </a>
              </li>
            </ul>
            <div className="socials flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/venus-voice/ " className="hover:text-yellow-400 transition-colors">
                <FaLinkedin className="h-6 w-6"/>
              </a>
              <a href="https://www.instagram.com/venusvoice24 " className="hover:text-yellow-400 transition-colors">
              <IoLogoInstagram className="h-6 w-6"/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Venus Voice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}