import React from 'react'

interface Top20ListProps {
  ranking: number;
  title: string;
  count: number;
}

export default function Top20List({ ranking, title, count }: Top20ListProps) {
  return (
    <div className="text-title3 flex h-[4.375rem] w-full items-center justify-between rounded-[1.875rem] bg-sub-1 px-10 text-gray-8">
      <span>{ranking}위</span>
      <span>{title}</span>
      <span>{count}명</span>
    </div>
  );
}
