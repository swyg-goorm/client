import React from 'react';

interface ProgressBarProps {
  order: number;
  [key: string]: any;
}
export default function ProgressBar({ order }: ProgressBarProps) {
  return (
    <div className="h-[11px] w-[432px] rounded-[20px] bg-[#d9d9d9]">
      <div
        className={`absolute h-[11px] w-[calc(36px*${order})] rounded-[20px] bg-cyan-900`}
      ></div>
    </div>
  );
}
