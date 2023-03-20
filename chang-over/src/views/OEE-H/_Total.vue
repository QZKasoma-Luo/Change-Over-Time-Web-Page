<template>
  <div v-loading="loading">
    <!-- Using el-col to abrest the Gauges, more info refers to Element UI and Echarts -->
    <div id="gauags_section">
      <el-col :span="8">
        <div
          ref="OEE_Overall_avg"
          id="OEE_Overall_avg"
          class="OEE_gauges"
        ></div>
      </el-col>
      <el-col :span="8">
        <div
          ref="OEE_Availability"
          id="OEE_Availability"
          class="OEE_gauges"
        ></div>
      </el-col>
      <el-col :span="8">
        <div
          ref="OEE_Performance"
          id="OEE_Performance"
          class="OEE_gauges"
        ></div>
      </el-col>
      <el-col :span="8">
        <div ref="OEE_Yield" id="OEE_Yield" class="OEE_gauges"></div>
      </el-col>
      <el-col :span="8">
        <div ref="OEE_MU" id="OEE_MU" class="OEE_gauges"></div>
      </el-col>
    </div>
    <br />
    <el-col :span="12">
      <div id="Top_DOWN_REASON">
        <h3>Top 5 Down Reason</h3>
        <el-table
          :data="Reason_down_tableData"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="120"></el-table-column>
          <el-table-column prop="Reason" label="Reason" width="120">
          </el-table-column>
          <el-table-column prop="QTY" label="QTY" width="120">
          </el-table-column>
          <el-table-column prop="percentage" label="%"> </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="TOP_5_TOOLS_IN_DOWN">
        <h3>TOP 5 TOOLS IN DOWN</h3>
        <el-table
          :data="TOOLS_IN_DOWN_TABLE_DATA"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="120"></el-table-column>
          <el-table-column prop="MAC" label="MAC#" width="120">
          </el-table-column>
          <el-table-column prop="Tool" label="Tool"> </el-table-column>
          <el-table-column prop="DownTime" label="DOWN TIME" width="120">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <br />
    <el-col :span="12">
      <div id="TOP_5_MACHINE_IN_DOWN">
        <h3>TOP 5 MACHINE IN DOWN</h3>
        <el-table
          :data="TOP_MACHINE_DOWN_DATA"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="120"></el-table-column>
          <el-table-column prop="MAC" label="MAC#" width="120">
          </el-table-column>
          <el-table-column prop="Reason" label="Reason"> </el-table-column>
          <el-table-column prop="DownTime" label="DownTime" width="120">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="TOP_5_SCRAP_REASON">
        <h3>TOP 5 SCRAP REASON</h3>
        <el-table
          :data="TOP_SCRAP_REASON_DATA"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="120"></el-table-column>
          <el-table-column prop="Reason" label="Reason" width="130">
          </el-table-column>
          <el-table-column prop="QTY" label="QTY"> </el-table-column>
          <el-table-column prop="percentage" label="percentage" width="120">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <br />
    <el-col :span="12">
      <div id="TOP_5_LOW_YIELD">
        <h3>TOP 5 Low Yield</h3>
        <el-table
          :data="TOP_LOW_YIELD_DATA"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="50"></el-table-column>
          <el-table-column prop="MAC" label="MAC" width="120"></el-table-column>
          <el-table-column prop="yield" label="Yield" width="120">
          </el-table-column>
          <el-table-column prop="QTY" label="QTY"></el-table-column>
          <el-table-column prop="Reason" label="Reason" width="130">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="TOP_5_LOW_PERFORMANCE">
        <h3>TOP 5 LOW PERFORMANCE</h3>
        <el-table
          :data="TOP_LOW_PERFORMANCE_DATA"
          height="250"
          border-style="width: 100%"
        >
          <el-table-column prop="rank" label="#" width="50"></el-table-column>
          <el-table-column prop="MAC" label="MAC" width="120"></el-table-column>
          <el-table-column prop="AvgCycle" label="AvgCycle" width="120">
          </el-table-column>
          <el-table-column prop="StdCycle" label="StdCycle"> </el-table-column>
          <el-table-column prop="Percentage" label="percentage" width="120">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </div>
</template>
<style scoped>
.OEE_gauges {
  height: 300px;
}
#gauags_section {
  border-width: 2px;
  border-color: skyblue;
  border-style: dotted;
  margin: auto;
  margin-top: 5px;
  overflow: hidden;
}
</style>

<script>
export default {
  data() {
    return {
      chartDemo: {},
      Reason_down_tableData: [],
      TOOLS_IN_DOWN_TABLE_DATA: [],
      TOP_MACHINE_DOWN_DATA: [],
      TOP_SCRAP_REASON_DATA: [],
      TOP_LOW_YIELD_DATA: [],
      TOP_LOW_PERFORMANCE_DATA: [],
      loading: true,
    };
  },
  mounted() {
    //use initChart to avoid repeatdly create chart object
    this.initChart("OEE_Overall_avg");
    this.initChart("OEE_Availability");
    this.initChart("OEE_Performance");
    this.initChart("OEE_Yield");
    this.initChart("OEE_MU");
    this.updateChart();
    this.fetchReasonDownTableData();
    this.fetchTOOLS_IN_DOWN_TABLE_DATA();
    this.fetchTOP_MACHINE_DOWN_DATA();
    this.fetchTOP_SCRAP_REASON_DATA();
    this.fetchTOP_LOW_YIELD_DATA();
    this.fetchTOP_LOW_PERFORMANCE_DATA();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

  methods: {
    updateChart() {
      try {
        Promise.all([
          this.$axios.get("/api/OEEOverAll"),
          this.$axios.get("/api/OEEOverAll"),
          this.$axios.get("/api/OEEOverAll"),
          this.$axios.get("/api/OEEOverAll"),
          this.$axios.get("/api/OEEOverAll"),
        ]) //fetch 5 data once from API
          .then((response) => {
            response.forEach((response, index) => {
              //display gauags data by the order of fetch them
              let returnData = parseFloat(JSON.parse(response.data));
              if (!isNaN(returnData)) {
                switch (index) {
                  case 0:
                    this.draw_OEE_Overall_Chart(returnData);
                    break;
                  case 1:
                    this.draw_OEE_Availability(returnData);
                    break;
                  case 2:
                    this.draw_OEE_Performance(returnData);
                    break;
                  case 3:
                    this.draw_OEE_Yield(returnData);
                    break;
                  case 4:
                    this.draw_OEE_MU(returnData);
                    break;
                }
              }
            });
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setTimeout(this.updateChart, 3000); //fetch the least data from the API per 5sec by using setTimeout
          });
      } catch (error) {
        console.error(error);
      }
    },
    fetchReasonDownTableData() {
      this.$axios
        .get("/api/Top5ReasonDown")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.Reason_down_tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching Reason_down_tableData:", error);
        });
    },
    fetchTOOLS_IN_DOWN_TABLE_DATA() {
      this.$axios
        .get("/api/Top5ToolsDown")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.TOOLS_IN_DOWN_TABLE_DATA = data;
        })
        .catch((error) => {
          console.error("Error fetching TOOLS_IN_DOWN_TABLE_DATA:", error);
        });
    },
    fetchTOP_SCRAP_REASON_DATA() {
      this.$axios
        .get("/api/Top5ScrapReason")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.TOP_SCRAP_REASON_DATA = data;
        })
        .catch((error) => {
          console.error("Error fetching Top5ScrapReason:", error);
        });
    },
    fetchTOP_MACHINE_DOWN_DATA() {
      this.$axios
        .get("/api/Top5MachineDown")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.TOP_MACHINE_DOWN_DATA = data;
        })
        .catch((error) => {
          console.error("Error fetching TOP_MACHINE_DOWN_DATA:", error);
        });
    },
    fetchTOP_LOW_YIELD_DATA() {
      this.$axios
        .get("/api/Top5LowYield")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.TOP_LOW_YIELD_DATA = data;
        })
        .catch((error) => {
          console.error("Error fetching TOP_LOW_YIELD_DATA:", error);
        });
    },
    fetchTOP_LOW_PERFORMANCE_DATA() {
      this.$axios
        .get("/api/Top5LowPerformance")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.TOP_LOW_PERFORMANCE_DATA = data;
        })
        .catch((error) => {
          console.error("Error fetching TOP_LOW_PERFORMANCE_DATA:", error);
        });
    },
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.chartDemo[refName]) {
        const dom = this.$refs[refName];
        this.chartDemo[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    draw_OEE_Overall_Chart(initialValue) {
      this.chartDemo["OEE_Overall_avg"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Overall OEE",
          textbaseline: "center",
          top: "230",
          left: "115",
        },
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 10,
            },

            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 10,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },

            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 8,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "80%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value + "}";
              },
              rich: {
                value: {
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 1,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [{ value: initialValue, name: "OEE" }],
          },
        ],
      });
    },
    draw_OEE_Availability(initialValue) {
      this.chartDemo["OEE_Availability"].setOption({
        title: {
          show: true,
          text: "Availability",
          textbaseline: "center",
          top: "230",
          left: "125",
        },
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            title: {
              show: true,
              text: "Overall OEE",
            },
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 10,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 10,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 8,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "80%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value + "}";
              },
              rich: {
                value: {
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 1,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },

            data: [{ value: initialValue, name: "Availability" }],
          },
        ],
      });
    },
    draw_OEE_Performance(initialValue) {
      this.chartDemo["OEE_Performance"].setOption({
        title: {
          show: true,
          text: "Performance",
          textbaseline: "center",
          top: "230",
          left: "115",
        },
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            title: {
              show: true,
              text: "Overall OEE",
            },
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 10,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 10,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 8,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "80%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value + "}";
              },
              rich: {
                value: {
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 1,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },

            data: [{ value: initialValue, name: "Performance" }],
          },
        ],
      });
    },
    draw_OEE_Yield(initialValue) {
      this.chartDemo["OEE_Yield"].setOption({
        title: {
          show: true,
          text: "Yield",
          textbaseline: "center",
          top: "230",
          left: "145",
        },
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            title: {
              show: true,
              text: "Overall OEE",
            },
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 10,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 10,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 8,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "80%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value + "}";
              },
              rich: {
                value: {
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 1,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [{ value: initialValue, name: "Yield" }],
          },
        ],
      });
    },
    draw_OEE_MU(initialValue) {
      this.chartDemo["OEE_MU"].setOption({
        title: {
          show: true,
          text: "MU",
          textbaseline: "center",
          top: "230",
          left: "155",
        },
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 10,
            title: {
              show: true,
              text: "Overall OEE",
            },
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            progress: {
              show: true,
              roundCap: true,
              width: 10,
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "75%",
              width: 10,
              offsetCenter: [0, "5%"],
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
              },
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 20,
              color: "#999",
              fontSize: 8,
            },
            title: {
              show: false,
            },
            detail: {
              backgroundColor: "#fff",
              borderColor: "#999",
              borderWidth: 2,
              width: "80%",
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, "35%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value + "}";
              },
              rich: {
                value: {
                  fontSize: 40,
                  fontWeight: "bolder",
                  color: "#777",
                },
                unit: {
                  fontSize: 1,
                  color: "#999",
                  padding: [0, 0, -20, 10],
                },
              },
            },
            data: [{ value: initialValue, name: "MU" }],
          },
        ],
      });
    },
  },
};
</script>
