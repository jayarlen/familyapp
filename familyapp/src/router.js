import {createRouter,createWebHashHistory} from 'vue-router'
import weatherPlugin from "@/page/weatherPlugin";
import stockPlugin from "@/page/stockPlugin";
import bookList from "@/page/bookList";
import musicPlugin from "@/page/musicPlugin";
import menuBar from "@/page/menuBar";
import signIn from "@/page/signIn";
import videoPage from "@/page/videoPage";
import echartTu from "@/page/echartTu"

const routes=[{
    path:'/',
    name:'signIn',
    component:signIn
},{
    path:'/menuBar',
    name:'menuBar',
    component:menuBar,
    children:[

    ]
},
    {
       path:'/weatherPlugin',
       name:'weatherPlugin',
       component:weatherPlugin ,

    },
    {
        path:'/stockPlugin',
        name:'stockPlugin',
        component: stockPlugin,

    },
    {
        path:'/bookList',
        name:'bookList',
        component:bookList ,

    },
    {
        path:'/echartTu',
        name:'echartTu',
        component:echartTu ,

    },
    {
        path:'/videoPage',
        name:'videoPage',
        component:videoPage ,

    },

    {
        path: '/musicPlugin',
        name: 'musicPlugin',
        component: musicPlugin
    }

]



 const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})
export default router

