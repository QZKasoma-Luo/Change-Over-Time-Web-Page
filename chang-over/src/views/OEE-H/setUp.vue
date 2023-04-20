<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="setUp_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="100">
      </el-table-column>
      <el-table-column prop="MachineNo" label="Machine No." width="110">
      </el-table-column>
      <el-table-column prop="WorkOrder" label="Work Order" width="100">
      </el-table-column>
      <el-table-column prop="Project" label="Project" width="100">
      </el-table-column>
      <el-table-column prop="PartNo" label="Part Number" width="150">
      </el-table-column>
      <el-table-column prop="Description" label="Description" width="150">
      </el-table-column>
      <el-table-column prop="Mold" label="Mold" width="100"> </el-table-column>
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
      <el-table-column prop="BOMUsage" label="BOMUsage" width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setUp_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_SetUp_table_data();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_SetUp_table_data() {
      this.$axios
        .post("/api/setUp")
        .then((response) => {
          const data = response.data;
          this.setUp_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching setUp_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
