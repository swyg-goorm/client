import { baseInstance } from './instance';
import { AxiosResponse } from 'axios';
import { GetUserQuestionType } from 'types/getUserQuestion';

export const getUserQuestion = (): Promise<
  AxiosResponse<GetUserQuestionType>
> => {
  return baseInstance.get('/tests?version=1');
};
