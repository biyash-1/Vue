import {createRouter, createWebHistory} from 'vue-router' 

import Homeview from '@/views/Homeview.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
path : '/',
name: 'home',
component:Homeview
        }
    ]
})
export default router