import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { shareKakao } from '@utils/shareKaKaoLink';
import ShareKakaoTalk from '@public/static/share_kakaotalk.svg';

export default function KakaoShare() {
  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const router = useRouter();

  return (
    <div>
      <ShareKakaoTalk
        onClick={() => shareKakao('http://localhost:3000/share', 'title')}
      />
    </div>
  );
}
