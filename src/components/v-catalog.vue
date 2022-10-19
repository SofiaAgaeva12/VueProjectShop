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
    return {
      products:undefined,
      currentPage: 1,
    };

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
  breakProducts() {
    let products = this.products
    let size = 10;
    let subarray = [];
    let subarray2 = [];
    let subarray3 = [];
    let subarray4 = [];
    let subarray5 = [];
    let subarray6 = [];
    let subarray7 = [];
    let subarray8 = [];
    let subarray9 = [];
    let subarray10 = [];
    while (products.size) {
      subarray.push(products.splice(0, size))
      for (let elements = size; elements <= size*2; elements++) {subarray2.push(products.splice(0, size))}
      for (let elements = size*2; elements <= size*3; elements++) {subarray3.push(products.splice(0, size))}
      for (let elements = size*3; elements <= size*4; elements++) {subarray4.push(products.splice(0, size))}
      for (let elements = size*4; elements <= size*5; elements++) {subarray5.push(products.splice(0, size))}
      for (let elements = size*5; elements <= size*6; elements++) {subarray6.push(products.splice(0, size))}
      for (let elements = size*6; elements <= size*7; elements++) {subarray7.push(products.splice(0, size))}
      for (let elements = size*7; elements <= size*8; elements++) {subarray8.push(products.splice(0, size))}
      for (let elements = size*8; elements <= size*9; elements++) {subarray9.push(products.splice(0, size))}
      for (let elements = size*9; elements <= size*10; elements++) {subarray10.push(products.splice(0, size))}
        }



  }
  },
  mounted() {
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


a { cursor: pointer; }
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
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