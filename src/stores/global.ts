import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const endPoints = {
    home: '/619/774',
    teamDetails: '/775/809',
    history: '/809/843',
    about: '/844/853',
    faq: '/859/880',
  }
  const currentLanguage = localStorage.getItem('lang') ?? 'ara'
  const loading = ref<boolean>(false)

  function setLoading(status: boolean) {
    loading.value = status
  }

  return { loading, setLoading, endPoints, currentLanguage }
})
