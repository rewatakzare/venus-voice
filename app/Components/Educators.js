'use client'

import { useState } from 'react'
import Image from 'next/image'

const educators = [
  {
    name: "Sudha Ramani Gudpudi",
    role: "Rector",
    qualifications: "LLB, MBA(Human Resources)",
    image: "/SudhaRaman.jpg?height=200&width=200",
    description: "As a passionate advocate with a flair for teaching, I embarked on an exciting journey to share my knowledge with the next generation. Although my career progression was briefly paused due to family commitments, my dedication to mentoring students remained unwavering. Embracing the flexibility of online platforms, I now have the privilege of guiding 15 students, nurturing their minds, and fostering a love for learning that extends beyond the classroom. With my expertise and enthusiasm, I strive to create an engaging, supportive, and inclusive environment that allows my students to thrive and reach their full potential."
  },
  {
    name: "Dr. Srilakshmi Kovvali",
    role: "IELTS Master Trainer",
    qualifications: "M.A., M.Phil., CTE, Ph.D.",
    image: "/srilaxmi.jpg?height=200&width=200",
    description: "I make learning fun, impactful and everlasting with my well researched teaching-learning techniques and strategies. With over two decades of experience in training students successfully in IELTS led me to understand the nuances of language teaching."
  },
  {
    name: "Mrs. Vishakha Ameya",
    role: "MBC Soft Skills Trainer",
    qualifications: "MSc in Biochemistry, B.Ed",
    image: "/vishaka.jpg?height=200&width=200",
    description: "Hello, I'm Vishakha, with an MSc in Biochemistry, B.Ed, and 10 years of teaching experience. I also hold a diploma in Soft Skills and Business Communication, allowing me to support both academic and personal growth. Excited to bring my expertise to our company, Venus Voice and inspire student success."
  },
  {
    name: "Mrs. Achuta Yellayi",
    role: "MBC Soft Skills Trainer",
    qualifications: "",
    image: "/Achuta.jpeg?height=200&width=200",
    description: "I'm Achuta—trainer, writer, and educator. With experience as a bank operations manager and soft skills trainer, I'm dedicated to helping others unlock their potential. My hands-on, interactive approach combines practical exercises and insights to help you express emotions naturally. I infuse creativity into every session, making learning engaging and relatable. Whether you want to polish your professional presence or improve daily conversations, I'm here to guide you in finding your voice."
  },
  {
    name: "Mrs. Maria Hasaan",
    role: "BBC Soft Skills Trainer",
    qualifications: "M.A., M.Ed.",
    image: "/Maria.jpeg?height=200&width=200",
    description: "I am a hardworking and driven individual who isn't afraid of challenges. I am a passionate teacher with 8 years of teaching experience in English at both national and international levels."
  },
  {
    name: "Mrs. Istuti Kumari",
    role: "BBC Soft Skills Trainer",
    qualifications: "M.Com, B.Ed.",
    image: "/istuthi.jpg?height=200&width=200",
    description: "With 5 years of experience, I am your friendly facilitator of knowledge. Get ready for engaging lessons and thought-provoking discussions that make learning enjoyable. Together, we'll unlock your potential and discover new horizons."
  },
  {
    name: "Mrs. Nitu Rajpal",
    role: "BBC Soft Skills Trainer",
    qualifications: "M.Com, B.Ed",
    image: "/neetu.jpg?height=200&width=200",
    description: "I am a dedicated and hardworking English trainer with nearly 5 years of teaching experience. I am easy going with all age groups, which enhances my classes."
  }
]

function EducatorCard({ educator }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all  duration-300 ease-in-out ${isExpanded ? 'mb-4' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <Image
            src={educator.image}
            alt={educator.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{educator.name}</h3>
            <p className="text-yellow-600 font-medium">{educator.role}</p>
            {educator.qualifications && (
              <p className="text-gray-600 text-sm">{educator.qualifications}</p>
            )}
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-700">{educator.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Educators() {
  return (
    <div id='educators' className="bg-gray-100 py-[7rem] p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-10">Our Educators</h2>
        <div className="space-y-4">
          {educators.map((educator, index) => (
            <EducatorCard key={index} educator={educator} />
          ))}
        </div>
      </div>
    </div>
  )
}

