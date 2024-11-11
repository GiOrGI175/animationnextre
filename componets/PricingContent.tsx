'use client';

import Link from 'next/link';

export default function PricingContent() {
  return (
    <div className='w-64 bg-white p-6 shadow-xl '>
      {/* part 1 */}
      <div className='mb-3 space-y-3'>
        <h3 className='font-semibold'>For individuals</h3>
        <Link href='#' className='black text-sm hover:underline'>
          Introduction
        </Link>

        <Link href='#' className='black text-sm hover:underline'>
          Pat us you go
        </Link>
      </div>
      {/* part 2 */}
      <div className='mb-3 space-y-3'>
        <h3 className='font-semibold'>For individuals</h3>
        <Link href='#' className='black text-sm hover:underline'>
          Introduction
        </Link>

        <Link href='#' className='black text-sm hover:underline'>
          startup
        </Link>

        <Link href='#' className='black text-sm hover:underline'>
          about
        </Link>

        <Link href='#' className='black text-sm hover:underline'>
          contact-us
        </Link>
      </div>
      <button className='w-full rounded-lg border-2 border-900 font-semibold px-4 py-2 hover:bg-neutral-700 hover:text-white'>
        Contact sales
      </button>
    </div>
  );
}
