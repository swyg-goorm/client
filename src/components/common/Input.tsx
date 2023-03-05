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
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" h-[4.375rem] w-full rounded-[1.875rem] border-none bg-sub-1 px-4 pl-4 placeholder:text-gray-6"
      onChange={handleNickname}
      value={nickname}
    />
  );
}
