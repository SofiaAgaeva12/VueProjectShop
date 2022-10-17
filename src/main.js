import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import store from './vuex/store'
import Vue from 'vue'
const app = createApp(App)
app.use(store)
app.mount('#app')


new Vue({
    el: '#app',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('https://jurapro.bhuser.ru/api-shop/products.json')
            .then(response => (this.info = response))
    }
})



