import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
import { useGlobalStore } from '../stores/global'

const requestCount = ref(0)
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,

  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  requestCount.value++
  if (requestCount.value === 1) {
    const globalStore = useGlobalStore()
    globalStore.setLoading(true)
  }

  return config
})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  requestCount.value--
  if (requestCount.value === 0) {
    const globalStore = useGlobalStore()
    globalStore.setLoading(false)
  }

  return response.data
}, (error: AxiosError) => {
  if (requestCount.value === 0) {
    const globalStore = useGlobalStore()
    globalStore.setLoading(false)
  }

  if (!error.response) {
    void router.push('/badConnection')

    return Promise.reject(error.response)
  }

  if ([500, 403].includes(error.response.status))
    void router.push(`/${error.response.status}`)

  return Promise.reject(error.response)
})

export default axiosInstance
