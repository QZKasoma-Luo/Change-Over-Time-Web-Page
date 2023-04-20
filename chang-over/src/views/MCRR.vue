<template>
  <div>
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <el-row>
      <div class="runningStatusSection">
        <h3>ALL Running Status Today</h3>
        <el-col :span="6">
          <div ref="B1_CNC_daily_status" class="runningStatusSection"></div>
        </el-col>
        <el-col :span="6">
          <div ref="B2_Molding_daily_status" class="runningStatusSection"></div>
        </el-col>
        <el-col :span="6">
          <div ref="B3_CNC_daily_status" class="runningStatusSection"></div>
        </el-col>
        <el-col :span="6">
          <div
            ref="B4_stamping_daily_status"
            class="runningStatusSection"
          ></div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="status_form">
          <el-table :data="status_form" style="width: 100%">
            <el-table-column prop="status" label="Status" width="180">
              <template slot-scope="scope">
                <div class="break-word">{{ scope.row.status }}</div>
              </template>
            </el-table-column>
            <el-table-column label="Building">
              <el-table-column prop="Thu" label="Thu" width="120">
              </el-table-column>
              <el-table-column prop="Fri" label="Fri" width="120">
              </el-table-column>
              <el-table-column prop="Sat" label="Sat" width="120">
              </el-table-column>
              <el-table-column prop="Sun" label="Sun" width="120">
              </el-table-column>
              <el-table-column prop="Mon" label="Mon" width="120">
              </el-table-column>
              <el-table-column prop="Tue" label="Tue" width="120">
              </el-table-column>
              <el-table-column prop="Wen" label="Wen" width="120">
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <br />
    <div class="AllRunningRateWeek" ref="AllRunningRateWeek"></div>
  </div>
</template>
<style scoped>
.runningStatusSection {
  height: 400px;
}
.AllRunningRateWeek {
  height: 500px;
}
.break-word {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
</style>
<script>
export default {
  data() {
    return {
      MCRR_Charts: {}, //object for initialize the echarts
      status_form: [],
    };
  },
  mounted() {
    this.initChart("B1_CNC_daily_status");
    this.initChart("B2_Molding_daily_status");
    this.initChart("B3_CNC_daily_status");
    this.initChart("B4_stamping_daily_status");
    this.initChart("AllRunningRateWeek");
    this.updateDailyStatusCharts();
    this.draw_All_Running_week_rate();
    this.fetchFormData();
  },
  methods: {
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.MCRR_Charts[refName]) {
        const dom = this.$refs[refName];
        this.MCRR_Charts[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    updateDailyStatusCharts() {
      try {
        Promise.all([
          this.$axios.post("/api/B15_CNC_daily_status"),
          this.$axios.post("/api/B15_CNC_daily_status"),
          this.$axios.post("/api/B15_CNC_daily_status"),
          this.$axios.post("/api/B15_CNC_daily_status"),
        ]).then((response) => {
          response.forEach((response, index) => {
            let returnData = response.data;
            //if的条件不能为！NAN，因为这次返回的是一个数组，而不是一个值， 问题出在这里导致一直不渲染并且不报错，要记住！
            if (Array.isArray(returnData) && returnData.length > 0) {
              switch (index) {
                case 0:
                  this.draw_B1_CNC_Daily_status(returnData);
                  break;
                case 1:
                  this.draw_B2_Molding_daily_status(returnData);
                  break;
                case 2:
                  this.draw_B3_CNC_daily_status(returnData);
                  break;
                case 3:
                  this.draw_B4_stamping_daily_status(returnData);
                  break;
              }
            }
          });
        });
      } catch (error) {
        console.error(error);
      }
    },
    fetchFormData() {
      this.$axios
        .post("/api/status_form")
        .then((response) => {
          const data = response.data;
          this.status_form = data;
        })
        .catch((error) => {
          console.error("Error fetching MCRR_Form_data:", error);
        });
    },
    draw_B1_CNC_Daily_status(initialValue) {
      this.MCRR_Charts["B1_CNC_daily_status"].setOption({
        title: {
          show: true,
          text: "Today's B1-CNC",
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
    draw_B2_Molding_daily_status(initialValue) {
      this.MCRR_Charts["B2_Molding_daily_status"].setOption({
        title: {
          show: true,
          text: "Today's B2-Molding",
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
            data: initialValue, // initial value cannot apply to the data, needs to find a solution
          },
        ],
      });
    },
    draw_B3_CNC_daily_status(initialValue) {
      this.MCRR_Charts["B3_CNC_daily_status"].setOption({
        title: {
          show: true,
          text: "Today's B3-CNC",
          textbaseline: "center",
          top: "330",
          left: "90",
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
    draw_B4_stamping_daily_status(initialValue) {
      this.MCRR_Charts["B4_stamping_daily_status"].setOption({
        title: {
          show: true,
          text: "Today's B4-stamping",
          textbaseline: "center",
          top: "330",
          left: "60",
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
    draw_All_Running_week_rate() {
      // Replace the following example data with your actual data or fetch it from an API
      const categories = (function () {
        let now = new Date();
        let res = [];
        let len = 10;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
          now = new Date(+now - 2000);
        }
        return res;
      })();
      const categories2 = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })();
      const data = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }
        return res;
      })();
      const data2 = (function () {
        let res = [];
        let len = 0;
        while (len < 10) {
          res.push(+(Math.random() * 10 + 5).toFixed(1));
          len++;
        }
        return res;
      })();
      const option = {
        title: {
          text: "All_Running_week_rate",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56",
            },
          },
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: categories,
          },
          {
            type: "category",
            boundaryGap: true,
            data: categories2,
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            name: "Price",
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
          {
            type: "value",
            scale: true,
            name: "Order",
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2],
          },
        ],
        series: [
          {
            name: "Running",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data,
          },
          {
            name: "Running Rate",
            type: "line",
            data: data2,
          },
        ],
      };
      this.MCRR_Charts["AllRunningRateWeek"].setOption(option);

      const self = this;
      app.count = 11;
      setInterval(function () {
        let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
        data.shift();
        data.push(Math.round(Math.random() * 1000));
        data2.shift();
        data2.push(+(Math.random() * 10 + 5).toFixed(1));
        categories.shift();
        categories.push(axisData);
        categories2.shift();
        categories2.push(app.count++);
        self.MCRR_Charts["AllRunningRateWeek"].setOption({
          xAxis: [
            {
              data: categories,
            },
            {
              data: categories2,
            },
          ],
          series: [
            {
              data: data,
            },
            {
              data: data2,
            },
          ],
        });
      }, 2100);
    },
  },
};
</script>
