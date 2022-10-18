<template>
  <div class='v-catalog'>
    <h1>Catalog</h1>

    <VcatalogItem
        v-for="product in this.products"
        :key="product.id"
        :product_data="product"
    />

  </div>
</template>

<script>
import VcatalogItem from "./v-catalog-item"
// import {mapActions, mapGetters} from 'vuex'
import axios from "axios";

export default {
  name: "v-catalog",
  data() {
    return {products:undefined}
  },
  components: {
    VcatalogItem
  },
  computed: {
    // ...mapGetters([
    //   'PPODUCTS',
    // ]),
  },
  methods: {
    // ...mapActions([
    //   'GET_PRODUCTS_FROM_API',
    // ]),
  },
  mounted () {
    axios
        .get('https://jurapro.bhuser.ru/api-shop/products')
        .then(response => {
          this.products = response.data.data
            console.log(response.data.data)}
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
</style>