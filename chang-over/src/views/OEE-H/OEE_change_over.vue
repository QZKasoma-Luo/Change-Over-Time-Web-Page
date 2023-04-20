<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="Change_over_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="150">
      </el-table-column>
      <el-table-column prop="MachineNo" label="MachineNo" width="150">
      </el-table-column>
      <el-table-column prop="NextWo" label="Next Wo" width="150">
      </el-table-column>
      <el-table-column prop="NextProject" label="Next Project" width="150">
      </el-table-column>
      <el-table-column prop="NextPartNo" label="Next Part No." width="150">
      </el-table-column>
      <el-table-column prop="Mold" label="Mold" width="150"> </el-table-column>
      <el-table-column
        prop="MaterialPartNo"
        label="Material Part No."
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="MaterialDescription"
        label="Material Description"
        width="170"
      >
      </el-table-column>
      <el-table-column prop="BOMUsage" label="BOM Usage" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Change_over_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_Change_over_tableData();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_Change_over_tableData() {
      this.$axios
        .get("/api/ChangeOver")
        .then((response) => {
          const data = response.data;
          this.Change_over_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching Change_over_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
