<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="trailRun_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="150">
      </el-table-column>
      <el-table-column prop="MAC" label="MAC" width="150"> </el-table-column>
      <el-table-column prop="Project" label="Project" width="150">
      </el-table-column>
      <el-table-column prop="Part" label="Part" width="150"> </el-table-column>
      <el-table-column prop="Mold" label="Mold" width="150"> </el-table-column>
      <el-table-column prop="StdCycle" label="Std Cycle" width="150">
      </el-table-column>
      <el-table-column prop="AvgCycle" label="Avg Cycle" width="150">
      </el-table-column>
      <el-table-column prop="LastCycle" label="Last Cycle" width="150">
      </el-table-column>
      <el-table-column prop="Good" label="Good" width="150"> </el-table-column>
      <el-table-column prop="Scrap" label="Scrap" width="150">
      </el-table-column>
      ]<el-table-column prop="ToGo" label="To GO" width="50"> </el-table-column>
      <el-table-column prop="percentage" label="%" width="150">
      </el-table-column>
      <el-table-column prop="ESTDT" label="EST DT" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trailRun_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_trailRun_tableData();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_trailRun_tableData() {
      this.$axios
        .post("/api/TrailRun")
        .then((response) => {
          const data = response.data;
          this.trailRun_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching trailRun_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
