import React, { useEffect, useState } from 'react';

import TopBar from './TopBar';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [applicationValue, setApplicationValue] = useState<
    | {
        innerWidth: number;
        innerHeight: number;
      }
    | undefined
  >();

  useEffect(() => {
    setApplicationValue({
      innerHeight: window.screen.height,
      innerWidth: window.screen.width,
    });
  }, []);

  const getWidth = (
    innerWidth: number | undefined,
    innerHeight: number | undefined,
  ): string => {
    if (innerHeight !== undefined && innerWidth !== undefined) {
      console.log(innerHeight, innerWidth);
      if (innerHeight / innerWidth >= 2) {
        console.log('2보다 넘어요');
        return `max-w-full`;
      }
    }
    console.log('2보다 안돼요');
    return 'max-w-[28.125rem]';
  };

  return (
    <div className="flex h-screen w-screen justify-center bg-main-4 ">
      <div
        className={`relative h-full w-full ${getWidth(
          applicationValue?.innerWidth,
          applicationValue?.innerHeight,
        )} overflow-y-scroll bg-gray-0 px-5`}
      >
        {children}
      </div>
    </div>
  );
}
