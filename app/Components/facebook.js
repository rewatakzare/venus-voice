import { FaFacebookF } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
      <a
        href="https://www.facebook.com/people/Venus-Voice/61571596585764/ " 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed text-xl bottom-[8rem] right-3 z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaFacebookF />
      </a>
    )
  }