import { axiosInstance } from '@/utils/requestUtils/axiosInstance'
import { UserLoginParams, UserRegisterParams } from './type';

export const userLogin = (data: UserLoginParams) => {
  return axiosInstance({
    method: 'post',
    url: '/user/login',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }).then(res => {
    if (res && res.status === 200) {
      return res;
    } else {
      console.log(res);
    }
  }).catch(err => {
    console.log(err)
  });
};

export const userRegister = (data: UserRegisterParams) => {
  return axiosInstance({
    method: 'post',
    url: '/user/register',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }).then(res => {
    if (res && res.status === 200) {
      return res;
    } else {
      console.log(res);
    }
  }).catch(err => {
    console.log(err)
  });
};