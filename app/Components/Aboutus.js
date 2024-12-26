import Image from 'next/image'

const features = [
  {
    icon: "01",
    title: "One-on-One Sessions",
    description: "Personalized, interactive video sessions focused on the student's strengths and weaknesses, specific goals, boosting self-confidence. Error finding counseling sessions with."
  },
  {
    icon: "02",
    title: "Customized Learning",
    description: "A flexible curriculum tailored based on initial assessments, focusing on areas needing improvement such as grammar basics, vocabulary, or conversational practice."
  },
  {
    icon: "03",
    title: "Flexible Hours",
    description: "Students can select timings that suit their schedule, including evening and weekend options. Classes can be booked through an online system."
  }
]

export default function AboutUs() {
  return (
    <div className="bg-white p-4 pt-[6%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
        <p className='mb-7 text-md font-semibold'>Venus voice is the new institution launched newly for all online learners who meet the challenges of learning English language skills with innovative methods of virtual learning.
It's equipped with the latest modules of teaching or grooming communication skills which are very important in present days scenario to survive in any field we choose.
</p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 pb-8 border-b-2">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="text-yellow-400 font-bold">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden">
        <h2 className="text-4xl font-bold mb-10">Why are we here?</h2>
        <div className=" mb-12">
          <p>In today's competitive world, countless graduates and professionals have the knowledge and skills but still struggle to succeed. Why? Because around 80% face rejection in interviews or miss out on career advancements due to communication gaps and limited soft skills.
          <br/><br/>At  our  virtual institution- VENUS VOICE, we believe language and confidence should never hold you back. Our program is designed to break the English language barrier and help you become a fluent, confident communicator. Say goodbye to hesitation and hello to new opportunities as a polished English speaker!<br/><br/>
          <span className='font-semibold'>Join us today and take the first step toward building the confidence that leads to success.</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

