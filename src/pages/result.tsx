import 'swiper/css';

import Button from '@components/common/Button';
import Loader from '@components/common/Loader';
import TopBar from '@components/common/TopBar';
import Card from '@components/result/Card';
import FitHobby from '@components/result/FitHobby';
import Model from '@components/result/Model';
import Share from '@components/result/Share';
import IconTurn from '@public/static/icon_turn.svg';
import { getRecommendation } from 'api/getRecommendation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HobbyType } from 'types/result';
import HobbyDetail from '@components/result/HobbyDetail';

const FIT_HOBBY_IMAGE_SRC = `${process.env.NEXT_PUBLIC_API_CLOUD}/images/etc/question-mark.png`;

export default function Result() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const id = router?.query.id ?? 0;
  const { data } = useQuery(
    ['getRecommendation', id],
    () => getRecommendation(+id),
    {
      enabled: !!id,
    },
  );
  const recommendation = data?.data?.data?.recommendation;
  const mbti = recommendation?.hobbyType.imageUrl.slice(55, 59);

  const view = useMemo(() => {
    return router.query.view !== undefined ? router.query.view : '';
  }, [router.query]);

  return (
    <div className="text-center">
      {!isLoading && (
        <TopBar
          isBackButton
          mainMessage={view === '' ? 'result' : 'main'}
          onBackButton={() => {
            console.log(!!view);
            if (!!view) router.push({ pathname: 'result', query: { id: id } });
            else router.push('/question');
          }}
        />
      )}

      {isLoading && <Loader />}
      <div className={`${(isLoading || !!view) && 'hidden'}`}>
        <section className="mt-6 flex flex-col items-center">
          <p className="text-2xl text-main-3">
            {recommendation?.hobbyType.name}
          </p>
          <div className="h-52 w-full">
            {mbti && (
              <Model
                uri={`./static/gltf/${mbti}.gltf`}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          </div>

          <IconTurn className="my-1" />
          <span className="text-[1rem] text-gray-5">회전하면 돌아가요!</span>

          <p className="mt-8 w-full text-[1.125rem] leading-[1.875rem] text-gray-8">
            {recommendation?.hobbyType.description}
          </p>
        </section>
        <div className="top-[37.5rem] mt-8 -ml-[1.25rem] h-[0.4375rem] w-[450px] bg-gray-2" />
        <section className="mt-8">
          <p className="text-2xl text-main-4">
            <span className="text-2xl text-main-3">
              {recommendation?.user.name}
            </span>
            님의 홀랑 취미
          </p>
          <p className="mt-4 text-[1.125rem] text-gray-7">
            버튼을 눌러 자세히 둘러봐요!
          </p>
          <Swiper className="mySwiper mt-6" slidesPerView={1.4}>
            {recommendation?.hobbies.map((hobby: HobbyType) => (
              <SwiperSlide key={hobby?.id}>
                <Card id={id} hobby={hobby} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="mt-12 w-full">
          <p className="text-2xl font-bold text-main-4">
            <span className="text-2xl text-main-3 ">
              {recommendation?.user.name}님
            </span>{' '}
            찰떡 홀랑 유형
          </p>
          <p className="mt-5 text-[1.125rem] text-gray-5">
            물음표를 눌러 알아봐요!
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              alt="fit-hobby-type"
              src={FIT_HOBBY_IMAGE_SRC}
              width={100}
              height={100}
              onClick={() => {
                router.push({
                  pathname: 'result',
                  query: { id: id, view: 'fitHobby' },
                });
              }}
            />
          </div>
          <div className="mt-6">
            <div>
              <Button
                onClick={() => {
                  router.push({
                    pathname: 'result',
                    query: { id: id, view: 'share' },
                  });
                }}
                className="rounded-[1.875rem]"
              >
                공유하기
              </Button>
            </div>
            <div className="mt-4">
              <Button
                onClick={() => router.push('/')}
                className="rounded-[1.875rem]"
              >
                다시하기
              </Button>
            </div>
            <div className="h-[2.8125rem]" />
          </div>
        </section>
      </div>
      {recommendation && (
        <>
          <FitHobby
            fitHobbyTypes={recommendation.fitHobbyTypes}
            isShow={!isLoading && view === 'fitHobby'}
          />
          <Share
            hobbyType={recommendation.hobbyType}
            userName={recommendation.user.name}
            hobbies={recommendation.hobbies}
            isShow={(!isLoading && view === 'share') || false}
          />
          <HobbyDetail
            HobbyDetailTypes={recommendation.hobbies}
            isShow={(!isLoading && view === 'hobbyDetail') || false}
          />
        </>
      )}
    </div>
  );
}
