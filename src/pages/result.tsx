import React from 'react';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';
import ExampleType from '@public/static/example_hollang_type.svg';
import Question from '@public/static/question.svg';
import Card from '@components/common/result/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useQuery } from 'react-query';
import Model from '@components/common/result/Model';
import IconTurn from '@public/static/icon_turn.svg';

export default function Result() {
  const router = useRouter();
  const { data } = useQuery('useGetResult');

  return (
    <div className=" text-center">
      <section className="mt-6 flex flex-col items-center">
        <p className="text-2xl text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 유형
        </p>
        <div className="h-52">
          <Model uri="example.gltf" />
        </div>
        <p className="mt-4 text-2xl text-gray-7">상상을 현실로 행동형</p>
        <IconTurn className="my-2" />
        <span className=" text-gray-5 ">회전하면 돌아가요!</span>
        <p className="mt-8 w-[17.1875rem] text-[1.125rem] leading-[1.875rem] text-gray-8">
          효율적이지 않으면 못살아~ <br />
          우리는 최소한의 노력으로 최대한의 <br />
          재미를 지닌 취미를 즐길거에요
        </p>
      </section>
      <section className="mt-8">
        <p className="text-2xl text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 취미
        </p>
        <p className="mt-4 text-[1.125rem] text-gray-7">
          버튼을 눌러 자세히 둘러봐요!
        </p>
        <Swiper className="mySwiper mt-6" slidesPerView={1.4}>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="mt-12 w-full ">
        <p className="text-2xl text-main-4 ">나와 찰떡인 홀랑 유형</p>
        <p className="mt-5">아래 버튼을 눌러 알아봐요!</p>
        <div className="mt-8 flex justify-center">
          <Question />
        </div>
        <div className="mt-6">
          <div>
            <Button
              onClick={() => {
                router.push('/share');
              }}
            >
              공유하기
            </Button>
          </div>
          <div className="mt-4">
            <Button
              property="secondary"
              onClick={() => {
                router.push('/');
              }}
            >
              다시하기
            </Button>
          </div>
          <div className="h-[2.8125rem]"></div>
        </div>
      </section>
    </div>
  );
}
