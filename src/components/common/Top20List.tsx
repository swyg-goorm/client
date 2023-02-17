import React from 'react';

interface Top20ListProps {
  ranking: number;
  title: string;
  count: number;
}

export default function Top20List({ ranking, title, count }: Top20ListProps) {
  return (
    <div className="flex h-[70px] w-[410px] items-center justify-between rounded-[30px] bg-sub px-[40px] text-title3 text-[#545454]">
      <span>{ranking}위</span>
      <span>{title}</span>
      <span>{count}명</span>
    </div>
  );
}
