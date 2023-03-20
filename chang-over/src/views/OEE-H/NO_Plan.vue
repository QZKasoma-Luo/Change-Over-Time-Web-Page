<template>
  <div>
    <el-table
      :data="Reason_down_tableData"
      height="calc(100% - 10rem)"
      border-style="width: 100%"
    >
      <el-table-column prop="NO_PLAN_CATEGORY" label="Category" width="180">
      </el-table-column>
      <el-table-column prop="NO_PLAN_Ton" label="TON" width="180">
      </el-table-column>
      <el-table-column prop="NoPlanMACQty" label="No Plan QTY" width="180">
      </el-table-column>
      <el-table-column
        prop="No_Plan_MACHINE_NUMBER"
        label="MACHINE NUMBER"
        width="250"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
