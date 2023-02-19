import React from 'react';

interface ProgressBarProps {
  order: number;
  [key: string]: any;
}
export default function ProgressBar({ order }: ProgressBarProps) {
  return (
    <div className="bg-gray-8 h-[11px] w-full rounded-[20px]">
      <div
        className={`h-[11px]  w-${order}/12 rounded-[20px] bg-cyan-900`}
      ></div>
    </div>
  );
}
