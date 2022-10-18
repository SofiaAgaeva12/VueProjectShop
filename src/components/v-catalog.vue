<template>
  <div class='v-catalog'>
    <h1>Catalog of goods</h1>

    <div
        v-for="product in this.products"
        :key="product.id"
    >
      <div class="v-catalog-item">
        <img src="" alt="">
        <p class="v-catalog-item__name">{{ product.name }}</p>
        <p>Description</p>
        <p class="v-catalog-item__desc">{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button class="product-button">Add to cart</button>
      </div>
      </div>

  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
import axios from "axios";

export default {
  name: "v-catalog",
  data() {
    return {products:undefined}
  },
  components: {

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
  border:  none;
  border-radius: 3px;
  color: white;
}
</style>


<style lang="scss">
@import './src/assets/styles/variables.scss';
.v-catalog-item {
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