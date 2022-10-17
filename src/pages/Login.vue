<template>
  <input type="email" v-model="model.email">
  <input type="password" v-model="model.password">
  <button @click="login">Войти</button>
</template>

<script>


import axios from "axios";

export default {
  name: "LoginPage",
  data: () => {
    return {
      model: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async login() {
      await axios.post('https://jurapro.bhuser.ru/api-shop/login', this.model ).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err.response.data.error)
      })


    }
  }
}
</script>

<style scoped>

</style>