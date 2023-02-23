import React from 'react';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';
import ExampleType from '@public/static/example_hollang_type.svg';
import Card from '@components/common/result/Card';

interface ResultProps {
  [key: string]: any;
}
export default function Result() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center">
      <section className="mt-[24px]">
        <p className="text-[24px] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 유형
        </p>
        <ExampleType className="mt-[16px]" />
        <p className="mt-[16px] text-[24px] text-gray-7">
          상상을 현실로 행동형
        </p>
        <p className="mt-[32px] w-[275px] text-[18px] text-gray-8">
          감정이 풍부하고 배려심이 많은 사막에서 물을 파는 발굴형은 혼자서도 즐
        </p>
      </section>
      <section className="mt-[32px]">
        <p className="text-[24px] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 취미
        </p>
        <p className="mt-[16px] text-[18px] text-gray-7">
          버튼을 눌러 자세히 둘러봐요!
        </p>
        <Card />
        <p className="mt-[32px]">스와이퍼</p>
      </section>
      <section className="mt-[48px] w-full">
        <p className="text-[24px] text-main-4">나와 찰떡인 홀랑 유형</p>
        <p className="mt-[20px]">아래 버튼을 눌러 알아봐요!</p>
        <p className="mt-[20px]">이미지</p>
        <div className="mt-[24px]">
          <div>
            <Button>공유하기</Button>
          </div>
          <div className="mt-[16px]">
            <Button property="secondary">다시하기</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
