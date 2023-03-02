import React from 'react'

import Button from './Button'

interface ModalProps {
  message: string;
  onCloseModal: () => void;
}

export default function Modal({ message, onCloseModal }: ModalProps) {
  return (
    <div className="fixed inset-x-0 inset-y-0 z-20 ">
      <div
        className="absolute inset-0 z-20 bg-gray-8/[.64] opacity-80 "
        onClick={onCloseModal}
      />
      <div className="absolute inset-0 z-20 m-auto flex h-[10.625rem] max-w-[25.625rem]  flex-col items-center justify-evenly rounded-[30px] bg-white text-xl font-normal text-gray-7">
        <p className="mt-[0.9375rem]">{message}</p>
        <div className="mt-4 w-[14.5rem]">
          <Button onClick={onCloseModal} property="detail">
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
