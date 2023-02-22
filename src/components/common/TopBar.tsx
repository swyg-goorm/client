import React from 'react';

interface ITopBar {
  isBackButton?: boolean;
}

export default function TopBar({ isBackButton }: ITopBar) {
  return (
    <div className="flex w-full justify-between p-6">
      {isBackButton ? <button></button> : <div></div>}
      <div></div>
    </div>
  );
}
