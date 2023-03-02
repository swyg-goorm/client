import { baseInstance } from './instance';
import axios from 'axios';

export const getThree = () => {
  return axios.get(
    // 'https://dnynkguj26y10.cloudfront.net/images/hobby_type/ESFP_3D/ESFP_resources/MBTI___-1.stl_9_occlusion',
    'https://dnynkguj26y10.cloudfront.net/images/hobby_type/ESFP_3D/ESFP.gltf',
  );
};
