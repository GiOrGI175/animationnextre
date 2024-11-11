'use client';

import PricingContent from '@/componets/PricingContent';
import PracingLayout from '@/componets/PracingLayout';

export default function Home() {
  return (
    <div className='flex h-[580px] justify-center bg-neutral-900 px-3 py-12'>
      <main className='flex flex-col gap-8 items-cente'>
        <PracingLayout href='#' MyContentlayout={PricingContent}>
          <p className='text-white'>About us</p>
        </PracingLayout>
      </main>
    </div>
  );
}
