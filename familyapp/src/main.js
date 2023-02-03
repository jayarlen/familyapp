import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import  '@/assets/loginicon/iconfont.css'
import skycons from 'vue-skycons';

import App from './App.vue'
import router from './router.js'
import store from './store.js'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import axios from "axios";
import socket from './socketio.js'
//import echarts from "echarts";
const app = createApp(App)

app.config.globalProperties.$http=axios
app.config.globalProperties.$socket=socket;
//app.config.globalProperties.$echarts=echarts;
app.use(ViewUIPlus)
    /*.use(new  VueSocketIO({
        debug:true,
        connection:SocketIo('ws://127.0.0.1:3001')
    }))*/
    .use(store)
    .use(router)

    .use(skycons)
    .mount('#app')
