'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type paragraphProps = {
  paragrapg: string;
};

export default function MyWordAnimation({ paragrapg }: paragraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center 0.9', 'start start'],
    //     offset: ['center 0.6', 'start 0'],
    // offset: ['center center', 'start 0.25'],
  });

  const words = paragrapg.split(' ');

  return (
    <p
      ref={container}
      className='flex flex-wrap text-[60px] leading-none p-10 max-w-[1280px] text-white '
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span
            key={i}
            className='relative mr-3 mt3'
            style={{ opacity }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
