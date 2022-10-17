<template>
<div class="main-wrapper">
  <vCatalog></vCatalog>
  <vCart></vCart>
  <Login></Login>
</div>
</template>

<script>

import vCatalog from "./v-catalog"
import vCart from "./v-cart"
import Login from "@/pages/Login";

export default {
  name: 'main-wrapper',
  components: {
    vCatalog,
    vCart,
    Login
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>

<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

</style>