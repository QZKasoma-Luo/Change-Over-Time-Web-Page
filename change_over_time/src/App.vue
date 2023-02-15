<template>
  <router-view></router-view>
</template>

<script>
import _home from '@/components/_home.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: white;
  height: 1080px;
}
html, body{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    padding:0;
    margin: 0;
}
</style>
