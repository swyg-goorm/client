import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '@components/common/Button';
import ExampleType from '@public/static/example_hollang_type.svg';
import Card from '@components/common/result/Card';

// import Model from '@components/common/result/Model';
// import { Canvas } from 'react-three-fiber';
// import { OrbitControls } from 'drei';
// import Lights from '@components/common/result/Lights';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Result() {
  const router = useRouter();

  return (
    <div className=" text-center">
      <section className="mt-[1.5rem] flex flex-col items-center">
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
        <Swiper className="mySwiper mt-[1.5rem]" slidesPerView={1.5}>
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
        {/* <Canvas colorManagement camera={{ position: [0, 0, 2] }}> */}
        {/* <Lights /> */}
        {/* <Model /> */}
        {/* <OrbitControls ref={controlsRef} /> */}
        {/* </Canvas> */}
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
