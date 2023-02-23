import React from 'react';
import { useRouter } from 'next/router';
import ExampleType from '@public/static/example_hollang_type.svg';

export default function Share() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center  text-center">
      <p className="text-[24px] text-main-4">
        나의<span className="text-main-3"> 홀랑 </span>공유하기
      </p>
      <section className="mt-[16px] flex h-[598px] w-[380px] flex-col items-center rounded-[20px]  bg-main-1 py-[8px]">
        <ExampleType />
        <p className="mt-[16px] text-[24px] text-main-4">
          상상을 현실로 행동형
        </p>
        <p className="mt-[16px] px-[40px] text-[18px] leading-[30px] text-gray-8">
          감정이 풍부하고 배려심이 많은 사막에서 파는 발굴형 혼자서도 즐길 수
          있어요.
        </p>
      </section>
    </div>
  );
}
