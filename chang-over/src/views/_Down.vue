<template>
  <div>
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <h3>Down Detail</h3>
    <div ref="DownDetail" class="DownPage"></div>
    <div ref="UnplanDownReason" class="DownPage"></div>
  </div>
</template>

<style>
.DownPage {
  height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      Down_charts: {},
    };
  },

  mounted() {
    this.initChart("DownDetail");
    this.initChart("UnplanDownReason");
    this.fetchApi();
  },
  methods: {
    initChart(refName) {
      // if object ref does not exist, create the chart object
      if (!this.Down_charts[refName]) {
        const dom = this.$refs[refName];
        this.Down_charts[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    async fetchApi() {
      let ApiDataForDownDetail;
      let ApiLinksForDownDetail;
      let ApiDataForUnplanDownReason;
      //Using "await" ensures that we load the charts only after obtaining the data
      await this.$axios.post("./api/DownPageSandKeyData").then((response) => {
        ApiLinksForDownDetail = response.data; // No need to parse or convert to float
      });
      await this.$axios.post("./api/DownPageSandKeyLinks").then((response) => {
        ApiDataForDownDetail = response.data; // No need to parse or stringify
      });
      await this.$axios.post("./api/B15_CNC_daily_status").then((response) => {
        ApiDataForUnplanDownReason = response.data; // No need to parse or stringify
      });
      //If we don't use "await", rendering may occur before obtaining the data, which can result in charts without data and cause blank spaces.
      this.drawDownDetail(ApiLinksForDownDetail, ApiDataForDownDetail);
      this.draw_UnplanDownReason(ApiDataForUnplanDownReason);
    },

    drawDownDetail(ApiData, ApiLinks) {
      this.Down_charts["DownDetail"].setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: {
          type: "sankey",
          layout: "none",
          emphasis: {
            focus: "adjacency",
          },
          data: ApiData,
          links: ApiLinks,
        },
      });
    },

    draw_UnplanDownReason(initialValue) {
      this.Down_charts["UnplanDownReason"].setOption({
        title: {
          show: true,
          text: "Unplan Down Reason",
          textbaseline: "center",
          top: "330",
          left: "70",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: initialValue,
          },
        ],
      });
    },
  },
};
</script>
