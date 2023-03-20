<template>
  <!-- Setting up the Navgation Bar on the left side of the web -->
  <div class="NavBar">
    <el-col>
      <h6 id="navStatus">MES PRO Dashboard</h6>
      <el-menu
        :router="true"
        default-active="/Total"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>OEE-H</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/Total">Total</el-menu-item>
            <el-menu-item index="/NO_Plan">No Plan</el-menu-item>
            <el-menu-item index="/_OEE_H_Down">Down</el-menu-item>
            <el-menu-item index="_Out_of_cycle">Out of Cycle</el-menu-item>
            <el-menu-item index="OEE_change_over">Change Over</el-menu-item>
            <el-menu-item index="/unknown">Unkown</el-menu-item>
            <el-menu-item index="/setUp">Set Up</el-menu-item>
            <el-menu-item index="/processing">Processing</el-menu-item>
            <el-menu-item index="/trail_run">Trial Run</el-menu-item>
            <el-menu-item index="/offline">Offline</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/MU">
          <i class="el-icon-menu"></i>
          <span>MU</span>
        </el-menu-item>
        <el-menu-item index="/MCRR">
          <i class="el-icon-menu"></i>
          <span>MCRR</span>
        </el-menu-item>
        <el-menu-item index="/Yield">
          <i class="el-icon-menu"></i>
          <span>Yield</span>
        </el-menu-item>
        <el-menu-item index="/Down">
          <i class="el-icon-menu"></i>
          <span>Down</span>
        </el-menu-item>
        <el-menu-item index="/DownTime">
          <i class="el-icon-menu"></i>
          <span>Down Time</span>
        </el-menu-item>
        <el-menu-item index="/Hourly">
          <i class="el-icon-menu"></i>
          <span>Hourly</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
#navStatus {
  top: 15px;
  position: relative;
  left: 18px;
  font-size: 15px;
  color: white;
}
</style>
