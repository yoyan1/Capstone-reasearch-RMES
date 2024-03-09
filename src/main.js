import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import dashRouter from './router/dash.js'
const app = createApp(App)

app.use(createPinia())
app.use(router, dashRouter)

app.mount('#app')
