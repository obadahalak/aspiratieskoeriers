import type { App } from 'vue'
import pinia from '../stores'
import router from '../router'

export function registerPlugins(app: App) {
  app
    .use(router)
    .use(pinia)
}
