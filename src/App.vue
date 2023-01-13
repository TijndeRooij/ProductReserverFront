<template>
<div style="overflow-x: hidden;">
  <NavBar></NavBar>
  <CreateSideBar></CreateSideBar>
  <div class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import CreateSideBar from './components/CreateSideBar.vue';
export default {
    name: "app",
    components: { NavBar, CreateSideBar }
};
</script>

<style>
@import url(https://bootswatch.com/5/flatly/bootstrap.css);
</style>
