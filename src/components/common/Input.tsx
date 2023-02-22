import React, { useEffect, useRef, useState } from 'react';

interface InputProps {
  placeholder: string;
  nickname: string;
  setNickname: (nickname: string) => void;
}

export default function Input({
  placeholder,
  nickname,
  setNickname,
}: InputProps) {
  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nicknameRef.current) {
      // 할당한 DOM 요소가 불러지면 (마운트 되면)
      nicknameRef.current.focus(); // focus 할당!
    }
  }, []);
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[70px] w-full rounded-[30px] border-none bg-sub-1 px-[16px] pl-[16px] text-[16px] placeholder:text-gray-6"
      onChange={handleNickname}
      value={nickname}
      ref={nicknameRef}
    />
  );
}
