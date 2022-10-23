<template>
  <div class="wrapper_login">
    <login
        @sign-up="signUp"
        @sign-in="signIn"
        :isLogin="isRegister"
    ></login>
  </div>
</template>

<script>
import login from "@/pages/RegisterLogin";

export default {
  name: "AuthPage",
  data: () => {
    return {
      isLogin: false,
    }
  },
  components: {
    login
  },
  methods: {
    signUp() {
      this.isLogin = false;
    },
    signIn() {
      this.isLogin = true;
    }
  },
  computed: {
    isRegister() {
      return this.$route.name !== 'register';
    },
  },
}

</script>

<style scoped>
.wrapper_login {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 25%)
}
</style>