import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Example from '@public/static/example.svg';
import Download from '@public/static/download.svg';
import * as htmlToImage from 'html-to-image';
import KakaoShare from '@components/share/KakaoShare';

export default function Share() {
  const domEl = useRef<any>(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center px-[0.9375rem] text-center">
      <p className="my-[2.25rem] text-[1.5rem] text-main-4">
        나의<span className="text-main-3 "> 홀랑 </span>공유하기
      </p>
      <div
        id="domEl"
        ref={domEl}
        className="flex h-[37.375rem] w-full flex-col items-center rounded-[1.25rem] border border-main-3 bg-main-1 py-2"
      >
        <Example className="my-4" />
        <p className="mt-[1rem] text-[1.5rem] text-main-4">
          상상을 현실로 행동형
        </p>
        <p className="my-[1rem] px-[2.5rem] text-[1.125rem] leading-[1.875rem] text-gray-8">
          감정이 풍부하고 배려심이 많은 사막에서 <br /> 파는 발굴형 혼자서도
          즐길 수 있어요.
        </p>
        <div className="my-[0.75rem] w-[20.25rem] border-[0.0313rem] border-gray-5" />
        <p className="text-[1.5rem] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님과 잘 맞는 취미
        </p>
        <article className="bg-between my-[1.5rem] flex w-[15rem] justify-between">
          <div className="h-[3.0625rem] w-[3.0625rem] rounded-full bg-gray-4" />
          <div className="h-[3.0625rem] w-[3.0625rem] rounded-full bg-gray-4" />
          <div className="h-[3.0625rem] w-[3.0625rem] rounded-full bg-gray-4" />
        </article>
      </div>
      <section className="mt-[1.3125rem] flex w-full text-gray-7">
        <div>
          <Download onClick={downloadImage} />
          <p className="mt-[0.25rem] text-[0.875rem] text-gray-7">저장</p>
        </div>
        <div className="ml-5">
          <KakaoShare />
        </div>
      </section>
    </div>
  );
}
