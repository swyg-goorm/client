import { baseInstance } from './instance';
import { AxiosResponse } from 'axios';
import { GetUserQuestionType } from 'types/getUserQuestion';

export const getUserQuestion = (): Promise<
  AxiosResponse<GetUserQuestionType>
> => {
  return baseInstance.get('/tests?version=1');
};

export const getUserResult = (
  userData: { questionNumber: number; answerNumber: number }[],
) => {
  return baseInstance.post('/test-responses', {
    user: { name: '모승' },
    testResponseDetail: userData,
  });
};
