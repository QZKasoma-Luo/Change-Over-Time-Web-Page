<template>
  <div id="app">
    <img alt="QingZe Luo's logo" src="./assets/QingZe_luo_logo.png" >
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button type = "primary">First-Button</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button type="success">Second-Button</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button type="info">Thrid-Button</el-button></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-button type="warning">Fourth-Button</el-button></div></el-col>
      
    </el-row>
    
  </div>
</template>

<script>

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
img {
  width: 250px;
  border-radius: 50px;
  float: top; /*Set the picture to the top of the txt*/
  margin-right: 30px;
}
</style>
