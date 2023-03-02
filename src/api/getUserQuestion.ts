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
  nickname: string,
) => {
  return baseInstance.post('/test-responses', {
    user: { name: nickname },
    testResponseDetail: userData,
  });
};
