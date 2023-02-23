import React, { useEffect, useRef } from 'react';
import MainCharacter from '@public/static/main_character.svg';
import { useQuery } from 'react-query';
import { getUserCount } from './api/getUserCount';

export default function Home() {
  const TAPBAR_HEIGHT = 84;
  const sliderRef = useRef<HTMLDivElement>(null);
  const { data, isSuccess } = useQuery(['getUserCount'], getUserCount);
  useEffect(() => {
    setTimeout(() => {
      sliderRef.current?.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }, 2000);
  }, [data, isSuccess]);

  return (
    <div className="h-full">
      <div
        style={{ height: `calc(100% - ${TAPBAR_HEIGHT * 2}px)` }}
        className={`flex flex-col items-center justify-center`}
      >
        <MainCharacter />
        <p>당신은 1,324번쨰 홀랑과 함꼐해요</p>
      </div>
      <div
        ref={sliderRef}
        className="flex h-screen flex-col  items-center justify-end pb-[64px]"
      >
        <p className="mb-[32px] text-[18px] font-normal leading-[25px]">
          슬라이더를 밀어 입장하기!
        </p>
        <div className="mb-[16px] flex h-[100px] w-full items-center rounded-[50px] bg-main-2 py-[10px] px-[12px]">
          실험용
        </div>
        <button className="cursor-pointer text-[18px] font-normal leading-[25px]">
          둘러보기
        </button>
      </div>
    </div>
  );
}
