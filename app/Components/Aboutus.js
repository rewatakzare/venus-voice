import Image from 'next/image'

const features = [
  {
    icon: "01",
    title: "One-on-One Sessions",
    description: "Personalized and interactive video sessions are designed to enhance the learner's strengths, overcome weaknesses, reach their specific goals and build overall personality. Dedicated error analysis counseling sessions are conducted."
  },
  {
    icon: "02",
    title: "Customized Learning",
    description: "Our flexible curriculum is designed around personalized and customised assessments targeting specific areas like grammar, vocab and conversational skills to ensure focused and effective learning."
  },
  {
    icon: "03",
    title: "Flexible Hours",
    description: "Students can select timings that suit their schedule, including evening and weekend options. Classes can be booked through an online system."
  }
]

export default function AboutUs() {
  return (
    <div className="bg-white p-4 py-[7rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
        <p className='mb-7 text-md font-semibold'>Welcome to VenusVoice - where learning English is not just a skill but an adventure! We're here to help you conquer the challenges of English language learning with innovative virtual methods and make your journey as smooth as a perfectly brewed cup of coffee.
        Equipped with the latest tools and modules, we don't just teach communication skills; we refine them with accuracy and care, ensuring you're ready to shine in every interaction. After all, in today's fast-paced world, clear communication isn't just important - it's your golden ticket to success.
        As we like to say, 'When life gives you language barriers, we give you a ladder!' So, join us and let's climb higher together!
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
        <div className="md:flex gap-10 rounded-lg overflow-hidden">
        <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Choose VenusVoice? </h2>
        <p className='mb-7 text-md'>Seasoned Trainers: Learn from skilled professionals with expertise in communication.<br/><br/>
          Tailored Approach: Experience personalized lessons that suit your unique needs.<br/><br/>
          Proven Success: Join a community of learners who have unlocked their full communication potential.
        </p></div>
        <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What Sets Us Apart </h2>
        <p className='mb-7 text-md '>Innovative Methods: We use a combination of interactive techniques and real time scenarios to engage and accelerate learning.<br/>
          Flexible Learning: Choose online options that fit your schedule.<br/>
          Comprehensive Support: Our team is committed to your success at each and every step.<br/>
          So, why delay?<br/><br/>
          <span className='font-semibold'> Join Us & Migrate from Broken English to Fluent English</span>
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

