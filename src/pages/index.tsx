import React, { useEffect, useRef, useState } from 'react';
import MainCharacter from '@public/static/main_character.svg';
import { useQuery } from 'react-query';
import { getUserCount } from './api/getUserCount';
import { useRouter } from 'next/router';

export default function Home() {
  const TAPBAR_HEIGHT = 84;
  const sliderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [dragStartPoint, setDragStartPoint] = useState(16);
  const { data, isSuccess } = useQuery(['getUserCount'], getUserCount);
  useEffect(() => {
    setTimeout(() => {
      sliderRef.current?.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }, 2000);
  }, [data, isSuccess]);

  let startX: number = 0;
  let startY: number;
  let moveX: number = 0;
  let moveY: number;

  const handleDragStart = (e: any) => {
    startX = e.pageX;
    startY = e.pageY;
  };

  const handleDragMove = (e: any) => {
    moveX = e.pageX - startX;
    if (moveX !== 0) {
      setDragStartPoint(moveX - window.innerWidth / 2 + 205 - 39);
    }
    moveY = e.target.clientLeft - startY;
  };

  const handleDragEnd = (e: any) => {
    console.log('끝', e);
  };

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
        <p
          draggable
          className="mb-[32px] text-[18px] font-normal leading-[25px]"
        >
          슬라이더를 밀어 입장하기!
        </p>

        <div className="relative mb-[16px] flex h-[100px] w-full items-center rounded-[50px] bg-main-2 py-[10px] px-[12px]">
          <button
            draggable
            // onTouchEnd={handleDragEnd}
            // onTouchMove={handleDragMove}
            // onTouchStart={handleDragStart}
            // style={{ left: dragStartPoint }}
            onDragEnd={handleDragEnd}
            onDrag={handleDragMove}
            onDragStart={handleDragStart}
            className="absolute h-[4.6875rem] w-[4.6875rem] cursor-pointer rounded-full bg-main-4"
          ></button>
        </div>

        <button
          onClick={() => router.push('/browsing')}
          className="cursor-pointer text-[18px] font-normal leading-[25px]"
        >
          둘러보기
        </button>
      </div>
    </div>
  );
}
