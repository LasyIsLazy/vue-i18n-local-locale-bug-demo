import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const messages = {
    ja: {},
    en: {}
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


createApp(App).use(i18n).mount('#app')
