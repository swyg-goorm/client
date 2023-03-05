import KakaoShare from '@components/result/KakaoShare';
import * as htmlToImage from 'html-to-image';
import Image from 'next/image';
import { useRef } from 'react';
import { HobbyType } from 'types/result';

interface ShareProps {
  hobbyType: HobbyType;
  userName: string;
  hobbies: HobbyType[];
  isShow: boolean;
  [key: string]: any;
}

export default function Share({
  hobbyType,
  userName,
  hobbies,
  isShow,
}: ShareProps) {
  const containerRef = useRef<any>(null);

  const handleDownload = async () => {
    const dataUrl = await htmlToImage.toPng(containerRef.current);
    const link = document.createElement('a');
    link.download = 'hollang-hobby.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={`flex flex-col items-center px-[0.9375rem] text-center ${
        !isShow && 'hidden'
      }`}
    >
      <p className="my-[2.25rem] text-[1.5rem] text-main-4">
        나의<span className="text-[1.5rem] text-main-3"> 홀랑 </span>공유하기
      </p>
      <div
        id="containerRef"
        ref={containerRef}
        className="flex h-[37.375rem] w-full flex-col items-center rounded-[1.25rem] border border-main-3 bg-main-1 py-2"
      >
        <Image
          alt="hobby"
          src={hobbyType.imageUrl}
          width={150}
          height={150}
          className="py-4"
        />
        <p className="mt-[1rem] text-[1.5rem] text-main-4">{hobbyType.name}</p>
        <p className="my-[1rem] text-[1.125rem] leading-[1.875rem] text-gray-8">
          {hobbyType.description}
        </p>
        <div className="my-3 w-[20.25rem] border-[0.0313rem] border-gray-5" />
        <p className="mt-4 text-[1.5rem] text-main-4">
          <span className="text-[1.5rem] text-main-3">{userName}</span>님과 잘
          맞는 취미
        </p>
        <article className="bg-between  my-[1.5rem] flex w-[15rem] justify-between">
          {hobbies.map((hobby: HobbyType, index: number) => (
            <Image
              alt="hobby"
              src={hobby.imageUrl}
              width={50}
              height={50}
              key={index}
            />
          ))}
        </article>
      </div>
      <section className="mt-[1.3125rem] flex w-full text-gray-7">
        <div
          onClick={handleDownload}
          className="mr-5 flex w-[3rem] cursor-pointer flex-col items-center"
        >
          <Image
            alt="download"
            src="/static/download.svg"
            width={30}
            height={30}
          />
          <p className="mt-[0.25rem] text-[0.875rem] text-gray-7">저장</p>
        </div>
        <KakaoShare />
      </section>
    </div>
  );
}
