<template>
  <div v-loading="loading">
    <!-- Using el-col to abrest the Gauges, more info refers to Element UI and Echarts -->
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <div id="MU_gague_section">
      <el-col :span="8">
        <div ref="MU_Overall" id="MU_Overall" class="MU_Charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="B1_Molding" id="B1_Molding" class="MU_Charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="B2_Molding" id="B2_Molding" class="MU_Charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="B3_CNC" id="B3_CNC" class="MU_Charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="B4_Stamping" id="B4_Stamping" class="MU_Charts"></div>
      </el-col>
    </div>
    <br />
    <div ref="ALL_MU_Trend_Chart" class="MU_Charts"></div>
    <div id="Top5_low_MU_reason" class="MU_BarCharts">
      <h3>Top 5 Low MU Reason</h3>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="MUpercentage_Bar1"
        text-color="#ffffff"
        show-text:true
      >
      </el-progress>
      <p>Adjust Machine</p>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="MUpercentage_Bar2"
        status="success"
        text-color="#ffffff"
      ></el-progress>
      <p>Adjust Machine</p>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="MUpercentage_Bar3"
        status="warning"
        text-color="#ffffff"
      ></el-progress>
      <p>Adjust Machine</p>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="MUpercentage_Bar4"
        status="exception"
        text-color="#ffffff"
      ></el-progress>
      <p>Adjust Machine</p>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="MUpercentage_Bar5"
        color="black"
        text-color="#ffffff"
      ></el-progress>
      <p>Adjust Machine</p>
    </div>
    <br />
    <div id="B_15_Molding">
      <h3>ALL Tonnage MU</h3>
      <div class="panels-container" id="B-15_Molding">
        <el-card
          v-for="(item, index) in panelData"
          :key="index"
          class="panel"
          @click.native="openDetailsDialog(index)"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.Ton }}</p>
          <p>{{ item.department }}</p>
        </el-card>
      </div>

      <!-- 详细信息对话框 -->
      <el-dialog :visible.sync="detailsDialogVisible" width="50%">
        <div
          v-for="(item, index) in dialogPanelData"
          :key="index"
          class="dialog-panel"
        >
          <el-card shadow="always" class="dialog-card">
            <div slot="header" class="clearfix">
              <span>{{ item.title }}</span>
            </div>
            <div class="text item">
              {{ item.description }}
            </div>
          </el-card>
        </div>
      </el-dialog>
    </div>
    <div id="B_01_Stamping">
      <h4>B1 Stamping</h4>
      <div class="panels-container" id="B-15_Molding">
        <el-card
          v-for="(item, index) in panelData"
          :key="index"
          class="panel"
          @click.native="openDetailsDialog(index)"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.Ton }}</p>
          <p>{{ item.department }}</p>
        </el-card>
      </div>

      <!-- 详细信息对话框 -->
      <el-dialog :visible.sync="detailsDialogVisible" width="50%">
        <div
          v-for="(item, index) in dialogPanelData"
          :key="index"
          class="dialog-panel"
        >
          <el-card shadow="always" class="dialog-card">
            <div slot="header" class="clearfix">
              <span>{{ item.title }}</span>
            </div>
            <div class="text item">
              {{ item.description }}
            </div>
          </el-card>
        </div>
      </el-dialog>
    </div>
    <div id="B_99_CNC">
      <h4>B99 CNC</h4>
      <div class="panels-container" id="B-15_Molding">
        <el-card
          v-for="(item, index) in panelData"
          :key="index"
          class="panel"
          @click.native="openDetailsDialog(index)"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.Ton }}</p>
          <p>{{ item.department }}</p>
        </el-card>
      </div>

      <!-- 详细信息对话框 -->
      <el-dialog :visible.sync="detailsDialogVisible" width="50%">
        <div
          v-for="(item, index) in dialogPanelData"
          :key="index"
          class="dialog-panel"
        >
          <el-card shadow="always" class="dialog-card">
            <div slot="header" class="clearfix">
              <span>{{ item.title }}</span>
            </div>
            <div class="text item">
              {{ item.description }}
            </div>
          </el-card>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style scoped>
.MU_Charts {
  height: 300px;
}
.MU_BarCharts {
  height: 410px;
}
#MU_gague_section {
  border-width: 2px;
  border-color: skyblue;
  border-style: dotted;
  margin: auto;
  margin-top: 5px;
  overflow: hidden;
}
#Top5_low_MU_reason {
  border-width: 2px;
  border-color: skyblue;
  border-style: dotted;
  margin: auto;
  margin-top: 5px;
  overflow: hidden;
}
.panels-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.panel {
  cursor: pointer;
  background-color: #f4abaa;
  color: #fff;
}
.dialog-panel {
  display: inline-block;
  margin: 0 10px 10px 0;
}
.dialog-card {
  background-color: grey;
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      MU_Chart: {},
      loading: true,
      MUpercentage_Bar1: 0, //initalize the progess of the bar
      MUpercentage_Bar2: 0,
      MUpercentage_Bar3: 0,
      MUpercentage_Bar4: 0,
      MUpercentage_Bar5: 0,
      panelData: [], //First interface panel data
      detailsDialogVisible: false,
      selectedItem: {},
      dialogPanelData: [
        //Have not plugin to the Api, those needs to be loaded from the plugin later
        {
          title: "Dialog Panel 1",
          description: "Description for Dialog Panel 1",
        },
        {
          title: "Dialog Panel 2",
          description: "Description for Dialog Panel 2",
        },
        {
          title: "Dialog Panel 3",
          description: "Description for Dialog Panel 3",
        },
      ],
    };
  },
  mounted() {
    //use initChart to avoid repeatdly create chart object
    this.initChart("MU_Overall");
    this.initChart("B1_Molding");
    this.initChart("B2_Molding");
    this.initChart("B3_CNC");
    this.initChart("B4_Stamping");
    this.initChart("ALL_MU_Trend_Chart");
    this.updateGagueChart();
    this.updateBarChart();
    this.fetch_progess_data();
    this.fetch_panel_data();
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  },

  methods: {
    openDetailsDialog(index) {
      this.selectedItem = this.panelData[index];
      this.detailsDialogVisible = true;
    },
    fetch_panel_data() {
      this.$axios.post("./api/ALL_Tonnage_MU").then((response) => {
        this.panelData = response.data;
      });
    },
    fetch_progess_data() {
      try {
        Promise.all([
          //reuse the OEEOverAll Api plugin, just for testing, need to change it when deploy
          this.$axios.get("/api/OEEOverAll"), //reused the link of OEEOverall Api
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
                    this.MUpercentage_Bar1 = returnData;
                    break;
                  case 1:
                    this.MUpercentage_Bar2 = returnData;
                    break;
                  case 2:
                    this.MUpercentage_Bar3 = returnData;
                    break;
                  case 3:
                    this.MUpercentage_Bar4 = returnData;
                    break;
                  case 4:
                    this.MUpercentage_Bar5 = returnData;
                    break;
                }
              }
            });
          });
      } catch (error) {
        console.error(error);
      }
    },
    updateGagueChart() {
      try {
        Promise.all([
          this.$axios.get("/api/OEEOverAll"), //reused the link of OEEOverall Api
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
                    this.draw_MU_Overall(returnData);
                    break;
                  case 1:
                    this.draw_MU_B1_Molding(returnData);
                    break;
                  case 2:
                    this.draw_B2_Molding(returnData);
                    break;
                  case 3:
                    this.draw_B3_CNC(returnData);
                    break;
                  case 4:
                    this.draw_B4_Stampling(returnData);
                    break;
                }
              }
            });
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setTimeout(this.updateGagueChart, 3000); //fetch the least data from the API per 5sec by using setTimeout
          });
      } catch (error) {
        console.error(error);
      }
    },
    //Asynchronously fetching the data can make the barchart load asynchronously.
    async updateBarChart() {
      let return_data_Y;
      let return_data_X;
      //Using "await" ensures that we load the charts only after obtaining the data
      await this.$axios.post("./api/MUBarCharts_Y").then((response) => {
        return_data_Y = response.data; // No need to parse or convert to float
      });
      await this.$axios.post("./api/MUBarCharts_X").then((response) => {
        return_data_X = response.data; // No need to parse or stringify
      });
      //If we don't use "await", rendering may occur before obtaining the data, which can result in charts without data and cause blank spaces.
      this.draw_ALL_MU_Trend_Chart(return_data_Y, return_data_X);
    },
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.MU_Chart[refName]) {
        const dom = this.$refs[refName];
        this.MU_Chart[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    draw_MU_Overall(initialValue) {
      this.MU_Chart["MU_Overall"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Overall",
          textbaseline: "center",
          top: "230",
          left: "135",
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
            data: [{ value: initialValue, name: "MU_Overall" }],
          },
        ],
      });
    },
    draw_MU_B1_Molding(initialValue) {
      this.MU_Chart["B1_Molding"].setOption({
        title: {
          show: true,
          text: "B1 Molding",
          textbaseline: "center",
          top: "230",
          left: "118",
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

            data: [{ value: initialValue, name: "MU_B2_Molding" }],
          },
        ],
      });
    },
    draw_B2_Molding(initialValue) {
      this.MU_Chart["B2_Molding"].setOption({
        title: {
          show: true,
          text: "B2 Molding",
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

            data: [{ value: initialValue, name: "B3_MU_molding" }],
          },
        ],
      });
    },
    draw_B3_CNC(initialValue) {
      this.MU_Chart["B3_CNC"].setOption({
        title: {
          show: true,
          text: "B3 CNC",
          textbaseline: "center",
          top: "230",
          left: "130",
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
            data: [{ value: initialValue, name: "CNC" }],
          },
        ],
      });
    },
    draw_B4_Stampling(initialValue) {
      this.MU_Chart["B4_Stamping"].setOption({
        title: {
          show: true,
          text: "B4 Stamping",
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
            data: [{ value: initialValue, name: "Stamping" }],
          },
        ],
      });
    },

    draw_ALL_MU_Trend_Chart(initialValue_Y, initialValue_X) {
      this.MU_Chart["ALL_MU_Trend_Chart"].setOption({
        //tooltip is to display a small window with more info when the mouse hover on the charts
        tooltip: {
          trigger: "axis", //set the tooltip trigger as when the mouse is over on any axis
          formatter: function (params) {
            const dataIndex = params[0].dataIndex;
            const value = params[0].value;
            const category = initialValue_X[dataIndex];
            // configure the data shown when mouse was hovered on the bar
            return `${category}: ${value}`;
          },
        },
        title: {
          text: " ALL MU Trend Chart",
        },
        xAxis: {
          data: initialValue_X,
          axisLabel: {
            inside: true,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },
        toolbox: {
          show: true,
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            type: "inside",
            zoomable: true,
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: initialValue_Y,
          },
        ],
      });
    },
  },
};
</script>
