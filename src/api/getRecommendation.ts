import { baseInstance } from './instance';
import { AxiosResponse } from 'axios';
import { Recommendation } from 'types/result';

export const getRecommendation = (
  recommendation_id: number,
): Promise<AxiosResponse<Recommendation>> => {
  return baseInstance.get(`/recommendations/${recommendation_id}`);
};
