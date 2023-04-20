<template>
  <div>
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <div ref="DownTimePageChart" class="DownTimePageChart"></div>
    <h3>ALL Today Top5 DownTime Reason & Machines</h3>
    <div
      ref="ALL_Today_Top5_DownTime_Reason_Machines"
      class="DownTimePageChart"
    ></div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="rank" label="Rank" width="200"> </el-table-column>
      <el-table-column prop="MAC" label="MAC" width="200"> </el-table-column>
      <el-table-column prop="Tonnage" label="Tonnage" width="200">
      </el-table-column>
      <el-table-column prop="Reason" label="Reason" width="200">
      </el-table-column>
      <el-table-column prop="DownTime" label="Down Time" width="250">
      </el-table-column>
    </el-table>
    <h3>Today's Detail</h3>
    <div ref="TodayDetail" class="DownTimePageChart"></div>
    <br />
    <h3>ALL ChangeOver Times and Elapsed time by 10 Today</h3>
    <div ref="ChangeOver10Days" class="DownTimePageChart"></div>
  </div>
</template>
<style>
.DownTimePageChart {
  height: 400px;
}
</style>
<script>
export default {
  data() {
    return {
      DownTimeChart: {},
      tableData: [],
    };
  },
  mounted() {
    this.initChart("DownTimePageChart");
    this.initChart("ALL_Today_Top5_DownTime_Reason_Machines");
    this.initChart("TodayDetail");
    this.initChart("ChangeOver10Days");
    this.updateBarChart();
    this.draw_ALL_Today_Top5_DownTime_Reason_Machines();
    this.fetch_TABLE_DATA();
    this.draw_today_detail();
    this.draw_ALL_ChangeOver_Times_and_Elapsed_time_by_10_Today();
  },
  methods: {
    async updateBarChart() {
      //used the MUBarCharts_Y/X Api Address just to display the bar chart, need to change it when deploy
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
      this.draw_ALL_DownTimeByMon(return_data_Y, return_data_X);
    },
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.DownTimeChart[refName]) {
        const dom = this.$refs[refName];
        this.DownTimeChart[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    draw_ALL_DownTimeByMon(initialValue_Y, initialValue_X) {
      this.DownTimeChart["DownTimePageChart"].setOption({
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
          text: "Down Time By Mon",
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

    draw_ALL_Today_Top5_DownTime_Reason_Machines() {
      const pathSymbols = {
        toolingDown:
          "path://m643 783 44-41q7-7 7-15.5t-7-15.5L535 559q5-14 8-27t3-27q0-58-41-99t-99-41q-17 0-34 5t-33 14l88 87-54 51-86-85q-9 16-13.5 33t-4.5 35q0 57 40 96.5t97 39.5q14 0 27.5-2.5T461 631l151 152q6 6 15.5 6t15.5-6ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z",
        EqupimentDown:
          "path://M166 936v-94h127L187 480q-32-15-50-40.5T119 372q0-47 34.5-81.5T235 256q44 0 73 23.5t39 62.5h146v-59q0-12 9-21t21-9q11 0 18.5 8.5T549 281l75-72q8-8 20.5-10.5T670 202l158 76q9 5 12.5 14t-1.5 19q-5 10-14.5 12t-18.5-3l-155-75-98 99v52l98 103 155-76q10-5 19-2.5t14 12.5q5 10 1.5 20T827 468l-153 72q-14 7-27 6.5T624 536l-75-72q0 14-7.5 21t-18.5 7q-12 0-21-9t-9-21v-60H345q0 12-6.5 24.5T323 447l205 395h158v94H166Zm69-508q24 0 40-16t16-40q0-24-16-40t-40-16q-24 0-40 16t-16 40q0 24 16 40t40 16Zm124 414h102L272 475q-3 2-10 4t-11 3l108 360Zm102 0Z",
        Quality:
          "path://M480 985q-11 0-21.963-4.435Q447.073 976.13 438 968L88 618q-8.13-9.073-12.565-20.037Q71 587 71 576q0-11 4.435-22.341Q79.87 542.317 88 534l350-350q9.073-8.87 20.037-12.935Q469 167 480 167q11 0 22.341 4.065Q513.683 175.13 522 184l350 350q8.87 8.317 12.935 19.659Q889 565 889 576q0 11-4.065 21.963Q880.87 608.927 872 618L522 968q-8.317 8.13-19.659 12.565Q491 985 480 985Zm0-60 349-349-349-349-349 349 349 349Zm-30-309h60V376h-60v240Zm30 110q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-150Z",
        MaterialShortage:
          "path://M224.118 895Q175 895 140.5 860.583 106 826.167 106 777H40V316q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235 895 731.118 895 682 895 647.5 860.583 613 826.167 613 777H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224 835q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100 717h22q17-27 43.041-43 26.041-16 58-16t58.459 16.5Q308 691 325 717h294V316H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754 483h-75v148ZM360 527Z",
        Operator:
          "path://M42 936v-92q0-34 16-56.5t45-36.5q54-26 115.5-43T358 691q78 0 139.5 17T613 751q29 14 45 36.5t16 56.5v92H42Zm60-60h512v-32q0-15-8.5-24.5T585 805q-43-19-96-36.5T358 751q-78 0-131 17.5T131 805q-12 5-20.5 14.5T102 844v32Zm256-245q-66 0-108-43t-42-107h-10q-8 0-14-6t-6-14q0-8 6-14t14-6h10q0-40 20-72t52-52v39q0 6 4.5 10.5T295 371q7 0 11-4.5t4-10.5v-52q8-2 22-3.5t27-1.5q13 0 27 1.5t22 3.5v52q0 6 4 10.5t11 4.5q6 0 10.5-4.5T438 356v-39q32 20 51 52t19 72h10q8 0 14 6t6 14q0 8-6 14t-14 6h-10q0 64-42 107t-108 43Zm0-60q42 0 66-25t24-65H268q0 40 24 65t66 25Zm302 124-2-29q-7-4-14.5-9T630 647l-26 14-22-32 26-19q-2-4-2-7.5v-15q0-3.5 2-7.5l-26-19 22-32 26 14 14-10q7-5 14-9l2-29h40l2 29q7 4 14 9l14 10 26-14 22 32-26 19q2 4 2 7.5v15q0 3.5-2 7.5l26 19-22 32-26-14q-6 5-13.5 10t-14.5 9l-2 29h-40Zm20-62q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm88-155-9-35q-10-4-20.5-11T721 417l-44 16-20-35 35-28q-2-5-3.5-11t-1.5-12q0-6 1.5-12t3.5-11l-35-28 20-35 44 16q7-8 17.5-15.5T759 251l9-35h38l9 35q10 3 20.5 10.5T853 277l44-16 20 35-35 28q2 5 3.5 11t1.5 12q0 6-1.5 12t-3.5 11l35 28-20 35-44-16q-7 8-17.5 15T815 443l-9 35h-38Zm19-73q25 0 41.5-16.5T845 347q0-25-16.5-41.5T787 289q-25 0-41.5 16.5T729 347q0 25 16.5 41.5T787 405ZM102 876h512-512Z",
      };

      this.DownTimeChart["ALL_Today_Top5_DownTime_Reason_Machines"].setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          title: {
            text: "ALL_Today_Top5_DownTime_Reason_Machines",
            show: true,
          },
          formatter: function (params) {
            return params[0].name + ": " + params[0].value;
          },
        },
        xAxis: {
          data: [
            "Tooling Down",
            "Equpiment Down",
            "Quality",
            "Material Shortage",
            "No Operator",
          ],
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#e54035",
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
        },
        color: ["#e54035"],
        series: [
          {
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: "-130%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              opacity: 0.5,
            },
            emphasis: {
              itemStyle: {
                opacity: 1,
              },
            },
            data: [200, 100, 100, 100, 100], //fetch the data from the APi when deploy
            z: 20,
          },
          {
            name: "glyph",
            type: "pictorialBar",
            barGap: "-100%",
            symbolPosition: "end",
            symbolSize: 50,
            symbolOffset: [0, "-120%"],
            data: [
              //fetch the data from the APi when deploy
              {
                value: 200,
                symbol: pathSymbols.toolingDown,
                symbolSize: [60, 60],
              },
              {
                value: 100,
                symbol: pathSymbols.EqupimentDown,
                symbolSize: [50, 60],
              },
              {
                value: 100,
                symbol: pathSymbols.Quality,
                symbolSize: [65, 35],
              },
              {
                value: 100,
                symbol: pathSymbols.MaterialShortage,
                symbolSize: [50, 30],
              },
              {
                value: 100,
                symbol: pathSymbols.Operator,
                symbolSize: [50, 35],
              },
            ],
          },
        ],
      });
    },
    fetch_TABLE_DATA() {
      this.$axios
        .get("/api/Top5MachineDown") //This Api only used for testing
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching TABLE_DATA:", error);
        });
    },

    draw_today_detail() {
      this.DownTimeChart["TodayDetail"].setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "Down Reason",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            //needs to fetch from the Api when deploy
            data: [
              { value: 1048, name: "UnknownCycle" },
              { value: 335, name: "ToolingDown" },
              { value: 310, name: "SetUpTime" },
              { value: 251, name: "EquipmentDown" },
              { value: 234, name: "MaterialShortage" },
              { value: 147, name: "NoOperator" },
              { value: 135, name: "ChangeOver" },
              { value: 1500, name: "OverTime" },
              { value: 102, name: "Quality" },
            ],
          },
        ],
      });
    },

    draw_ALL_ChangeOver_Times_and_Elapsed_time_by_10_Today() {
      this.DownTimeChart["ChangeOver10Days"].setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "Day 1",
              "Day 2",
              "Day 3",
              "Day 4",
              "Day 5",
              "Day 6",
              "Day 7",
              "Day 8",
              "Day 9",
              "Day 10",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Down Time",
            type: "line",
            data: [1620, 1732, 1701, 1734, 1690, 1830, 1920, 1990, 1930, 1920],
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
              color: "black",
            },
            itemStyle: {
              color: "black",
            },
          },
          {
            name: "Task Change",
            type: "bar",
            barWidth: 30,
            stack: "ChangeoverTime",
            emphasis: {
              focus: "series",
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120, 1090, 1130, 1120],
          },
          {
            name: "Color Change",
            type: "bar",
            stack: "ChangeoverTime",
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 290, 230, 220, 290, 230, 220],
          },
          {
            name: "Tool Change",
            type: "bar",
            stack: "ChangeoverTime",
            emphasis: {
              focus: "series",
            },
            data: [60, 72, 71, 74, 190, 130, 110, 190, 130, 110],
          },
          {
            name: "Part Change",
            type: "bar",
            stack: "ChangeoverTime",
            emphasis: {
              focus: "series",
            },
            data: [62, 82, 91, 84, 109, 110, 120, 109, 110, 120],
          },
        ],
      });
    },
  },
};
</script>
