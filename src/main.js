import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'

router.replace('/'); //pour commencer avec page par défaut: HomePage

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
