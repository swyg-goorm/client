import Image from 'next/image';
import React, { useEffect } from 'react';
import { shareKakao } from '@utils/shareKaKaoLink';
import { useRouter } from 'next/router';

export default function KakaoShare() {
  const router = useRouter();
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
      alt="share_kakaotalk"
      src="/static/share_kakaotalk.svg"
      width={100}
      height={100}
      onClick={() => shareKakao(router.asPath)}
      className="w-[20.625rem] cursor-pointer"
    />
  );
}
