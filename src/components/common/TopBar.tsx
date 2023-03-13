import Back from '@public/static/back.svg';
import MainLogo from '@public/static/main_logo.svg';
import TestResultLogo from '@public/static/test_result_logo.svg';
import Router from 'next/router';
import React from 'react';
import Image from 'next/image';

interface ITopBar {
  isBackButton?: boolean;
  mainMessage?: 'main' | 'result';
  onBackButton?: () => void;
}

export default function TopBar({
  isBackButton,
  mainMessage = 'main',
  onBackButton = () => {
    Router.back();
  },
}: ITopBar) {
  return (
    <div className="flex w-full justify-between py-6">
      {isBackButton ? (
        <button>
          <Back onClick={onBackButton} />
        </button>
      ) : (
        <div />
      )}

      {mainMessage === 'main' ? (
        <Image alt="logo" src="/static/logo_main.png" width="100" height="0" />
      ) : (
        <TestResultLogo />
      )}
      <div />
    </div>
  );
}
