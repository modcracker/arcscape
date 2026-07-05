'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OtherAssetDetailPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-mono text-xs text-neutral-400">
      <span>SHADOW_ROUTER: REDIRECTING_TO_SECURE_ENCLAVE...</span>
    </div>
  );
}
