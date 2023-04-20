<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="Out_of_cycle_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="150">
      </el-table-column>
      <el-table-column prop="MachineNo" label="Machine No." width="150">
      </el-table-column>
      <el-table-column prop="Project" label="Project" width="150">
      </el-table-column>
      <el-table-column prop="PartNo" label="Part No." width="150">
      </el-table-column>
      <el-table-column prop="Description" label="Description" width="150">
      </el-table-column>
      <el-table-column prop="StdCycle" label="Std Cycle" width="150">
      </el-table-column>
      <el-table-column prop="AvgCycle" label="Avg Cycle" width="150">
      </el-table-column>
      <el-table-column prop="LastCycle" label="Last Cycle" width="150">
      </el-table-column>
      <el-table-column prop="Gap" label="Gap (last-STD)" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Out_of_cycle_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_out_of_cycle_table_data();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_out_of_cycle_table_data() {
      this.$axios
        .get("/api/OutOfCycle")
        .then((response) => {
          const data = response.data;
          this.Out_of_cycle_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching out_of_cycle_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
