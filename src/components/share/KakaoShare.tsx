import React, { useEffect } from 'react';
import { shareKakao } from '@utils/shareKaKaoLink';
import Image from 'next/image';

export default function KakaoShare() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Image
      alt=""
      src="/static/share_kakaotalk.svg"
      width={100}
      height="100"
      onClick={shareKakao}
      className="w-[20.625rem]"
    />
  );
}
