<template>
  <div class='v-catalog'>
    <h1>Catalog</h1>

    <VcatalogItem/>
  </div>
</template>

<script>
import VcatalogItem from "./v-catalog-item"

export default {
  name: "v-catalog",
  components: {
    VcatalogItem
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