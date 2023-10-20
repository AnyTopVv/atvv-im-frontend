import { message } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface PendingTask {
  config: AxiosRequestConfig
  resolve: Function
  uUrl: string
}
let refreshing = false;
const queue: PendingTask[] = [];

// 创建自定义axios实例
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8520/',
  timeout: 3000
});

// 拼接请求的url和方法，同样的url+方法可以视为相同的请求
const getUUrl = (config: any) => {
  return `${config.url}_${config.method}`
}

// 设置响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // const { data } = response || { data: {} };
    // return Promise.resolve(data);
    // 请求成功后清除队列中对应的请求
    for (let i = 0; i < queue.length; i++) {
      if (getUUrl(response.config) === queue[i].uUrl) {
        queue.splice(i, 1);
      }
    }
    return Promise.resolve(response);
  },
  (error: any) => {
    let { data, config } = error.response;

    if (refreshing) {
      return new Promise((resolve) => {
        const uUrl = getUUrl(config)
        queue.push({
          config,
          resolve,
          uUrl,
        });
      });
    }

    if (data.statusCode === 401 && !config.url.includes('/user/refresh')) {
      refreshing = true;

      refreshToken().then((res: AxiosResponse) => {
        refreshing = false;

        if (res.status === 200) {

          queue.forEach(({ config, resolve }) => {
            resolve(axiosInstance(config))
          })

          return axiosInstance(config);
        } else {
          message.error(data || '登录过期，请重新登录');
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          return error.response;
        }
      });

    } else {
      return Promise.resolve(error.response);
    }
  }
)

// 设置请求拦截器
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    config.headers.authorization = 'Bearer ' + accessToken;
  }
  return config;
}, (error) => Promise.reject(error))

// 刷新Token的方法
const refreshToken = () => {
  return axiosInstance.get('/user/refresh', {
    params: {
      token: localStorage.getItem('refresh_token')
    }
  }).then((res: AxiosResponse) => {
    localStorage.setItem('access_token', res.data.data.accessToken);
    localStorage.setItem('refresh_token', res.data.data.refreshToken);
    return res;
  });
}

export { axiosInstance }