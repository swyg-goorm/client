import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import arrow_back from '/public/images/arrow_back.svg';
import logo from '/public/images/logo_main.svg';

interface LayoutProps {
  isBack?: boolean;
  children?: React.ReactNode;
}

export default function Layout({ isBack = false, children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className="bg-grey-2 flex h-screen w-screen justify-center">
      <div className="bg-grey-1 relative h-full w-full max-w-[420px] overflow-y-scroll">
        <header className="relative flex h-[75px] w-full  justify-center">
          {isBack && (
            <Image
              alt="back"
              src={arrow_back}
              onClick={() => {
                router.back();
              }}
              className="absolute inset-y-0 left-[20px] my-auto cursor-pointer"
            />
          )}
          <Image
            alt="logo"
            src={logo}
            onClick={() => {
              router.push('/');
            }}
            className="cursor-pointer"
          />
        </header>
        {children}
      </div>
    </div>
  );
}
