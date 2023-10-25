import { defineStore } from 'pinia'
import { ref } from 'vue'
import Http from '../base/Http'
import { useGlobalStore } from './global'

export const useHomeStore = defineStore('Home', () => {
  const globalStore = useGlobalStore()
  const data = ref<any>([])
  const errors = ref([])

  async function home() {
    await Http.get(`${globalStore.endPoints.home}/${globalStore.currentLanguage}`).then((response: any) => {
      return data.value = response
    }).catch((error) => {
      errors.value = error
    })
  }

  function findText(key: any) {
    return (data.value.find((e: any) => e.id === key))?.lang
  }

  return { data, home, findText }
})
