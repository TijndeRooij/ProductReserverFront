<template>
<nav class="navbar navbar-expand-lg bg-light fixed">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Products</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>   
        <li class="nav-item">
          <a class="nav-link" href="/signup">Sign up</a>
        </li>   
        <li class="nav-item">
          <a class="nav-link" href="/api/login">Log in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
    name: "NavBar",
    methods: {

    }
}
</script>

<style>

.fixed {
  position:fixed;
}
</style>
