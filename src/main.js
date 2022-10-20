import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueRouter from 'vue-router'

const app = createApp(App);
app.use(store);
app.use(VueRouter);
app.mount('#app');