import Image from 'next/image'

export default function CourseCard({ title, imageSrc }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-28">
        <Image
          src={imageSrc}
          alt={title}
          fill    
          objectFit='contain'
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <span>Details for course</span>
          <span>•</span>
          <span>Strategy</span>
        </div>
      </div>
    </div>
  )
}

