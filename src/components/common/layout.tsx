import React from 'react';

interface LayoutProps {
  isBack?: boolean;
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen justify-center bg-cyan-900">
      <div className="relative h-full w-full max-w-[450px] overflow-y-scroll bg-white px-[20px] scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
