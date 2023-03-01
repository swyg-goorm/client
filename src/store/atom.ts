import { atom } from 'recoil';

export const DetailPageInputMode = atom<{}>({
  key: 'DetailPageInputMode',
  default: {},
});

export const UserRecommendation = atom<number>({
  key: 'UserRecommendation',
  default: 1,
});
