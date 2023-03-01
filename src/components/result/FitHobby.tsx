import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FitHobbyType } from 'types/result';
import Image from 'next/image';

interface FitHobbyProps {
  fitHobbyTypes: FitHobbyType[];
  [key: string]: any;
}

export default function FitHobby({ fitHobbyTypes }: FitHobbyProps) {
  const [select, setSelect] = useState<number>(0);
  const selectedType = fitHobbyTypes.filter(
    (fitHobbyType) => +fitHobbyType.id === select,
  )[0];

  return (
    <div>
      <p className="py-5 text-[24px] text-main-4">나와 찰떡인 홀랑 유형</p>
      <section className="flex">
        {fitHobbyTypes.map((fitHobbyType: FitHobbyType, index: number) => (
          <div
            className="flex w-full flex-col items-center border-b border-gray-5"
            key={fitHobbyType.id}
          >
            <div className="rounded-[30px] bg-gray-2 p-3">
              <Image
                alt="fit-type"
                src={fitHobbyType.imageUrl}
                width={80}
                height={80}
                onClick={() => {
                  setSelect(fitHobbyType.id);
                }}
              />
            </div>
            <span className="py-3">{index + 1}위</span>
          </div>
        ))}
      </section>
      <section>
        {select === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="question-mark"
              src={`${process.env.NEXT_PUBLIC_API_CLOUD}/images/etc/question-mark.png`}
              width={180}
              height={180}
              className="mt-10 mb-5"
            />
            <p className="text-[22px] text-gray-7">
              꼬꼬꼬님과 잘 맞는 유형을 선택해봐요!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="py-[60px] text-[24px] text-main-3">
              {selectedType.name}
            </p>
            <Image
              alt="question-mark"
              src={selectedType.imageUrl}
              width={180}
              height={180}
            />
            <p className="mt-[28px] text-[18px] leading-[25px]">
              {selectedType.description}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
