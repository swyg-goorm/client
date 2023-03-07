import { HobbyDataType } from '../types/hobby';
import { baseInstance } from './instance';
import { AxiosResponse } from 'axios';

export const getAllHobbies = (): Promise<AxiosResponse<HobbyDataType>> => {
  return baseInstance.get('/hobbies?page=0&size=20&sort=recommendCount');
};
