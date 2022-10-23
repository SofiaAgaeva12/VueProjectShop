<template>
  <div class='catalog'>
    <h1>Корзина товаров</h1>
    <div v-for="product in currentProducts" :key="product.id">
      <div class="v-catalog-item">
        <img src="" alt="">
        <p class="v-catalog-item__name text_al_c">{{ product.name }}</p>
        <p class="v-catalog-item__desc text_al_c"><i>{{ product.description }}</i></p>
        <p><span class="price__data">{{ product.price }}&#8381;</span></p>
      </div>
    </div>
    <pagination v-if="products.length>0" :totalPages="totalPages" :perPage="perPage" :currentPage="currentPage"
                @pagechanged="onPageChange"/>
  </div>

  <div :class="isDataLoad? 'd-none': ''">
    <div class="middle">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Pagination from './Pagination'

import axios from "axios";
export default {
  name: "cartPage",
  data() {
    return {
      products: [],
      currentPage: 1,
      currentProducts: [],
      perPage: 10,
      totalPages: 1,
      isDataLoad: false
    };
  },

  components: {
    Pagination
  },
  computed: {
    authed() {
      return localStorage.getItem('token');
    }

  },
  methods: {
    onPageChange(page) {
      const indexPage = page * this.perPage - 1;
      this.currentPage = page;
      this.currentProducts = this.products.slice(indexPage, indexPage + 10);

    },
  },
  mounted() {
    axios.get('https://jurapro.bhuser.ru/api-shop/cart', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      console.log(response)
      this.products = response.data.data
      this.totalPages = this.products.length;
      if (this.totalPages > 10) {this.totalPages = 10}
      if (this.products) {this.isDataLoad = true}
        }
    )
  },
}

</script>

<style>

</style>