import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const LOADING_IMAGE_SRC = `${process.env.NEXT_PUBLIC_API_CLOUD}/images/etc/loading.gif`;

export default function Loader() {
  const [nickname, setNickname] = useState<string>();
  useEffect(() => {
    setNickname(localStorage.getItem('nickname') || '');
  }, []);

  return (
    <div className="flex h-[48rem] flex-col items-center justify-center">
      <Image alt="loading" src={LOADING_IMAGE_SRC} width={300} height={300} />
      <p className="mt-6 text-[1.375rem] leading-8 text-gray-6">
        인공지능이 {nickname}님을 위한
        <br /> 최적의 취미를 찾고있어요!
      </p>
    </div>
  );
}
