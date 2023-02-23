import React from 'react';
import { useRouter } from 'next/router';
// import ExampleType from '@public/static/example_hollang_type.svg';
import Download from '@public/static/download.svg';

export default function Share() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center px-[15px] text-center">
      <p className="my-[36px] text-[24px] text-main-4">
        나의<span className="text-main-3 "> 홀랑 </span>공유하기
      </p>
      <section className="flex h-[598px] w-full flex-col items-center rounded-[20px] bg-main-1   py-[8px]">
        {/* <ExampleType /> */}
        <p className="mt-[16px] text-[24px] text-main-4">
          상상을 현실로 행동형
        </p>
        <p className="my-[16px] px-[40px] text-[18px] leading-[30px] text-gray-8">
          감정이 풍부하고 배려심이 많은 사막에서 <br /> 파는 발굴형 혼자서도
          즐길 수 있어요.
        </p>
        <div className="my-[12px] w-[324px] border-[0.5px] border-gray-5" />
        <p className="text-[24px] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님과 잘 맞는 취미
        </p>
        <article className="bg-between my-[24px] flex w-[240px] justify-between">
          <div className="h-[49px] w-[49px] rounded-full bg-gray-4" />
          <div className="h-[49px] w-[49px] rounded-full bg-gray-4" />
          <div className="h-[49px] w-[49px] rounded-full bg-gray-4" />
        </article>
      </section>
      <section className="mt-[21px] flex w-full text-gray-7">
        <div>
          <Download />
          <p className="mt-[4px] text-[14px] text-gray-7">저장</p>
        </div>
        <div>카카오톡으로 결과 공유하기</div>
      </section>
    </div>
  );
}
