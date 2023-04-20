<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="Offline_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="200">
      </el-table-column>
      <el-table-column prop="MAC" label="MAC" width="200"> </el-table-column>
      <el-table-column prop="StartAt" label="Start At" width="200">
      </el-table-column>
      <el-table-column prop="PLC" label="PLC" width="200"> </el-table-column>
      <el-table-column prop="IP" label="IP" width="200"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Offline_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_Offline_tableData();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_Offline_tableData() {
      this.$axios
        .post("/api/Offline")
        .then((response) => {
          const data = response.data;
          this.Offline_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching Offline_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
