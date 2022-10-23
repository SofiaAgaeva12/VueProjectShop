<template>
  <nav class="nav">
    <router-link to="/" class="link_dec">
      <div class="nav__title">Просто купить</div>
    </router-link>

    <ul class="nav__list">
      <router-link to="/register">
        <li class="nav__item">Регистрация</li>
      </router-link>
      <router-link to="/login">
        <li class="nav__item">Вход</li>
      </router-link>

      <router-link to="/cart">
        <li class="nav__item"  v-if="authed">Корзина</li>
      </router-link>

      <router-link to="/orders">
        <li class="nav__item"  v-if="authed">Мои заказы</li>
      </router-link>

      <router-link to="/logout">
        <li class="nav__item" v-on:click="logout"  v-if="authed">Выйти</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "HeaderPage",
  methods: {
    async logout() {
      await axios.get('https://jurapro.bhuser.ru/api-shop/logout', {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        console.log(res.data)
        router.push('/login')
        localStorage.removeItem('token')
      }).catch((err) => {
        console.log(err.response.data.error)
        this.errors = err.response.data.error
      })
    }
  },
  computed: {
    authed() {
      return localStorage.getItem('token');
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  top: 0;
  margin-bottom: 30px;
}

.nav {
  background: linear-gradient(to right, #30ad0b, #19ae8d);

  &__title {
    margin: 0 30px;
  }

  &__item {
    display: inline-block;
    margin: 0 30px;
  }
}

.nav__title {
  font-size: 20px;
  color: #FFFFFF;
}

.link_dec {
  text-decoration: none;
}

.nav__item {
  transition: color .3s, background-color .3s;
  padding: 0.6rem 1rem;
  border-radius: 2rem ;
  color: rgb(255, 255, 255);
}

.nav__item:hover {
  color: #333333;
  cursor: pointer;
  //background: rgb(15, 227, 220);
}

</style>