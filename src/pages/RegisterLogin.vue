<template>
  <div class="container" id="container" :class="!isLogin ? 'rightPanelActive' : ''">

    <div class="form-container sign-up-container">
      <div class="form">
        <h2 class="padding-20">Create Account</h2>
        <input type="text" placeholder="ФИО" v-model="model.fio"/>
        <input type="email" placeholder="Email" v-model="model.email"/>

        <span class="error" v-for="error in errors" :key="error">{{ error.email }}</span>

        <input type="password" placeholder="Пароль"  v-model="model.password"/>

          <span v-for="error in errors" :key="error" class="error">{{ error.password }}</span>

        <button v-on:click="signup" class="padding-20">Sign Up</button>
      </div>
    </div>
    <div class="form-container sign-in-container">
      <div class="form">
        <span class="error error-login" v-for="error in errors" :key="error">{{ error }}</span>
        <h2>Sign in</h2>
        <input type="email" placeholder="Email" v-model="model.email" class="padding-20"/>

        <input type="password" placeholder="Password" v-model="model.password"/>

        <button v-on:click="login" class="padding-20">Sign In</button>
      </div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <router-link to="/login">
          <button class="ghost" id="signIn" @click="$emit('signIn')">Sign In</button>
          </router-link>
        </div>
        <div class="overlay-panel overlay-right">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <router-link to="/register">
          <button class="ghost" id="signUp" @click="$emit('signUp')">Sign Up</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";
import router from "@/router";

export default {
  name: "RegisterLoginPage",
  data: () => {
    return {
      model: {
        fio: '',
        email: '',
        password: '',
      },
      click: false,
      errors: [],
      per: [],
    }
  },
  props: {
    isLogin: Boolean,
  },
  methods: {
    async signup() {

      await axios.post('https://jurapro.bhuser.ru/api-shop/signup', this.model ).then((res) => {
        console.log(res.data)
        router.push('/login')
      }).catch((err) => {
        console.log(err.response.data.error)
        this.errors = err.response.data.error
      })

    },

    async login() {
        await axios.post('https://jurapro.bhuser.ru/api-shop/login', {email: this.model.email, password: this.model.password }).then((res) => {
          localStorage.setItem('token', res.data.data.user_token);
          this.per = res.data;
          router.push('/');
        }).catch((err) => {
          this.errors = err.response.data.error;
        })
      }
    },
}

</script>

<style scoped>

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #56bd4b;
  background-color: #56bd4b;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

.form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.error {
  color: red;
}

.error-login {
  margin-bottom: 20px;
  font-size: 18px;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.rightPanelActive .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.rightPanelActive .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.rightPanelActive .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #56bd4b, #19ae8d);
  background: linear-gradient(to right, #30ad0b, #19ae8d);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.rightPanelActive .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.rightPanelActive .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.rightPanelActive .overlay-right {
  transform: translateX(20%);
}

.padding-20 {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>