import { AxiosResponse } from 'axios';
import { baseInstance } from './instance';

export const getUserCount = (): Promise<AxiosResponse<number>> => {
  return baseInstance.get('/test-responses/count');
};
