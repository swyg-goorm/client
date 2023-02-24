import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';

const reg = /[가-힣]{1,3}$/;

export default function Begin() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API 전송
    if (nickname === '') {
      setModal(true);
    }
  };

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const setClassNameByWidth = () =>
    innerWidth > 450 ? 'w-[410px]' : `w-[calc(${innerWidth}px-40px)]`;
  console.log(innerWidth);
  return (
    <div>
      {modal && (
        <Modal
          message="닉네임을 입력해주세요"
          onCloseModal={() => {
            setModal(false);
          }}
        />
      )}
      <div className="mt-28">
        <p className="text-3xl font-normal">홀랑에 빠질 준비 되셨나요?</p>
        <p className="mt-3 text-lg text-gray-8">
          인공지능이 홀랑 빠질 취미로 안내할거에요
        </p>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="mt-64">
          <Input
            nickname={nickname}
            placeholder="닉네임을 세글자 이내로 입력해주세요"
            setNickname={setNickname}
          />
          {!reg.test(nickname) && nickname.length > 0 && (
            <span className="mt-2 ml-5 block text-warning">
              한글로 세글자 이내까지 입력가능해요
            </span>
          )}
        </div>
        <div
          className={`fixed inset-x-0 bottom-2.5  m-auto ${setClassNameByWidth()}`}
        >
          <Button>홀랑 테스트 하러 가기</Button>
        </div>
      </form>
    </div>
  );
}
