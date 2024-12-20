import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://testnet-api.btcsol/',
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
  }

  return config
})

// reset local storage on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)
