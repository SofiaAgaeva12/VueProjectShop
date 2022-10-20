<template>
  <div class='v-catalog'>
    <h1>Catalog of goods</h1>
    <div v-for="product in this.currentProducts" :key="product.id">
      <div class="v-catalog-item">
        <img src="" alt="">
        <p class="v-catalog-item__name">{{ product.name }}</p>
        <p>Description</p>
        <p class="v-catalog-item__desc">{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button class="product-button">Add to cart</button>
      </div>
    </div>
    <pagination v-if="products.length>0" :totalPages="totalPages" :perPage="perPage" :currentPage="currentPage"
                @pagechanged="onPageChange"/>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
import axios from "axios";
import Pagination from './v-pagination'

export default {
  name: "v-catalog",
  data() {
    return {
      products: [],
      currentProducts: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 1
    };

  },
  components: {
    Pagination
  },
  computed: {
    // ...mapGetters([
    //   'PPODUCTS',
    // ]),
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      const indexPage = page * this.perPage - 1;
      this.currentPage = page;
      this.currentProducts = this.products.slice(indexPage, indexPage + 10);

    }
  },
  mounted() {
    axios.get('https://jurapro.bhuser.ru/api-shop/products').then(response => {
          this.products = response.data.data;
          this.totalPages = this.products.length;
          if (this.totalPages > 10) {this.totalPages = 10}
        }
    )
  }
}

</script>

<style>
.v-catalog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.v-catalog-item__name {
  font-size: 20px;
  padding-left: 25%;
  padding-right: 25%;
}

.v-catalog-item__desc {
  padding-left: 25%;
  padding-right: 25%;
}

.product-button {
  padding: 10px 18px;
  background: #56bd4b;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  border: none;
  border-radius: 3px;
  color: white;
}


a {
  cursor: pointer;
}

</style>


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