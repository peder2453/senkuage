import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/public.scss'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import i18n from "./i18n";

const app = createApp(App);

app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.mount('#app')
