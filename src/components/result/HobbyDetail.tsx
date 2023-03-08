import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HobbyType } from 'types/result';

interface HobbyDetailProps {
  HobbyDetailTypes: HobbyType[];
  isShow: boolean;
}

function HobbyDetail({ HobbyDetailTypes, isShow = false }: HobbyDetailProps) {
  const [nickname, setNickName] = useState<string>('');
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('nickname') !== null) {
      setNickName(localStorage.getItem('nickname') as string);
    }
  }, []);
  const hobbyId = router?.query.hobbyid;
  const currentHobby: HobbyType = HobbyDetailTypes.filter((hobby) => {
    if (String(hobby.id) === hobbyId) return hobby;
  })[0];
  return (
    <div className={`px-5 pt-4 pb-12 ${!isShow && 'hidden'}`}>
      <p className="mb-10 text-[1.5rem] font-semibold text-main-4">
        더 알아보기
      </p>
      <div className=" mx-auto mb-[1.125rem] flex h-[190px] w-[190px] items-center justify-center rounded-[1.875rem] bg-gray-2">
        <Image
          width={100}
          height={100}
          src={currentHobby?.imageUrl}
          alt="hobby pictogramImage "
        />
      </div>
      <p className="mb-12 text-[1.375rem] font-semibold">
        {currentHobby?.name}
      </p>
      <p className="mb-8 text-[1.125rem] leading-[1.875rem]">
        {currentHobby?.description}
      </p>
      <p className="mb-24 text-[1.5rem] font-semibold">
        <span className=" text-main-3">{nickname}</span>
        <span className=" text-main-4">님 홀랑 즐기기</span>
      </p>
      <p className="mb-6 text-[1.125rem] font-normal">
        버튼을 눌러 자세히 알아봐요!
      </p>
    </div>
  );
}

export default HobbyDetail;
