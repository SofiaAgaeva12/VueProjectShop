import { createApp } from 'vue'
import App from './App.vue'
// import axios from "axios";
import store from './vuex/store'
import Vue from 'vue'
// import Paginate from "vuejs-paginate-next"

const app = createApp(App)

// app.component('Paginate', Paginate)

app.use(store)

app.mount('#app')


new Vue({
    el: '#app',
    data () {
        return {
            info: null
        }
    },

})



