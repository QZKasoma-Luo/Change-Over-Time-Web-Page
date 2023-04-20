<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="Down_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="150">
      </el-table-column>
      <el-table-column prop="MachineNo" label="MachineNo" width="150">
      </el-table-column>
      <el-table-column prop="DownReason" label="Down Reason" width="150">
      </el-table-column>
      <el-table-column prop="Project" label="Project" width="150">
      </el-table-column>
      <el-table-column prop="PartNo" label="PartNo" width="150">
      </el-table-column>
      <el-table-column prop="Description" label="Description" width="150">
      </el-table-column>
      <el-table-column prop="Mold" label="Mold" width="150"> </el-table-column>
      <el-table-column prop="DownStartAt" label="Down Start At" width="150">
      </el-table-column>
      <el-table-column prop="DownTime" label="Down Time" width="150">
      </el-table-column>
      <el-table-column prop="Comment" label="Comment" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Down_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_Down_table_data();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_Down_table_data() {
      this.$axios
        .get("/api/Down")
        .then((response) => {
          const data = response.data;
          this.Down_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching Down_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
