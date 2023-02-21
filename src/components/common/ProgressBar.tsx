import React from 'react';

interface ProgressBarProps {
  order: number;
  [key: string]: any;
}
export default function ProgressBar({ order, ...rest }: ProgressBarProps) {
  return (
    <div className="h-[11px] w-full rounded-[20px] bg-gray-3" {...rest}>
      <div
        style={{ width: `${(order / 12) * 100}%` }}
        className="h-full rounded-[20px] bg-main-4"
      ></div>
    </div>
  );
}
