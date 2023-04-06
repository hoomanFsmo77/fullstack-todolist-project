import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";

const routes:RouteRecordRaw[]=[
    {
        component:import('./pages/todo/Show.vue'),
        name:'SHOW',
        path:'/todo/show'
    },{
        component:import('./pages/todo/Add.vue'),
        name:'ADD',
        path:'/todo/add'
    }
]


const router=createRouter({
    routes,
    history:createWebHashHistory()
})


export default router