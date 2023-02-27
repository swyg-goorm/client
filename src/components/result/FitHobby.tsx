import React from 'react';
import { useRouter } from 'next/router';
import { FitHobby } from 'types/result';

interface FitHobbyProps {
  fitHobby: FitHobby[];
  [key: string]: any;
}
export default function FitHobby({ fitHobby }: FitHobbyProps) {
  const router = useRouter();
  return <div></div>;
}
