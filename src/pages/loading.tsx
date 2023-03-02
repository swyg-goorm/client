import Loader from '@components/common/Loader';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { UserRecommendation } from 'store/atom';

export default function loading() {
  const router = useRouter();
  const userRecommendationValue = useRecoilValue(UserRecommendation);

  useEffect(() => {
    setTimeout(
      () => router.push(`/result?id=${userRecommendationValue}`),
      2000,
    );
  }, []);
  return <Loader />;
}
