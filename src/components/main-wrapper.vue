<template>
  <Header/>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>

</template>

<script>
import Header from "@/components/layouts/Header";

export default {
  name: 'main-wrapper',
  components: {
    Header,
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

h1 {
  font-size: 40px;
}

</style>