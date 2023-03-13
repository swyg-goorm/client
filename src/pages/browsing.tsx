import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { HobbyType } from 'types/hobby';

import { getAllHobbies } from '../api/hobbies';

import Top20List from '@components/common/Top20List';
export default function browsing() {
  const { data: hobbyData, isSuccess } = useQuery(
    'getAllHobbies',
    getAllHobbies,
  );
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef) {
      setContainerWidth(
        containerRef?.current?.getBoundingClientRect().width as number,
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[calc(100vh-84px)]">
      <TopBar />
      <p className="mt-[1.5rem] mb-16 text-center font-AppleEB text-2xl text-main-4">
        TOP 20 홀랑 목록
      </p>
      <section className="flex h-[31.25rem] flex-col gap-4 overflow-scroll">
        {isSuccess &&
          hobbyData.data.data.hobbies.map((hobby: HobbyType, index) => (
            <div className="flex items-center gap-4" key={hobby.id}>
              <Image
                className="rounded-full"
                alt="images that explain hobby"
                width={50}
                height={50}
                src={hobby.imageUrl}
              />
              <Top20List
                ranking={index + 1}
                count={hobby.recommendCount}
                title={hobby.name}
              />
            </div>
          ))}
      </section>
      <div
        style={{ width: `${containerWidth}px` }}
        className={` fixed left-[50%] bottom-[1.375rem] translate-x-[-50%] bg-gray-0`}
      >
        <Button onClick={() => router.back()}>이전으로</Button>
      </div>
    </div>
  );
}
