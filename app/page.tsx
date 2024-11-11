import Image from 'next/image';
import MyParagraph from '@/components/MyParagraph';
import MyWordAnimation from '@/components/MyWordAnimation';
const paragrapg: string =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit blanditiis alias expedita quisquam ullam, sed impedit, temporibus inventore rerum aperiam facere aspernatur nisi aliquid adipisci, totam mollitia. Totam, blanditiis?';

export default function Home() {
  return (
    <main className='bg-black flex flex-col items-center'>
      <div className='h-screen'></div>
      <MyParagraph paragrapg={paragrapg} />
      <MyWordAnimation paragrapg={paragrapg} />
      <div className='h-screen'></div>
    </main>
  );
}
