import { defineStore } from 'pinia'
import { ref } from 'vue'
import Http from '../base/Http'
import { useGlobalStore } from './global'

export const useFaqStore = defineStore('faq', () => {
  const globalStore = useGlobalStore()
  const data = ref<any>([])
  const errors = ref<any>([])

  async function Faqs() {
    try {
      data.value = await Http.get(`${globalStore.endPoints.faq}/${globalStore.currentLanguage}`)
    }
    catch (error) {
      errors.value = error
    }
  }

  function findText(key: any) {
    return (data.value.find((e: any) => e.id === key))?.lang
  }

  return { data, Faqs, findText }
})
