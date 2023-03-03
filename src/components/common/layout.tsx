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
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  }, []);

  const getWidth = (
    innerWidth: number | undefined,
    innerHeight: number | undefined,
  ): string => {
    if (innerHeight !== undefined && innerWidth !== undefined) {
      if (innerHeight / innerWidth > 2) {
        return `max-w-[${window.innerWidth / 16}rem]`;
      }
    }
    return 'max-w-[390px]';
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
