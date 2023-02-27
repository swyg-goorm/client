import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { shareKakao } from '@utils/shareKaKaoLink';
import ShareKakaoTalk from '@public/static/share_kakaotalk.svg';

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
    <div>
      <ShareKakaoTalk onClick={shareKakao} />
    </div>
  );
}
