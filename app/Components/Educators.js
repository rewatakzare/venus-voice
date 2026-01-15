'use client'

import { useState } from 'react'
import Image from 'next/image'

const educators = [
  {
    name: "Sudha Ramani Gudpudi",
    role: "Rector",
    qualifications: "LLB, MBA(Human Resources)",
    image: "/SudhaRaman.jpg?height=200&width=200",
    description: "G. Sudha Ramani is a passionate and result-oriented English communication trainer at Venus Voice, dedicated to helping learners speak with clarity and confidence. With strong expertise in language training and international certifications including TESOL/TEFL, IELTS/PTE, NSDC, and Phonics Specialization, she empowers students and professionals to achieve global fluency. Known for her interactive and learner-centric approach, she creates an engaging environment that nurtures both skill and self-belief."
  },
  {
    name: "Ms. Seema Pandey",
    role: "Communication & Soft Skills Trainer",
    image: "/MsSeemaPandey.jpg?height=200&width=200",
    description: "Ms. Seema Pandey, based in Mumbai, Maharashtra, brings over 25 years of rich professional experience to Venus Voice. With a Bachelor’s degree in Commerce and a Diploma in Marketing Management, she has built a strong foundation in communication, customer relations, and process clarity through her work in international call centres. Her expertise lies in developing transferable skills such as effective communication, problem-solving, and the ability to simplify complex ideas for learners. Ms. Seema is fluent in English, Hindi, Gujarati, and Marathi, enabling her to connect with a diverse group of learners with ease and confidence.At Venus Voice, she continues to inspire learners to speak with clarity, confidence, and purpose."
  },
  {
    name: "Ms. Sarita Patnaik",
    image: "/MsSaritaPatnaik.jpg?height=200&width=200",
    description: "Ms. Sarita Patnaik brings over 20 years of experience in the teaching field, including 18 years of service as a Principal. Her leadership and commitment to education have shaped the academic and personal growth of countless students. In addition to her administrative expertise, she has also worked as a Soft Skills Trainer, helping learners enhance their communication, confidence, and interpersonal abilities. At Venus Voice, Ms. Sarita Patnaik continues to inspire learners with her deep experience, guiding them to achieve excellence through effective communication and professionalis"
  },
  {
    name: "Ms. Rubina Naaz",
    qualifications: "Master of Arts (M.A.) in English",
    image: "/MsNaazRubina.jpg?height=200&width=200",
    description: "Ms. Rubina Naaz holds a strong background in English and communication, with a diverse experience across multiple fields. She has 3 years of experience in medical writing, followed by 4 years of offline teaching as a freelancer. For the past 3 years, she has been successfully training learners as a Soft Skills, Communication, and Phonics Trainer, helping them develop fluency, clarity, and confidence in speaking. At Venus Voice, Ms. Rubina Naaz empowers learners to express themselves effectively and professionally, building strong communication foundations for personal and career growth."
  },
  {
    name: "Ms. Jyotsna Siliveru",
    qualifications: "M.A., B.Ed in English",
    image: "/MsJyotsnaSiliveru.jpg?height=200&width=200",
    description: "Ms. Jyotsna Siliveru is an experienced English language educator with over 9 years of teaching experience. She has also worked as a Public Speaking Expert for 1 year, helping learners enhance their stage presence, articulation, and confidence. Her passion for teaching and communication excellence makes her a valued member of the Venus Voice training team. At Venus Voice, Ms. Jyotsna Siliveru inspires learners to master the art of communication through clarity, confidence, and creativity."
  },
  {
    name: "Ms. Shruti Raghu",
    qualifications: "Master of Computer Applications (MCA)",
    image: "/MsShruthiRaghu.jpg?height=200&width=200",
    description: "Ms. Shruti Raghu has a strong background in communication and client interaction, supported by her technical expertise. She worked for 2 years at Square D Company on a UK-based project as an Advisor, where she developed excellent communication and problem-solving skills. She is expert as a Soft Skills and Business Communication Trainer, guiding learners to express themselves effectively in professional environments. At Venus Voice, Ms. Shruti Raghu helps learners refine their communication style and develop confidence, enabling them to thrive in both corporate and personal interactions."
  },
  {
    name: "Ms. Bhartti M. Tanwani",
    qualifications: "Certified IELTS, PTE, and Communication Coach",
    image: "/MsBharttiMTanwani.jpg?height=200&width=200",
    description: "Ms. Bhartti M. Tanwani is a certified communication and language trainer with a passion for helping learners achieve global language proficiency. She has 2 years of experience at Maruti Sparsh Automobiles and over 3 years of experience teaching communication and language skills with reputed platforms such as Ufaber and Planet Spark. Her dynamic approach to training blends practical communication techniques with confidence-building strategies. At Venus Voice, Ms. Bhartti M. Tanwani guides learners to enhance their English fluency and communication excellence, preparing them for success in both academic and professional domains."
  },    
  {
    name: "Dr. Srilakshmi Kovvali",
    role: "IELTS Master Trainer",
    qualifications: "M.A., M.Phil., CTE, Ph.D.",
    image: "/srilaxmi.jpg?height=200&width=200",
    description: "I make learning fun, impactful and everlasting with my well researched teaching-learning techniques and strategies. With over two decades of experience in training students successfully in IELTS led me to understand the nuances of language teaching."
  },
  {
    name: "Ms. Maria Hasaan",
    role: "BBC Soft Skills Trainer",
    qualifications: "M.A., M.Ed.",
    image: "/Maria.jpeg?height=200&width=200",
    description: "I am a hardworking and driven individual who isn't afraid of challenges. I am a passionate teacher with 8 years of teaching experience in English at both national and international levels."
  },
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
            width={120}
            height={120}
            className="w-24 h-24 rounded-full object-fit"
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

