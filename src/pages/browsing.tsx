import Button from '@components/common/Button'
import TopBar from '@components/common/TopBar'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { HobbyType } from 'types/hobby'

import { getAllHobbies } from '../api/hobbies'

import Top20List from '@components/common/Top20List';
export default function browsing() {
  const { data: hobbyData, isSuccess } = useQuery(
    'getAllHobbies',
    getAllHobbies,
  );
  const router = useRouter();

  return (
    <div className="relative h-[calc(100vh-84px)] py-6">
      <TopBar isBackButton />
      <p className="mb-5 text-center text-2xl font-normal text-main-4">
        TOP 20 홀랑 목록
      </p>
      <p className="mb-[3.75rem] text-center text-lg font-normal">
        홀랑의 TOP 20 취미를 모아봤어요!
      </p>
      <section className="flex h-[50%] flex-col gap-4 overflow-scroll">
        {isSuccess &&
          hobbyData.data.data.hobbies.map((hobby: HobbyType, index) => (
            <div className="flex gap-4" key={hobby.id}>
              <Image
                className=" rounded-full"
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
      <div className={`sticky left-[50%] top-[85%]`}>
        <Button onClick={() => router.back()}>이전으로</Button>
      </div>
    </div>
  );
}
