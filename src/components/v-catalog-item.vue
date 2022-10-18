<template>
  <div class="v-catalog-item">
    <img src="" alt="">
    <p>{{ name }}</p>
    <p>Description</p>
    <p>{{ description }}</p>
    <p>Price: {{ price }}</p>
    <button>Add to cart</button>
  </div>

</template>

<script>
export default {
  name: "v-catalog-item",
}
</script>

<style lang="scss">
@import './src/assets/styles/variables.scss';

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: 100px;
  }
}
</style>