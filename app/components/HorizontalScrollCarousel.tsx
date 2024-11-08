'use client';

import { useScroll, useTransform } from 'framer-motion';
import MyCard from './MyCard';
import { useRef } from 'react';

export default function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  //   console.log(targetRef);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0', '100%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <MyCard />
      </div>
    </section>
  );
}
