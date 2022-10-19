import { createApp } from 'vue'
import App from './App.vue'
// import axios from "axios";
import store from './vuex/store'
import Vue from 'vue'
// import Paginate from "vuejs-paginate-next"
// import JwPagination from 'jw-vue-pagination';
import "vue-awesome-paginate/dist/style.css";
const app = createApp(App)

// app.component('Paginate', Paginate)

app.use(store)
// app.component('jw-pagination', JwPagination);
app.mount('#app')


new Vue({
    el: '#app',
    data () {
        return {
            info: null
        }
    },

})



