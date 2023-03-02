import { GetUserCountType } from './../types/getUserCount';
import { AxiosResponse } from 'axios';
import { baseInstance } from './instance';

export const getUserCount = (): Promise<AxiosResponse<GetUserCountType>> => {
  return baseInstance.get('/test-responses/count');
};
