import React from 'react';
import Back from '@assets/back.svg';
import MainLogo from '@assets/main_logo.svg';

interface ITopBar {
  isBackButton?: boolean;
}

export default function TopBar({ isBackButton }: ITopBar) {
  return (
    <div className="flex w-full justify-between p-6">
      {isBackButton ? (
        <button>
          <Back />
        </button>
      ) : (
        <div></div>
      )}
      <MainLogo></MainLogo>
      <div></div>
    </div>
  );
}
