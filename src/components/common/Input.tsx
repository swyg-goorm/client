import React, { useState } from 'react';

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
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[71px] w-full rounded-[20px] border-none bg-sub pl-[16px] text-[16px] placeholder:text-gray-6"
      onChange={handleNickname}
      value={nickname}
      autoFocus
    />
  );
}
