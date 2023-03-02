import { AxiosResponse } from 'axios';
import { baseInstance } from './instance';

const userQuestionsMockData = {
  user: {
    name: '하이',
  },
  testResponseDetail: [
    {
      questionNumber: 1,
      answerNumber: 2,
    },
    {
      questionNumber: 2,
      answerNumber: 1,
    },
    {
      questionNumber: 3,
      answerNumber: 1,
    },
    {
      questionNumber: 4,
      answerNumber: 2,
    },
    {
      questionNumber: 5,
      answerNumber: 1,
    },
    {
      questionNumber: 6,
      answerNumber: 1,
    },
    {
      questionNumber: 7,
      answerNumber: 2,
    },
    {
      questionNumber: 8,
      answerNumber: 1,
    },
    {
      questionNumber: 9,
      answerNumber: 1,
    },
    {
      questionNumber: 10,
      answerNumber: 2,
    },
    {
      questionNumber: 11,
      answerNumber: 1,
    },
    {
      questionNumber: 12,
      answerNumber: 1,
    },
  ],
};

export const getUserCount = (): Promise<AxiosResponse<number>> => {
  return baseInstance.get('/test-responses/count');
};
