import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';
import ExampleType from '@public/static/example_hollang_type.svg';
import Card from '@components/common/result/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Model from '@components/common/result/Model';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import Lights from '@components/common/result/Lights';

export default function Result() {
  const router = useRouter();
  const controlsRef = useRef();
  return (
    <div className="flex flex-col items-center text-center">
      <section className="mt-[1.5rem]">
        <p className="text-[1.5rem] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 유형
        </p>
        <ExampleType className="mt-[1rem]" />
        <p className="mt-[1rem] text-[1.5rem] text-gray-7">
          상상을 현실로 행동형
        </p>
        <p className="mt-[2rem] w-[17.1875rem] text-[1.125rem] leading-[1.875rem] text-gray-8">
          감정이 풍부하고 배려심이 많은 사막에서 물을 파는 발굴형은 혼자서도 즐
        </p>
      </section>
      <section className="mt-[2rem]">
        <p className="text-[1.5rem] text-main-4">
          <span className="text-main-3">꼬꼬꼬</span>님의 홀랑 취미
        </p>
        <p className="mt-[1rem] text-[18px] text-gray-7">
          버튼을 눌러 자세히 둘러봐요!
        </p>
        <article className="mt-[1.5rem]">
          <Card />
        </article>
        {/* <Swiper className="mySwiper" observer={true} observeParents={true}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
        {/* <Canvas colorManagement camera={{ position: [0, 0, 2] }}> */}
        {/* <Lights /> */}
        {/* <Model /> */}
        {/* <OrbitControls ref={controlsRef} /> */}
        {/* </Canvas> */}
        <p className="mt-[2rem]">스와이퍼</p>
      </section>
      <section className="mt-[48px] w-full ">
        <p className="text-[1.5rem] text-main-4">나와 찰떡인 홀랑 유형</p>
        <p className="mt-[20px]">아래 버튼을 눌러 알아봐요!</p>
        <p className="mt-[20px]">이미지</p>
        <div className="mt-[1.5rem]">
          <div>
            <Button
              onClick={() => {
                router.push('/share');
              }}
            >
              공유하기
            </Button>
          </div>
          <div className="mt-[1rem]">
            <Button
              property="secondary"
              onClick={() => {
                router.push('/');
              }}
            >
              다시하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
