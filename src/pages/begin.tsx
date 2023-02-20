import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/common/layout';
import Input from '@components/common/Input';

const reg = /[^가-힣]{1,3}/;

export default function Begin() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [nicknameError, setNicknameError] = useState<string>('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // API 전송
    console.log(nickname);
  };
  console.log(reg.test(nickname));

  return (
    <Layout>
      <div className="mt-[108px]">
        <p className="text-[30px] ">홀랑에 빠질 준비 되셨나요?</p>
        <p className="text-[18px] text-black1">
          인공지능이 당신을 홀랑 빠질 취미로 추천해줄거에요
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-[264px]">
          <Input
            nickname={nickname}
            placeholder="닉네임을 세글자 이내로 입력해주세요"
            setNickname={setNickname}
          />
          {nicknameError && <span>한글로 세글자 이내까지 입력가능해요</span>}
        </div>
        <button
          className="fixed  inset-x-0 bottom-[40px] m-auto flex h-[95px] w-full max-w-[430px] cursor-pointer items-center justify-center rounded-[30px] bg-cyan-100 text-[24px]"
          type="submit"
        >
          홀랑 테스트 하러 가기
        </button>
      </form>
    </Layout>
  );
}
