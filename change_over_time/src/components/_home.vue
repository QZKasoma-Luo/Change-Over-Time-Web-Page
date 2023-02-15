<template>
  <el-header></el-header>
  <el-main>
    <p>
      <el-button round size = large><router-link to = "/for_OEE_H">OEE-H</router-link></el-button>
      <el-button round size = large><router-link to = "/MU">MU</router-link></el-button>
      <el-button round size = large><router-link to = "/MCRR">MCRR</router-link></el-button>
      <el-button round size = large><router-link to = "/for_yield">Yield</router-link></el-button>
      <el-button round size = large><router-link to = "/for_down">Down</router-link></el-button>
      <el-button round size = large><router-link to = "/for_down_time">Down-Time</router-link></el-button>
      <el-button round size = large><router-link to = "/for_hourly">Hourly</router-link></el-button>
    </p>
    <p></p>
    <p style="font-size:30px">{{message}}</p>
    </el-main>
    <el-footer><div class = "local_time" >{{date}}</div></el-footer>
</template>

<script>
  export default {
    data(){
      return{
        message: 'Welcome to the Change Over Time Dashboard!',
        date: new Date()
      };
    },

    mounted() {
      let _this = this; //create a var points to this to lock the effeictive range
      this.timer = setInterval(() => {
        _this.date = new Date(); // update the time
      }, 1000)
    },

    beforeUnmount() {
      if(this.timer){
        clearInterval(this.timer); //clear the timer before destroy
      }
    },   
  }
</script><style scoped src = "../assets/styles/normalize.css">
</style>


