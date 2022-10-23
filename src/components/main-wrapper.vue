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
      title: 'Main wrapper',
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

footer {
  position:sticky;
  left:0;
  bottom:0;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  background: linear-gradient(to right, #394236, #546562);
}

.footer-p {
  color: #888888;

}
.catalog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  gap: 30px;
}

.text_al_c {
  text-align: center;
}

.v-catalog-item__name {
  font-size: 23px;
  padding-left: 25%;
  padding-right: 25%;
  font-weight: bold;
  color: #535756;

}

.v-catalog-item__desc {
  padding-left: 25%;
  padding-right: 25%;
  font-size: 14px;
}

.product-button {
  padding: 10px 18px;
  background: #56bd4b;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  border: none;
  border-radius: 3px;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
}

.product-button:hover {
  background: #7bc274;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
}

.price__data {
  font-size: 22px;
  font-weight: bold;
  color: #3d4d04;
  font-family: Andale Mono, monospace
}

a {
  cursor: pointer;
}

h1 {
  padding-bottom: 10px;
}
/*Preloader*/

.d-none {
  display: none;
}

.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.bar {
  width: 10px;
  height: 70px;
  background: #fff;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
  animation: loader 1.2s linear infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader {
  0% {
    transform: scaleY(0.1);
  }
  50% {
    transform: scaleY(1);
    background: #56bd4b;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}

.success {
  color: #30ad0b;
}

</style>