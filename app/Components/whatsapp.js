import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/+919302395463" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed text-3xl bottom-8 right-8 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    )
  }