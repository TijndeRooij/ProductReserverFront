<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
    name: "app",
    components: { NavBar }
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>
