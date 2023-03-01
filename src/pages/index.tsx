import React, { useEffect, useRef, useState } from 'react';
import MainCharacter from '@public/static/main_character.svg';
import { useQuery } from 'react-query';
import { getUserCount } from './api/getUserCount';
import { useRouter } from 'next/router';
import Forward from '@public/static/forward.svg';

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

  const [unlocked, setUnlocked] = useState(false);
  const [x, setX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const LAYOUT_PADDING = 20;
  const TOUCH_BUTTON_SIZE = 80;
  const BUTTON_PADDING = 12;

  const handleMouseDown = (e: any) => {
    setDragging(true);
    setX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (dragging) {
      if (e.touches) {
        return setX(
          e.touches[0].clientX -
            LAYOUT_PADDING -
            TOUCH_BUTTON_SIZE / 2 -
            BUTTON_PADDING,
        );
      }
      setX(e.clientX);
    }
  };

  const handleMouseUp = (e: any) => {
    setDragging(false);
    const PC_SPARE_VALUE = 30;
    const MOBILE_SPARE_VALUE = 15;
    if (e.touches) {
      if (
        x >
        window.innerWidth -
          LAYOUT_PADDING * 2 -
          TOUCH_BUTTON_SIZE -
          BUTTON_PADDING * 2 -
          MOBILE_SPARE_VALUE
      ) {
        setUnlocked(true);
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
      setUnlocked(true);
      return router.push('/begin');
    } else {
      setX(0);
    }
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
                x > 0
                  ? window.innerHeight >= 450
                    ? x - window.innerWidth / 2 + 225 - 25
                    : x
                  : 0
              }px)`,
            }}
            className={`h-[80px] w-[80px] cursor-pointer rounded-full bg-main-3`}
          >
            {unlocked ? '슬라이드 잠금 해제됨' : '슬라이드 해제'}
          </button>
          {!dragging && (
            <>
              <Forward />
              <Forward />
              <Forward />
            </>
          )}
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
