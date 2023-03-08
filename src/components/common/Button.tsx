import React, { useState } from 'react';

interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  property?: 'primary' | 'secondary' | 'question' | 'small' | 'detail';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactElement | string;
  className?: string;
}

export default function Button({
  property = 'primary',
  disabled = false,
  loading = false,
  type = 'button',
  children,
  className,
  ...props
}: ButtonPropsType) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const setClassNameByProperty = (property: string) => {
    switch (property) {
      case 'primary':
        return 'bg-main-2 hover:bg-main-4 text-[1.375rem]';
      case 'secondary':
        return 'text-[1.375rem] hover:bg-gray-4 bg-gray-2';
      case 'question':
        return 'bg-gray-0 hover:bg-main-4 border-2 border-main-4 text-[1.25rem]';
      case 'small':
        return 'bg-main-2 hover:bg-main-4 text-[1.125rem]';
      case 'detail':
        return 'bg-sub-1 hover:bg-main-4 text-lg rounded-[1.25rem]';
      default:
        return '';
    }
  };

  return (
    <button
      type={type}
      onClick={() => setIsButtonClicked(true)}
      disabled={isButtonClicked}
      className={`flex w-full items-center justify-center rounded-[1.875rem] py-[1.25rem] font-normal text-gray-8 ease-in disabled:cursor-not-allowed ${className}
      ${setClassNameByProperty(property)}`}
      {...props}
    >
      {children}
    </button>
  );
}
