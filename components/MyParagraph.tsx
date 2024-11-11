'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type paragraphProps = {
  paragrapg: string;
};

export default function MyParagraph({ paragrapg }: paragraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
    // offset: ['center center', 'start 0.25'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    scrollYProgress.on('change', (e) => console.log(e));
  }, []);

  return (
    <motion.p
      ref={container}
      className='text-[60px] leading-none p-10 max-w-[1280px] text-white'
      style={{ opacity }}
    >
      {paragrapg}
    </motion.p>
  );
}
