import Image from 'next/image'

export default function Founders() {
  return (
    <div className="min-h-screen  text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <h1 className="text-5xl  font-bold mb-12 relative inline-block">
          About Founders
        </h1>
        <div className="space-y-8 max-w-full ">
          
          <div className='md:flex gap-8 mb-10'>
          <div className="rounded-xl overflow-hidden mt-5">
            <Image
              src="/gayatri.jpg?height=200&width=1200"
              alt="Colorful waves"
              width={1000}
              height={1000}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
              className="w-[100%] md:w-[100%] md:h-[95%] h-auto rounded-xl"
            />
          </div>
          <div className='md:w-[80%] w-full'>
          <h1 className='font-bold mb-3 text-xl md:text-2xl mt-5'>Amulyaa Gayatri Yadala : Co-Founder & CEO
         </h1>
            <p className="text-gray-300 text-sm">
            I am excited to bring my extensive experience and passion for teaching to a platform dedicated to empowering learners. With over 12 years of experience as an Academic Educator and IIT Foundation Faculty, I am committed to delivering quality education for students and professionals alike.<br/><br/>
            About Me: <br/>
            Qualifications: M.Sc., B.Ed., Certified in Business Communication and Soft Skills, TEFL/TESOL certified by the American College of Teacher Training.<br/>Expertise: Communication and Soft Skills Trainer, IELTS Trainer, and online teaching specialist.
            </p>
            <p className='mt-4 text-sm text-gray-300'> 
            This mission is dedicated to my beloved father, who now rests in heaven. My father is my philosopher, guide, role model, and source of inspiration.
             My father was an extraordinary person,a guiding light in my life, and a constant source of inspiration. He believed deeply in the power of education, especially for women, and often said that education is the key to a bright and fulfilling future. His thoughts were always centered on creating opportunities for learning.
             He worked tirelessly to counsel parents who hesitated to educate their daughters, convincing them of the importance of education. Through his efforts, many young girls were able to pursue their studies and transform their lives.
             As I embark on this journey of building my company, I carry forward his vision of empowering individuals through knowledge and education. Our goal is to provide opportunities that transform lives, just as my father envisioned.
             To all those who share the belief in the transformative power of education, this mission is for you too. Together, we can create a brighter future, one empowered mind at a time.
             Thank you for taking the time to understand the inspiration behind this mission. Join us in continuing this legacy of empowerment and education.
            </p>
          </div>
          </div>
        </div>

        <div className="space-y-8 max-w-full ">
          
          <div className='md:flex gap-8'>
          <div className="rounded-xl overflow-hidden mb-4">
            <Image
              src="/Shyamala.jpeg?height=200&width=1200"
              alt="Colorful waves"
              width={1000}
              height={1000}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 50vw, 30vw"
              className="w-[100%] md:w-[100%] md:h-[85%] h-auto rounded-xl"
            />
          </div>
          <div className='md:w-[80%] w-full'>
          <h1 className='text-xl md:text-2xl  font-bold mb-3'>Shyamala Kothapalli : Co-Founder & COO</h1>
            <p className="text-gray-300 text-sm">
            I'm thrilled to announce the launch of my new educational platform, designed to empower students and professionals on their journey to growth and success!<br/><br/>
            About Me: <br/>
            MBA in Human Resources | Certified in Communication & Soft Skills
            10+ years as an Academic Educator in Business Management
            Expert in Online Teaching | Skilled Communication & Soft Skills Trainer
            With a decade of experience and a strong commitment to education, this platform is set to provide impactful training that enhances skills and drives success.
            </p>
            <p className='mt-4 text-gray-300 text-sm'> 
            Success doesn't happen in isolation—it thrives on encouragement and guidance. Personally, I am deeply grateful for the unwavering support of my family, who have always been my pillar of strength, motivating me to reach my goals.<br/>Our mission is to provide that same kind of encouragement and nurturing environment to help learners unlock their full potential and achieve fluency in English. Together, let’s make learning a truly empowering journey!
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

