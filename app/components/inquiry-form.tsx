'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Mail, Check, Copy, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';

interface InquiryFormProps {
  blueprintName: string;
  blueprintCode: string;
  price: string;
}

export default function InquiryForm({ blueprintName, blueprintCode, price }: InquiryFormProps) {
  const godaddyUrl = 'https://www.godaddy.com/domainsearch/find?domainToCheck=arcscape.com';
  
  // Anti-spam math state
  const [hasInitiated, setHasInitiated] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const resetMathChallenge = () => {
    setNum1(Math.floor(Math.random() * 8) + 3); // 3 to 10
    setNum2(Math.floor(Math.random() * 7) + 2); // 2 to 8
    setUserAnswer('');
    setErrorStatus(null);
  };

  // Generate numbers only on mount to prevent Next.js hydration mismatches
  useEffect(() => {
    const timer = setTimeout(() => {
      resetMathChallenge();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(userAnswer.trim(), 10);
    
    if (isNaN(parsed)) {
      setErrorStatus('Please enter a valid numeric answer');
      return;
    }

    if (parsed === num1 + num2) {
      setIsRevealed(true);
      setErrorStatus(null);
    } else {
      setErrorStatus('Incorrect answer. Please try again.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('info@arcscape.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-[#EBE1E4] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-6">
      
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#7D123D] font-bold block">
            Direct Acquisition
          </span>
          <h2 className="font-serif text-2xl font-black text-[#2C1820] tracking-tight">
            Acquire arcscape.com
          </h2>
          <p className="text-sm text-[#2C1820]/80 font-sans leading-relaxed">
            Acquire the premier flagship brand asset <span className="font-semibold text-[#7D123D]">arcscape.com</span> today. You can purchase instantly via escrow or reach out directly.
          </p>
        </div>

        {/* VALUE BANNER */}
        <div className="bg-[#FAF4F6] border border-[#EBE1E4] p-5 rounded-xl space-y-3">
          <div className="space-y-1">
            <span className="font-mono text-xs tracking-wider text-[#7D123D]/70 block font-semibold uppercase">
              DIRECT BUYOUT VALUE
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-3xl font-black text-[#7D123D]">$30,000</span>
              <span className="font-sans text-sm text-[#FF3E74] font-bold">USD</span>
            </div>
          </div>
          
          <a
            href={godaddyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-mono font-bold tracking-wider text-white bg-[#7D123D] hover:bg-[#FF3E74] rounded-lg transition-colors shadow-sm cursor-pointer uppercase"
          >
            <span>Proceed to GoDaddy Checkout</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* INTERACTIVE AREA WITH MATH VERIFICATION */}
        <div className="border-t border-[#EBE1E4]/60 pt-4 space-y-4">
          <AnimatePresence mode="wait">
            {!hasInitiated ? (
              <motion.div
                key="direct-gate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3 text-center py-2"
              >
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#7D123D] font-bold block">
                    Direct Contact Channel
                  </span>
                  <p className="text-sm text-[#2C1820]/80 font-sans leading-relaxed">
                    Prefer immediate direct negotiation? Initiate our secure contact portal to bypass registrar margins.
                  </p>
                </div>
                
                <button
                  type="button"
                  onClick={() => setHasInitiated(true)}
                  className="w-full py-3 bg-white border border-[#7D123D] hover:border-[#FF3E74] hover:bg-[#FAF4F6] text-[#7D123D] hover:text-[#FF3E74] rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Reveal Direct Channel</span>
                </button>
              </motion.div>
            ) : !isRevealed ? (
              <motion.div
                key="verification"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="space-y-1 text-center">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FF3E74] font-bold block">
                    Human Verification Required
                  </span>
                  <p className="text-xs text-[#2C1820]/75 leading-relaxed font-sans">
                    Solve this equation to reveal our direct contact email. This keeps our inbox protected from automated spam crawlers.
                  </p>
                </div>

                <form onSubmit={handleVerify} className="space-y-3 font-sans">
                  <div className="flex items-center gap-3 bg-[#FAF4F6] border border-[#EBE1E4] p-3 rounded-xl justify-center">
                    <span className="font-mono font-black text-sm text-[#7D123D]">
                      {num1} + {num2} =
                    </span>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      required
                      placeholder="?"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setErrorStatus(null);
                      }}
                      className="w-16 bg-white border border-[#EBE1E4] rounded-lg text-center py-1.5 text-sm font-bold text-[#7D123D] focus:outline-none focus:ring-1 focus:ring-[#FF3E74] focus:border-[#FF3E74]"
                    />
                    <button
                      type="button"
                      onClick={resetMathChallenge}
                      title="Generate new equation"
                      className="p-1 text-[#FF85A7] hover:text-[#FF3E74] transition-colors rounded-md"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>

                  {errorStatus && (
                    <div className="flex items-center gap-1.5 justify-center text-xs font-mono text-red-600 font-bold bg-red-50 py-1.5 px-3.5 rounded-lg border border-red-200">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errorStatus}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#7D123D] hover:bg-[#FF3E74] text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Verify and Reveal Email</span>
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FAF4F6] border border-[#EBE1E4] p-5 rounded-xl space-y-4 text-center"
              >
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 font-bold tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase">
                    <Check className="h-3.5 w-3.5" />
                    Verified Negotiator
                  </div>
                  <h3 className="font-serif text-base font-black text-[#2C1820]">
                    Direct Brand Inquiries
                  </h3>
                  <p className="text-xs text-[#2C1820]/80 font-sans leading-relaxed max-w-xs mx-auto">
                    Please reach out with acquisition proposals or general inquiries. Mention {blueprintName} in your subject line.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 justify-center pt-2">
                  <a
                    href="mailto:info@arcscape.com"
                    className="font-mono text-sm font-bold text-[#7D123D] hover:text-[#FF3E74] transition-colors border-b border-dashed border-[#7D123D]/40 pb-0.5 hover:border-[#FF3E74] px-2 py-1 flex items-center gap-1"
                  >
                    <Mail className="h-4 w-4 text-[#FF3E74]" />
                    <span>info@arcscape.com</span>
                  </a>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 py-1.5 px-3 text-xs font-mono font-bold tracking-wider rounded-lg border border-[#EBE1E4] text-[#7D123D] hover:bg-white transition-all cursor-pointer bg-white"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-[#FF3E74]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="border-t border-[#EBE1E4] pt-4 flex items-center justify-center gap-1.5 text-xs font-mono text-[#7D123D] font-semibold uppercase">
        <ShieldCheck className="h-4 w-4 text-[#FF3E74]" />
        <span>GoDaddy Escrow Protection</span>
      </div>
    </div>
  );
}
