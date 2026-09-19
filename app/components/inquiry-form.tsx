import React from 'react';
import { Mail } from 'lucide-react';

interface InquiryFormProps {
  blueprintName: string;
  blueprintCode: string;
  price: string;
}

export default function InquiryForm({ blueprintName }: InquiryFormProps) {
  return (
    <div className="bg-white border border-[#EBE1E4] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="space-y-4 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-[#7D123D] font-bold block">
          Direct Contact
        </span>

        <h2 className="font-serif text-2xl font-black text-[#2C1820] tracking-tight">
          Contact Us
        </h2>

        <p className="text-sm text-[#2C1820]/80 font-sans leading-relaxed">
          For questions, proposals, or general inquiries about {blueprintName}, please contact us directly by email.
        </p>

        <a
          href="mailto:tito@arcscape.com"
          className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-wider text-white bg-[#7D123D] hover:bg-[#FF3E74] rounded-lg transition-colors shadow-sm cursor-pointer uppercase"
        >
          <Mail className="h-4 w-4" />
          <span>Email tito@arcscape.com</span>
        </a>
      </div>
    </div>
  );
}
