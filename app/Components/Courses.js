import CourseCard from './Coursescard'
import Link from 'next/link'

const courses = [
  {
    title: "Day to Day English",
    imageSrc: "/DTD.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Phonology",
    imageSrc: "/phonology.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Communication Skills",
    imageSrc: "/CS.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Soft Skills",
    imageSrc: "/SS.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Business English",
    imageSrc: "/BE.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Practical English",
    imageSrc: "/PE.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "IELTS Preparation",
    imageSrc: "/ILETS.svg?height=400&width=600",
    href: "/courses"
  },
  {
    title: "Interview Preparation",
    imageSrc: "/interview.svg?height=400&width=600",
    href: "/courses"
  }
]

export default function Courses() {
  return (
    <div id='courses' className="p-4 min-h-700px bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block text-lg bg-yellow-400 px-6 py-3 rounded-full text-black font-semibold mb-[3rem]">
          Your journey to professional English starts here!
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link key={index} href={course.href}>
             <CourseCard {...course} />
            </Link>            
          ))}
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </div>
  )
}