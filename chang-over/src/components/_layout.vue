<template>
  <div>
    <appheader>header</appheader>
    <appdisplay>display</appdisplay>
    <appnav-bar>navbar</appnav-bar>
  </div>
</template>
<script>
import AppDisplay from "./AppDisplay/_mainDisplay.vue";
import AppHeader from "./AppHeader/_Header.vue";
import AppNavBar from "./AppNavBar/_Nav.vue";
export default {
  components: {
    appdisplay: AppDisplay,
    appheader: AppHeader,
    appnavBar: AppNavBar,
  },
};
</script>
<style>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #130505;
}

.NavBar {
  position: absolute;
  width: 200px;
  left: 0px;
  top: 50px;
  bottom: 0px;
  background-color: #545c64;
  overflow-y: scroll;
  overflow-x: hidden;
}

.Display {
  background-color: aliceblue;
  position: absolute;
  left: 200px;
  right: 0px;
  bottom: 0px;
  top: 50px;
  padding: 10px;
  overflow-y: auto;
}
</style>
