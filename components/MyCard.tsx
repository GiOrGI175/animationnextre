'use client';
import { CardTupe } from '@/constants/card';
import Image from 'next/image';

export default function MyCard({ card }: { card: CardTupe }) {
  return (
    <div className='group h-[450px] w-[450px] overflow-hidden bg-neutral-800 flex flex-col items-center justify-center  '>
      <Image
        className='transition-transform duration-300 group-hover:scale-110'
        src={card.image}
        width={350}
        height={150}
        alt={card.title}
      />
      <div className='group-hover:scale-110 text-black'>{card.title}</div>
    </div>
  );
}
