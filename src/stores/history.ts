import { defineStore } from 'pinia'
import { ref } from 'vue'
import Http from '../base/Http'
import { useGlobalStore } from './global'

export const useHistory = defineStore('history', () => {
  const globalStore = useGlobalStore()
  const data = ref<any>([])
  const errors = ref<any>([])

  async function histories() {
    try {
      data.value = await Http.get(`${globalStore.endPoints.history}/${globalStore.currentLanguage}`)
    }
    catch (error) {
      errors.value = error
    }
  }

  function findText(key: any) {
    return (data.value.find((e: any) => e.id === key))?.lang
  }

  return { data, histories, findText }
})
