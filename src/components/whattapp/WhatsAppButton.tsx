"use client";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919939982449?text=Hello%20Jay%20Hanuman%20Aagao%20Traders,%20I%20am%20interested%20in%20bulk%20onion%20supply."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-3 py-3 md:px-5 md:py-3 rounded-full shadow-lg flex items-center gap-2"
    >
      <FaWhatsapp size={30} />
      <span className="font-semibold hidden md:block">WhatsApp Us</span>
    </a>
  );
}
