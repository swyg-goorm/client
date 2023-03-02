import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import { HobbyType } from 'types/result'

import Button from '../common/Button'

interface CardProps {
  hobby: HobbyType;
}
export default function Card({ hobby }: CardProps) {
  const router = useRouter();
  return (
    <div className="relative flex h-[20.5rem] w-[calc(100%-1rem)]  justify-center rounded-[1.875rem] border border-main-3 bg-main-1 ">
      <div className="flex h-[15.625rem] flex-col items-center justify-center gap-5">
        <Image
          alt="example_hobby"
          src="/static/example_hobby.svg"
          width={90}
          height={90}
        />
        {/* 서버측에서 구현되면 주석 해제 */}
        {/* <Image alt="hobby" src={hobby.imageUrl} width={50} height={50} /> */}
        <p className="text-2xl text-gray-6">{hobby?.name}</p>
      </div>
      <div className="absolute bottom-6 w-full px-4">
        <Button
          onClick={() => {
            router.push(`/detail?id=${hobby.id}`);
          }}
        >
          더 알아보기
        </Button>
      </div>
    </div>
  );
}
