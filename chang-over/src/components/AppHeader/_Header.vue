<template>
  <div class="header">
    <a href="/">
      <img class="logo" src="@/assets/logo.png" height="50px" width="50px" />
      <span class="title">Change-Over-Time-DashBoard</span>
    </a>
    <el-button type="primary" class="local_time">{{ date }}</el-button>
    <el-dropdown>
      <span class="el-dropdown-link">
        Filter<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>All</el-dropdown-item>
        <el-dropdown-item>B1 CNC</el-dropdown-item>
        <el-dropdown-item>B2 Stampling</el-dropdown-item>
        <el-dropdown-item>B3 Molding</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped>
.title {
  position: absolute;
  color: white;
  left: 60px;
  font-size: 20px;
}
.local_time {
  position: absolute;
  color: white;
  font-size: 20px;
  right: 300px;
  top: 2px;
}
.el-dropdown {
  float: right;
  color: aliceblue;
  margin-right: 30px;
  font-size: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },

  mounted() {
    let _this = this; //create a var points to this to lock the effeictive range
    this.timer = setInterval(() => {
      _this.date = new Date(); // update the time
    }, 1000);
  },

  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer); //clear the timer before destroy
    }
  },
};
</script>
