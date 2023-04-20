<template>
  <div v-loading="loading">
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-table :data="Unkown_tableData" border-style="width: 100%">
      <el-table-column prop="Category" label="Category" width="400">
      </el-table-column>
      <el-table-column prop="Ton" label="Ton" width="400"> </el-table-column>
      <el-table-column prop="MAC" label="MAC" width="400"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Unkown_tableData: [],
      loading: true,
    };
  },
  mounted() {
    this.fetch_Unkown_table_data();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    fetch_Unkown_table_data() {
      this.$axios
        .get("/api/Unknow")
        .then((response) => {
          const data = response.data;
          this.Unkown_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching Unkown_tableData:", error);
        });
    },
  },
};
</script>

<style></style>
