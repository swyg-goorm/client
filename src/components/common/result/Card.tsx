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
    <div className="relative flex h-[328px] w-[265px]  justify-center rounded-[30px] border border-main-3 bg-main-1 ">
      <div className="flex h-[200px] items-center">
        <ExampleHobby />
      </div>
      <div className="absolute bottom-[24px] w-full px-[16px]">
        <Button>더 알아보기</Button>
      </div>
    </div>
  );
}
