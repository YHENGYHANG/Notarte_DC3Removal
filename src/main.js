import { createApp } from 'vue'
import './style.css'
// import StudentDisplay from './components/StudentDisplay.vue'
// createApp(app).mount('#app')

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router)
app.mount('#app')