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
@import url(https://bootswatch.com/5/flatly/bootstrap.css);
</style>
