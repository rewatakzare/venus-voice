export default function Contact() {
    return (
      <div className="w-full bg-white">
        <div id="contact" className="max-w-7xl mx-auto px-10 md:px-10 py-[7rem] ">
        <div className="max-w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
          <p className="text-md  text-gray-600 mb-8">
          Whether you're a beginner, intermediate, or advanced learner, our tailored courses are designed to help you improve your English fluency. Have questions or ready to start? Contact us today to find the perfect course for you!
          </p>
          <a 
            href="https://wa.me/+919302395463" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
      </div>
      
    )
  }