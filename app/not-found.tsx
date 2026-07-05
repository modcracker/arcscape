'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-mono text-xs text-stone-400">
      <span>REDIRECTING_TO_PORTAL...</span>
    </div>
  );
}
