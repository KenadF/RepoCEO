import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import Aos from 'aos'
import 'aos/dist/aos.css' //

const app = createApp(App)
Aos.init({
  duration: 1000,
  once: true,
  mirror: false,
  easing: 'ease-in-out',
})
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(router)
app.use(vuetify)

app.mount('#app')
