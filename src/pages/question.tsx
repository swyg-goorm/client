import Button from '@components/common/Button';
import ProgressBar from '@components/common/ProgressBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getUserQuestion, getUserResult } from './api/getUserQuestion';

export default function question() {
  const { data, isSuccess } = useQuery(['getUserQuestion'], getUserQuestion, {
    retry: false,
    staleTime: 30000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [questionArray, setQuestionArray] = useState<
    { questionNumber: number; answerNumber: number }[]
  >([]);
  const router = useRouter();
  const MAX_PAGE = 12;
  const [innerHeight, setInnerHeight] = useState<number>(0);

  useEffect(() => {
    setInnerHeight((window.innerHeight / 84.4) * 100);
  }, []);

  const currentPageData = data?.data.data.test.questions[currentPage - 1];
  const handleClickQuestion = (clickedIndex: number) => {
    if (currentPage === MAX_PAGE) {
      const getData = async () => {
        console.log(questionArray);
        const data = await getUserResult([
          ...questionArray,
          { questionNumber: currentPage, answerNumber: clickedIndex + 1 },
        ]);

        router.push(`/result/${data.data.data.recommendation.id}`);
        console.log(data.data.data.recommendation);
      };
      getData();
    }
    setQuestionArray([
      ...questionArray,
      { questionNumber: currentPage, answerNumber: clickedIndex + 1 },
    ]);
    setCurrentPage(currentPage + 1);
  };
  return (
    isSuccess && (
      <div className="pb-[4.8rem]">
        <section className="mb-[2.8rem] flex flex-col items-center px-[2.4rem]">
          <ProgressBar order={currentPage}></ProgressBar>
          <p className="mt-[0.8rem] text-[2.4rem]">{`Q.  0${currentPage}`}</p>
        </section>
        {currentPageData !== undefined && (
          <section className="flex flex-col items-center ">
            <Image
              className="mb-[3.2rem] rounded-[2rem]"
              alt="image that explain Question"
              width={450}
              height={450}
              src={currentPageData.imageUrl}
            ></Image>
            <p className="mb-[3.2rem] px-[6.4rem] text-center text-[1.8rem] font-normal leading-[2.8rem]">
              {currentPageData.content}
            </p>
            <div className="mb-[5.2rem] flex w-full flex-col gap-[0.8rem]">
              {currentPageData.answers.map(({ content, id }, index) => (
                <Button
                  key={id}
                  onClick={() => handleClickQuestion(index)}
                  type="button"
                  property="question"
                >
                  {content}
                </Button>
              ))}
            </div>
          </section>
        )}
      </div>
    )
  );
}
