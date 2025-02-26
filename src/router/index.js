import {createRouter, createWebHistory} from 'vue-router' 
import Homeview from '@/views/Homeview.vue'
import Jobsview from '@/views/Jobsview.vue'
import NotFound from '@/views/NotFound.vue'
import Jobview from '@/views/Jobview.vue'
import Addjobview from '@/views/Addjobview.vue'
import Editjobview from '@/views/Editjobview.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
path : '/',
name: 'home',
component:Homeview
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobsview
        },
        {
  path : '/jobs/:id',
  name: 'job',
  component: Jobview
        },
        {
            path: '/jobs/add',
            name: 'addjob',
            component: Addjobview
        },

        {
            path: '/jobs/edit/:id',
            name: "editjob",
            component: Editjobview

        },
        {
            path : '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },


    ]
    
})
export default router