import Image from 'next/image';
import { useEffect, useState } from 'react';

const LOADING_IMAGE_SRC = `${process.env.NEXT_PUBLIC_API_CLOUD}/images/etc/loading.gif`;

export default function Loader() {
  const [nickname, setNickname] = useState<string>();
  useEffect(() => {
    setNickname(localStorage.getItem('nickname') || '');
  }, []);

  return (
    <div className="z-10 flex h-[48rem] flex-col items-center justify-center">
      <div className=" h-[16rem] w-[16rem] items-center justify-center overflow-hidden rounded-full bg-main-4">
        <div className="mt-[2.6rem] h-[10rem] w-[800rem] overflow-hidden">
          <Image
            alt="loading"
            src="/static/gif 이미지 (16가지).png"
            width={3400}
            height={1000}
            className="z-10 animate-pass-by"
          />
        </div>
      </div>
      <p className="mt-6 text-[1.375rem] leading-8 text-gray-6">
        인공지능이 {nickname}님을 위한
        <br /> 최적의 취미를 찾고있어요!
      </p>
    </div>
  );
}
