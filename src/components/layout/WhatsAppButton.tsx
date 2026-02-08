import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919784776778?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
