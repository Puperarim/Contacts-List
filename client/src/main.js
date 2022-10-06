import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Vfocus from './directives/Vfocus'

const app = createApp(App)

app.directive('focus', Vfocus)

app.use(autoAnimatePlugin).mount('#app')