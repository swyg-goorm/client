import TopBar from '@components/common/TopBar';
import Forward from '@public/static/forward.svg';
import MainCharacter from '@public/static/main_character.svg';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { getUserCount } from '../api/getUserCount';

export default function Home() {
  const TAPBAR_HEIGHT = 84;
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data, isSuccess } = useQuery(['getUserCount'], getUserCount);
  useEffect(() => {
    sliderRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      sliderRef.current?.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }, 2000);
  }, [data, isSuccess]);

  const [x, setX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const LAYOUT_PADDING = 20;
  const TOUCH_BUTTON_SIZE = 80;
  const BUTTON_PADDING = 12;
  const PC_SPARE_VALUE = 50;
  const MOBILE_SPARE_VALUE = 25;

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      if (e.touches) {
        if (
          x >
          window.innerWidth -
            LAYOUT_PADDING * 2 -
            TOUCH_BUTTON_SIZE -
            BUTTON_PADDING * 2 -
            MOBILE_SPARE_VALUE
        ) {
          return;
        }
        return setX(
          e.touches[0].clientX -
            LAYOUT_PADDING -
            TOUCH_BUTTON_SIZE / 2 -
            BUTTON_PADDING,
        );
      }
      if (
        x >
        window.innerWidth / 2 +
          225 -
          LAYOUT_PADDING -
          TOUCH_BUTTON_SIZE / 2 -
          BUTTON_PADDING -
          PC_SPARE_VALUE
      ) {
        return;
      }
      setX(e.clientX);
    }
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    if (e.touches) {
      if (
        x >
        window.innerWidth -
          LAYOUT_PADDING * 2 -
          TOUCH_BUTTON_SIZE -
          BUTTON_PADDING * 2 -
          MOBILE_SPARE_VALUE
      ) {
        return router.push('/begin');
      } else {
        return setX(0);
      }
    }
    if (
      x >
      window.innerWidth / 2 +
        225 -
        LAYOUT_PADDING -
        TOUCH_BUTTON_SIZE / 2 -
        BUTTON_PADDING -
        PC_SPARE_VALUE
    ) {
      return router.push('/begin');
    } else {
      setX(0);
    }
  };

  return (
    <div ref={containerRef} className="h-full">
      <TopBar />
      <div
        style={{ height: `calc(100% - ${TAPBAR_HEIGHT * 2}px)` }}
        className={`flex flex-col items-center justify-center`}
      >
        <MainCharacter />
        <p className="text-[1.125rem]">
          당신은 {data?.data.data.testResponse.count}번째 홀랑과 함께해요
        </p>
      </div>
      <div
        ref={sliderRef}
        className="flex h-screen flex-col  items-center justify-end pb-[4rem]"
      >
        <p
          draggable
          className="mb-[2rem] text-[1.125rem] font-normal leading-[1.57rem]"
        >
          슬라이더를 밀어 입장하기!
        </p>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="slider relative mb-[16px] flex h-[100px] w-full items-center rounded-[50px] bg-main-2 py-[10px] px-[12px]"
        >
          <button
            style={{
              transform: `translateX(${
                containerRef.current?.clientWidth !== undefined && x > 0
                  ? window.innerHeight >= containerRef.current?.clientWidth
                    ? x -
                      window.innerWidth / 2 +
                      containerRef.current?.clientWidth / 2 -
                      25
                    : x
                  : 0
              }px)`,
            }}
            className={`h-[80px] w-[80px] cursor-pointer rounded-full bg-main-3`}
          ></button>
          {!isDragging && (
            <>
              <Forward />
              <Forward />
              <Forward />
            </>
          )}
        </div>

        <button
          onClick={() => router.push('/browsing')}
          className="cursor-pointer text-[1.125rem] font-normal leading-[1.57rem]"
        >
          둘러보기
        </button>
      </div>
    </div>
  );
}
