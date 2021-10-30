import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootswatch/dist/darkly/bootstrap.css'

createApp(App).use(router).mount('#app')
