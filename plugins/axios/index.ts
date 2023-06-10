import { notification } from 'antd'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

const onResponseError = (error: any): Promise<AxiosError> => {
  const errorMessage = error?.response?.data?.message
  if (errorMessage) {
    notification.error({
      message: 'Error!',
      description: error?.response?.data?.message
    })
  }
  return Promise.reject(error)
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_API as string
})

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    return config
  },
  async error => onRequestError(error)
)

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  async error => onResponseError(error)
)

export default axiosInstance
