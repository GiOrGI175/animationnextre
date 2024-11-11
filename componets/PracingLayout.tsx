'use client';
import { ReactElement, useState } from 'react';

export default function PracingLayout({
  children,
  href,
  MyContentlayout,
}: {
  children: React.ReactNode;
  href: string;
  MyContentlayout?: React.ElementType;
}) {
  const [open, estOpen] = useState(false);

  const ShowFlayout = MyContentlayout && open;

  return (
    <div>
      <p>header</p>
      {children}
      {MyContentlayout && <MyContentlayout />}
      <p>footer</p>
    </div>
  );
}
