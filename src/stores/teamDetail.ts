import { defineStore } from 'pinia'
import { ref } from 'vue'
import Http from '../base/Http'
import { useGlobalStore } from './global'

export const useTeamDetail = defineStore('teamDetail', () => {
  const data = ref<any>([])
  const errors = ref<any>([])
  const globalStore = useGlobalStore()
  async function teams() {
    try {
      data.value = await Http.get(`${globalStore.endPoints.teamDetails}/${globalStore.currentLanguage}`)
    }
    catch (error) {
      errors.value = error
    }
  }

  function findText(key: any) {
    return (data.value.find((e: any) => e.id === key))?.lang
  }

  return { data, teams, findText }
})
