import './assets/main.css'
import 'primeicons/primeicons.css'
import router from './router/index'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(Vue3Toastify, {
    autoClose: 3000, // Global default auto-close duration in milliseconds
    position: 'top-right', // Default position for toasts
    // Add other global options here
  });
  
app.use(router)
app.mount('#app')
