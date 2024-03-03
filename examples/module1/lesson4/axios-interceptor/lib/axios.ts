import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  metadata?: { startTime: Date };
}

interface CustomAxiosResponse extends AxiosResponse {
  duration?: number;
  config: AxiosResponse['config'] & CustomAxiosRequestConfig;
}

axios.interceptors.request.use(function (config: CustomAxiosRequestConfig) {
  config.metadata = { ...config.metadata, startTime: new Date() };
  return config;
});

axios.interceptors.response.use(function (response: CustomAxiosResponse) {
  if (response.config.metadata?.startTime) {
    const endTime = new Date();
    response.duration = +endTime - +response.config.metadata.startTime;
    console.log(`Response duration: ${response.duration}ms`);
  }
  return response;
});

export const customAxios = axios;
