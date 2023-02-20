import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/common/layout';
import Input from '@components/common/Input';

export default function Begin() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  // const handleSubmit = () => {
  // const reg = /[^가-힣]{1,3}/
  console.log(nickname);
  // };

  return (
    <Layout>
      <div className="mt-[111px]">
        <p className="text-[30px] ">홀랑에 빠질 준비 되셨나요?</p>
        <p className="text-[18px] text-black1">
          인공지능이 당신을 홀랑 빠질 취미로 추천해줄거에요
        </p>
      </div>
      <div className="mt-[311px]">
        <Input
          nickname={nickname}
          placeholder="닉네임을 세글자 이내로 입력해주세요"
          setNickname={setNickname}
        />
      </div>
      <div
        className="fixed inset-x-0 bottom-0 m-auto flex h-[95px] w-full max-w-[450px] cursor-pointer items-center justify-center rounded-t-[20px] bg-cyan-100 text-[24px]"
        // onClick={handleSubmit}
      >
        홀랑 테스트 하러 가기
      </div>
    </Layout>
  );
}
