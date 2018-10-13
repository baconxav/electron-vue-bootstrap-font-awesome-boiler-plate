<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Test</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/test2">Test2</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-bootstrap-boiler-plate-v2'
  }
</script>

<style>
  /* CSS */
.input-group-addon {
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
}
</style>
