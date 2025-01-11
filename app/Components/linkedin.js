import { FaLinkedinIn } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
      <a
        href="https://www.linkedin.com/in/venus-voice/ " 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed text-xl bottom-[4.7rem] right-3 z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaLinkedinIn />
      </a>
    )
}