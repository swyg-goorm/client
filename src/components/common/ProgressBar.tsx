import React from 'react'

interface ProgressBarProps {
  order: number;
  [key: string]: any;
}
export default function ProgressBar({ order, ...rest }: ProgressBarProps) {
  return (
    <div className="h-[11px] w-full rounded-[1.25rem] bg-gray-3" {...rest}>
      <div
        style={{ width: `${(order / 12) * 100}%` }}
        className="h-full rounded-[1.25rem] bg-main-4"
      ></div>
    </div>
  );
}
