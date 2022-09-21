<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ProductsView />
</template>

<script>
import ProductsView from './components/ProductsView.vue';

export default {
  name: 'App',
  components: {
    ProductsView
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
