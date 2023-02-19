import React, { useState } from 'react';

interface InputProps {
  placeholder: string;
}
export default function Input({ placeholder }: InputProps) {
  const [nickname, setNickname] = useState('');
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[71px] w-[410px] rounded-[30px] border-none bg-sub pl-[16px] placeholder:text-gray-6"
      onChange={handleNickname}
      value={nickname}
    />
  );
}
