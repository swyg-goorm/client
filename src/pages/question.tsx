import Button from '@components/common/Button';
import ProgressBar from '@components/common/ProgressBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import {
  GetUserQuestionType,
  QuestionContentType,
} from 'types/getUserQuestion';
import { getUserQuestion, getUserResult } from './api/getUserQuestion';

interface QuestionDataType {
  answers: QuestionContentType[];
  content: string;
  id: number;
  imageUrl: string;
}

export default function question() {
  const { data, isSuccess } = useQuery(['getUserQuestion'], getUserQuestion, {
    staleTime: Infinity,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [questionArray, setQuestionArray] = useState<
    { questionNumber: number; answerNumber: number }[]
  >([]);
  const [questionData, setQuestionData] = useState<GetUserQuestionType | null>(
    null,
  );
  const router = useRouter();
  const MAX_PAGE = 12;

  useEffect(() => {
    if (data !== undefined) {
      setQuestionData(data?.data);
    }
  }, [data, isSuccess]);

  const handleClickQuestion = (clickedIndex: number) => {
    if (currentPage === MAX_PAGE) {
      const getData = async () => {
        const data = await getUserResult([
          ...questionArray,
          { questionNumber: currentPage, answerNumber: clickedIndex + 1 },
        ]);

        router.push(`/result/${data.data.data.recommendation.id}`);
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
      <div className="pb-12">
        <section className="mb-7 flex flex-col items-center px-2">
          <ProgressBar order={currentPage}></ProgressBar>
          <p className="mt-2">{`Q.  0${currentPage}`}</p>
        </section>
        {questionData?.data.test.questions[currentPage - 1] !== undefined && (
          <section className="flex flex-col items-center ">
            <Image
              className="mb-8 rounded-[1.25rem]"
              alt="image that explain Question"
              width={450}
              height={450}
              src={questionData?.data.test.questions[currentPage - 1].imageUrl}
            ></Image>
            <p className="mb-8 px-16 text-center text-lg font-normal leading-7">
              {questionData?.data.test.questions[currentPage - 1].content}
            </p>
            <div className="mb-13 flex w-full flex-col gap-2">
              {questionData?.data.test.questions[currentPage - 1].answers.map(
                ({ content, id }, index) => (
                  <Button
                    key={id}
                    onClick={() => handleClickQuestion(index)}
                    type="button"
                    property="question"
                  >
                    {content}
                  </Button>
                ),
              )}
            </div>
          </section>
        )}
      </div>
    )
  );
}
