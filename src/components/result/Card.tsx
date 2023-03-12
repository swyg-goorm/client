import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { HobbyType } from 'types/result';

import Button from '../common/Button';

interface CardProps {
  id: string | number | string[];
  hobby: HobbyType;
}
export default function Card({ hobby, id }: CardProps) {
  const router = useRouter();
  return (
    <div className="relative flex h-[16.5625rem] w-[calc(100%-1rem)] justify-center rounded-[1.875rem] border border-main-3 ">
      <div className="flex h-[13rem] flex-col items-center justify-center gap-5">
        <Image alt="hobby" src={hobby.imageUrl} width={70} height={70} />
        <p className="text-[1.125rem] text-gray-6">{hobby?.name}</p>
      </div>
      <div className="absolute bottom-6 w-full px-4">
        <Button
          onClick={() => {
            router.push({
              pathname: 'result',
              query: { id: id, view: 'hobbyDetail', hobbyid: hobby.id },
            });
          }}
          className="text-[1rem]"
        >
          더 알아보기
        </Button>
      </div>
    </div>
  );
}
