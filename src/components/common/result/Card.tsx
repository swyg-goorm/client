import React from 'react';
import { useRouter } from 'next/router';
import ExampleHobby from '@public/static/example_hobby.svg';
import Button from '../Button';

interface CardProps {
  [key: string]: any;
}
export default function Card() {
  const router = useRouter();
  return (
    <div className="relative flex h-[20.5rem] w-[calc(100%-1rem)]  justify-center rounded-[1.875rem] border border-main-3 bg-main-1 ">
      <div className="flex h-[15.625rem] flex-col justify-center gap-5">
        <ExampleHobby />
        <p className="text-2xl text-gray-6">서핑</p>
      </div>

      <div className="absolute bottom-6 w-full px-4">
        <Button>더 알아보기</Button>
      </div>
    </div>
  );
}
