import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import 'swiper/css'
import './assets/css/style.css'
import './assets/css/skin/skin-1.css'

// Components
import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
