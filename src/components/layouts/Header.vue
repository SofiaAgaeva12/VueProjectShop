<template>
  <nav class="nav">
    <div class="nav__title">Просто купить</div>
    <ul class="nav__list">
      <router-link to="/register">
        <li class="nav__item">Регистрация</li>
      </router-link>
      <router-link to="/login">
        <li class="nav__item">Вход</li>
      </router-link>

      <router-link to="/cart">
        <li class="nav__item">Корзина</li>
      </router-link>

      <router-link to="/orders">
        <li class="nav__item">Мои заказы</li>
      </router-link>

      <router-link to="/logout">
        <li class="nav__item">Выйти</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderPage"
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
}

.nav {
  background: rgba(86, 189, 75, 0.26);

  &__title {
    margin: 0 30px;
  }

  &__item {
    display: inline-block;
    margin: 0 30px;
  }
}

.nav__title {
  font-size: 18px;
}

.nav__item {
  transition: color .3s, background-color .3s;
  padding: 0.6rem 1rem;
  border-radius: 2rem ;

}

.nav__item:hover {
  color: rgba(255, 255, 255, 0.84);
  cursor: pointer;
  background: rgba(86, 189, 75, 0.66);
}

</style>