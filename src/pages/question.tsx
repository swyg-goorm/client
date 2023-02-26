import Button from '@components/common/Button';
import ProgressBar from '@components/common/ProgressBar';
import Image from 'next/image';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getUserQuestion } from './api/getUserQuestion';

export default function question() {
  const { data, isSuccess } = useQuery(['getUserQuestion'], getUserQuestion, {
    retry: false,
    staleTime: 30000,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageData = data?.data.data.test.questions[currentPage - 1];
  return (
    isSuccess && (
      <div>
        <section className="mb-7 flex flex-col items-center px-2">
          <ProgressBar order={currentPage}></ProgressBar>
          <p className="mt-2">{`Q.  0${currentPage}`}</p>
        </section>
        {currentPageData !== undefined && (
          <section className="flex flex-col items-center ">
            <Image
              className="mb-8 rounded-[1.25rem]"
              alt="image that explain Question"
              width={450}
              height={450}
              src={currentPageData.imageUrl}
            ></Image>
            <p className="mb-8 px-16 text-center text-xl font-normal leading-7">
              {currentPageData.content}
            </p>
            <div className="mb-13 flex w-full flex-col gap-2">
              {currentPageData.answers.map(({ content, id }) => (
                <Button
                  key={id}
                  onClick={() => setCurrentPage(currentPage + 1)}
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
