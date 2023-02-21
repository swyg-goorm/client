import React from 'react';

interface ProgressBarProps {
  order: number;
}
export default function ProgressBar({ order }: ProgressBarProps) {
  return (
    <div className="h-[11px] w-full rounded-[20px] bg-gray-8">
      <div
        style={{ width: `${(order / 12) * 100}%` }}
        className="bg-main-4` h-full rounded-[20px]"
      ></div>
    </div>
  );
}
