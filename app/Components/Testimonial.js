'use client'

import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    name: "Sireesha",
    location: "B.tech, Hyderabad",
    trainer: "Gayatri",
    text: "GAYATRI MA'AM, I want to take a moment to thank you for all the effort you've put into teaching me. Your training has been incredibly helpful in improving my speaking skills. I truly appreciate how you explain complex grammar rules in such a simple and clear manner, which makes them easy for me to understand. When I started learning Soft skills, I was completely engrossed in it because your teaching style is so engaging and attractive. I can confidently say that my confidence has grown significantly, and I've noticed a remarkable transformation in my communication skills from day one to now. Overall, I'm deeply grateful for your dedication and the progress I've made under your guidance. Thank you, Gayatri Ma'am!"
  },
  {
    name: "Amrita Mishra",
    location: "Mumbai, Maharashtra",
    trainer: "Gayatri",
    text: "I completed my education in the Hindi medium. A few months ago, I started my proficiency in English n Communication skills learning journey with Gayatri Ma'am. She has excellent knowledge and effective teaching methods. She provides a variety of topics and is always available for guidance. I truly appreciate how she makes her lessons interactive and engaging. Her teaching style is truly inspiring, and she has a unique ability to explain complex concepts in a simple and easy-to-understand way. Overall, I have learned a lot in her classes, and I deeply appreciate the effort she puts into teaching. Thank you for your dedication, Ma'am. I look forward to continuing my learning journey with you."
  },
  {
    name: "Nishanth",
    location: "B.Pharmacy, Uttar Pradesh",
    trainer: "Gayatri",
    text: "She taught me Soft skills from the basics to the advanced level. There was no topic she left unexplained, whether it was functional grammar, paragraph writing, reading, picture descriptions, or vocabulary building. She put in so much effort to help me learn, and because of her dedication, I am now able to understand and enhanced my communication skills effectively. Thank you so much, Ma'am, for everything you've done for me. I will always need your blessings. 🙏"
  },
  {
    name: "Keshav Raturi",
    location: "B.Tech graduate, Uttarakhand",
    trainer: "Gayatri",
    text: "Previously, I worked in a software company. However, due to a lack of communication skills and the need to learn interview strategies, I joined this course. I never imagined I would get a teacher like Gayatri Ma'am. She has brilliant skills and has helped me improve my Business English-speaking fluency through her many effective teaching methods. I truly appreciate all your support, Ma'am. Your way of teaching is the best, and I have learned so much from you. You are and will always be my role model. Thank you so much!"
  },
  {
    name: "Anant Siani",
    trainer: "Shyamala",
    text: "Thanks to Shyamala Mam's guidance, I have seen remarkable improvement in my English skills, and I now feel more self-assured in both personal and professional interactions. I highly recommend her to anyone looking for a dedicated, skilled, and inspiring English personal trainer."
  },
  {
    name: "Khushboo",
    trainer: "Sudha Ramani",
    text: "It's was wonderful experience. Your teaching gives me a lot of confidence to speak English to Friends and other people every day. Now I never hesitating while speaking English."
  },
  {
    name: "Alok Das",
    trainer: "Maria",
    text: "To grow personally and professionally, a guide who understands and supports you is invaluable. Maria Hasan, an exceptional English educator, profoundly impacted my life with her passion, patience, and dedication. She fostered critical thinking, shared real-life experiences, and provided constructive feedback, shaping me into who I am today. Thank you, Ma’am, for being my mentor and inspiration—I am deeply grateful!"
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.slickPlay()
    }
  }, [])

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl  md:text-5xl font-bold mb-12 text-center">Voices of Our Learners</h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white shadow-xl rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      {testimonial.location && (
                        <p className="text-gray-600">{testimonial.location}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
                  <p className="text-yellow-600 font-semibold">Trainer: {testimonial.trainer}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
                onClick={() => sliderRef.current.slickGoTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}