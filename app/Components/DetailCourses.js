import Image from 'next/image'
import Link from 'next/link'
  
  
const courseCategories = [
  {
    id: "professional-english",
    name: "Professional English",
    image: "/ProffestionalE.svg?height=300&width=400",
    details: [
      { name: "Rapid Course", duration: "1 Month", sessions: "20 Sessions" },
      { name: "Speak Smart", duration: "2 Months", sessions: "40 Sessions" },
      { name: "Skill Mastery", duration: "3 Months", sessions: "60 Sessions" }
    ],
    extraInfo: [
      "Weekend Special Group Session",
      "English Club Activities",
      "Storytelling, Picture narration, Roleplay, Interview practice, Extempore, Debate, Phonetics, Fun with grammar etc.,",
      "Note: Monthly webinar sessions will be conducted."
    ]
  },
  {
    id: "business-communication",
    name: "Business Communication and Soft Skills",
    image: "/BSoft.svg?height=300&width=400",
    details: [
      { name: "Rapid Course", duration: "1 Month", sessions: "20 Sessions" },
      { name: "Speak Smart", duration: "2 Months", sessions: "40 Sessions" },
      { name: "Skill Mastery", duration: "3 Months", sessions: "60 Sessions" }
    ],
    extraInfo: [
      "Weekend Special Group Session",
      "English Club Activities",
      "Storytelling, Picture narration, Roleplay, Interview practice, Extempore, Debate, Phonetics, Fun with grammar etc.,",
      "Note: Monthly webinar sessions will be conducted"
    ]
  },
  {
    id: "mbc",
    name: "Business English - Master of Business Communication(MBC)",
    image: "/MBC.svg?height=300&width=400",
    details: [
      { name: "MBC Course", duration: "2 Months" }
    ],
    keyModules: [
      "Productivity Communication",
      "Business Meetings",
      "Professional Presentations",
      "Professional Emails",
      "Interpersonal Communication",
      "Networking Online",
      "Video Conferencing",
      "Work Etiquette & Personality Development"
    ]
  },
  {
    id: "ielts",
    name: "IELTS",
    image: "/IELTS.svg?height=300&width=400",
    details: [
      { name: "IELTS Ultima", duration: "27 hours", mocks: "25 mock tests each module" },
      { name: "IELTS Couple Class", duration: "30 hrs", mocks: "24 mock tests each module" },
      { name: "IELTS Individual", duration: "10 days", mocks: "15 mock test" },
      { name: "IELTS Evaluation Service", writing: "750", speaking: "500" },
      { name: "IELTS Crash Course", duration: "20 hours", mocks: "20 Mocks each module" }
    ]
  }
]

function CourseCategory({ category }) {
  return (
    <div id={category.id} className="mb-16  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={category.image}
          alt={category.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
        <div className="space-y-4">
          {category.details.map((detail, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg">{detail.name}</h3>
              <p>Duration: {detail.duration}</p>
              {detail.sessions && <p>Sessions: {detail.sessions}</p>}
              {detail.mocks && <p>Mocks: {detail.mocks}</p>}
              {detail.writing && <p>Writing: {detail.writing}</p>}
              {detail.speaking && <p>Speaking: {detail.speaking}</p>}
            </div>
          ))}
        </div>
        {category.keyModules && (
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-2">Key Modules:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {category.keyModules.map((module, index) => (
                <li key={index} className="text-sm text-gray-600">{module}</li>
              ))}
            </ul>
          </div>
        )}
        {category.extraInfo && (
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-2">Additional Information:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {category.extraInfo.map((info, index) => (
                <li key={index} className="text-sm text-gray-600">{info}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <div className="max-w-7xl mt-10 mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className='text-center'>
      <h1 className=" text-center inline-block text-2xl bg-yellow-400 px-6 py-3 rounded-full text-black font-semibold mb-10">Our Courses</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courseCategories.map((category, index) => (
          <CourseCategory key={index} category={category} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link href="https://wa.me/+919302395463" className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors text-xl">
          Book a Demo
        </Link>
      </div>
    </div>
  )
}