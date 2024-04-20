import './assets/main.css'
import GoogleSignInPlugin from "vue3-google-signin"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import globalComp from './components/global'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(globalComp)
app.use(router)
app.use(GoogleSignInPlugin, {
    clientId: '180148062485-bm9fbp3s7c13adfhe3fs5ugbjatr6e0k.apps.googleusercontent.com',
  });
  

app.mount('#app')
