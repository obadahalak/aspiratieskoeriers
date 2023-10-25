import { defineStore } from 'pinia'
import { ref } from 'vue'
import Http from '../base/Http'
import { useGlobalStore } from './global'

export const useAboutUs = defineStore('about', () => {
  const globalStore = useGlobalStore()
  const data = ref<any>([])
  const errors = ref<any>([])

  async function getAboutUs() {
    try {
      data.value = await Http.get(`${globalStore.endPoints.about}/${globalStore.currentLanguage}`)
    }
    catch (error) {
      errors.value = error
    }
  }

  function findText(key: any) {
    return (data.value.find((e: any) => e.id === key))?.lang
  }

  return { data, getAboutUs, findText }
})
