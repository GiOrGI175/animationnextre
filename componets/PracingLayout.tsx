'use client';
import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function PracingLayout({
  children,
  href,
  MyContentlayout,
}: {
  children: React.ReactNode;
  href: string;
  MyContentlayout?: React.ElementType;
}) {
  const [open, setOpen] = useState(false);

  const ShowFlayout = MyContentlayout && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative text-white'
    >
      <Link href={href}>{children}</Link>
      {ShowFlayout && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ transform: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute text-black bg-white left-1/2 top-10'
          >
            <div className='absolute top-0 w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white left-1/2' />
            {MyContentlayout && <MyContentlayout />}
          </motion.div>
        </AnimatePresence>
      )}

      <p>header</p>

      <p>footer</p>
    </div>
  );
}
