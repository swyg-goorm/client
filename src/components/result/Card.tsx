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
    <div className="relative flex h-[20.5rem] w-[calc(100%-1rem)]  justify-center rounded-[1.875rem] border border-main-3 bg-main-1 ">
      <div className="flex h-[15.625rem] flex-col items-center justify-center gap-5">
        <Image alt="hobby" src={hobby.imageUrl} width={80} height={80} />
        <p className="text-2xl text-gray-6">{hobby?.name}</p>
      </div>
      <div className="absolute bottom-6 w-full px-4">
        <Button
          onClick={() => {
            router.push({
              pathname: 'result',
              query: { id: id, view: 'hobbyDetail', hobbyid: hobby.id },
            });
          }}
        >
          더 알아보기
        </Button>
      </div>
    </div>
  );
}
