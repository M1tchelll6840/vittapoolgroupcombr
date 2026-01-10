import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={COMPANY_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp - abre em nova aba"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 min-w-[56px] min-h-[56px] bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
    >
      <MessageCircle className="w-7 h-7 fill-current" aria-hidden="true" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none" aria-hidden="true">
        Fale conosco
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
    </a>
  );
}
