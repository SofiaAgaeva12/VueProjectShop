<template>
  <head>
    <title>Catalog</title>
  </head>
  <div class='catalog'>
    <h1>Каталог товаров</h1>
    <div v-for="product in this.currentProducts" :key="product.id">

      <span class="success" v-if="isToCart === product.id">{{message}}</span>


      <div class="v-catalog-item">
        <img src="" alt="">
        <p class="v-catalog-item__name text_al_c">{{ product.name }}</p>
        <p class="v-catalog-item__desc text_al_c"><i>{{ product.description }}</i></p>
        <p><span class="price__data">{{ product.price }}&#8381;</span></p>
        <button class="product-button" v-if="authed" @click="addToCart(product.id)">Add to cart</button>
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
import axios from "axios";
import Pagination from './Pagination'

export default {
  name: "catalogPage",
  data() {
    return {
      products: [],
      currentProducts: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 1,
      isDataLoad: false,
      message: '',
      isToCart: 0
    };

  },

  components: {
    Pagination
  },
  computed: {
    authed() {
      return localStorage.getItem('token');
    },

  },
  methods: {
    onPageChange(page) {
      const indexPage = page * this.perPage - 1;
      this.currentPage = page;
      this.currentProducts = this.products.slice(indexPage, indexPage + 10);

    },
    addToCart(product_id) {
      axios.post('https://jurapro.bhuser.ru/api-shop/cart/' + product_id, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
         this.isToCart = product_id;
         setTimeout((()=> this.isToCart = 0), 1000)
        console.log(response)
        this.message = response.data.data.message
      }
      )
    }
  },
  mounted() {
    axios.get('https://jurapro.bhuser.ru/api-shop/products').then(response => {
          this.products = response.data.data;
          this.totalPages = this.products.length;
          if (this.totalPages > 10) {this.totalPages = 10}
          if (this.products) {this.isDataLoad = true}
        }
    )
  },
}



</script>




<style lang="scss">
@import './src/assets/styles/variables.scss';

.v-catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-basis: 25%;
  width: 600px;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;

  &__image {
    width: 100px;
  }
}
</style>