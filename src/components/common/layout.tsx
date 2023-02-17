import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import arrow_back from '@public/images/arrow_back.svg';
import logo from '@public/images/logo_main.svg';

interface LayoutProps {
  isBack?: boolean;
  children?: React.ReactNode;
}

export default function Layout({ isBack = false, children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className="flex h-screen w-screen justify-center bg-slate-50">
      <div className="relative h-full w-full max-w-[450px] overflow-y-scroll bg-white px-[20px] scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
