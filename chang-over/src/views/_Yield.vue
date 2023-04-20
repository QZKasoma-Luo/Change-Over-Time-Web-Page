<template>
  <div>
    <el-alert
      title="All the data displayed is for the purpose of testing the Dashboard and Api, and the data does not contain any meaning. If you find that the test data is similar or identical to your or your organization's data, it is purely coincidental. Secondly, please don't believe any information on the test data, all test data are fabricated."
      type="error"
      effect="dark"
    >
    </el-alert>
    <div id="Yield_gague_section">
      <!-- no idea why &nbsp cause the error of missing-semicolon-after-character-reference, but it works on the web -->
      <h3>&nbsp ALL - Top 5 Customer Yield</h3>
      <el-col :span="8">
        <div ref="BrandA" id="BrandA" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="BrandB" id="BrandB" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="BrandC" id="BrandC" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="BrandD" id="BrandD" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="AllBrand" id="AllBrand" class="Yield_charts"></div>
      </el-col>
    </div>
    <div id="Yield_bar_section">
      <el-col :span="8">
        <div ref="yieldMonth" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="yieldWeek" class="Yield_charts"></div>
      </el-col>
      <el-col :span="8">
        <div ref="yieldDay" class="Yield_charts"></div>
      </el-col>
    </div>
  </div>
</template>
<style>
.Yield_charts {
  height: 300px;
}
#Yield_gague_section {
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
      yield_graph: {},
      loading: true,
    };
  },
  mounted() {
    this.initChart("BrandA");
    this.initChart("BrandB");
    this.initChart("BrandC");
    this.initChart("BrandD");
    this.initChart("AllBrand");
    this.initChart("yieldMonth");
    this.initChart("yieldWeek");
    this.initChart("yieldDay");
    this.updateYieldGague();
    this.draw_All_Week_yield();
    this.draw_All_Month_yield();
    this.draw_All_Day_yield();
  },
  methods: {
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.yield_graph[refName]) {
        const dom = this.$refs[refName];
        this.yield_graph[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    updateYieldGague() {
      try {
        Promise.all([
          this.$axios.get("/api/OEEOverAll"), //reused the link of OEEOverall Api, will change
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
                    this.draw_BrandA(returnData);
                    break;
                  case 1:
                    this.draw_BrandB(returnData);
                    break;
                  case 2:
                    this.draw_BrandC(returnData);
                    break;
                  case 3:
                    this.draw_BrandD(returnData);
                    break;
                  case 4:
                    this.draw_AllBrand(returnData);
                    break;
                }
              }
            });
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setTimeout(this.updateYieldGague, 5000); //fetch the least data from the API per 5sec by using setTimeout
          });
      } catch (error) {
        console.error(error);
      }
    },
    draw_BrandA(initialValue) {
      this.yield_graph["BrandA"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Brand A",
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
            data: [{ value: initialValue, name: "BrandA" }],
          },
        ],
      });
    },
    draw_BrandB(initialValue) {
      this.yield_graph["BrandB"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Brand B",
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
            data: [{ value: initialValue, name: "BrandB" }],
          },
        ],
      });
    },
    draw_BrandC(initialValue) {
      this.yield_graph["BrandC"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Brand C",
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
            data: [{ value: initialValue, name: "BrandC" }],
          },
        ],
      });
    },
    draw_BrandD(initialValue) {
      this.yield_graph["BrandD"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Brand D",
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
            data: [{ value: initialValue, name: "BrandD" }],
          },
        ],
      });
    },
    draw_AllBrand(initialValue) {
      this.yield_graph["AllBrand"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "All Brand",
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
            data: [{ value: initialValue, name: "AllBrand" }],
          },
        ],
      });
    },
    draw_All_Month_yield() {
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
          text: "All_Running_week_rate", //the graph and the title will swap every 3 sec to other brand, will do the functionilty later
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
      this.yield_graph["yieldMonth"].setOption(option);

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
        self.yield_graph["yieldMonth"].setOption({
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

    draw_All_Week_yield() {
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
      this.yield_graph["yieldWeek"].setOption(option);

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
        self.yield_graph["yieldWeek"].setOption({
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

    draw_All_Day_yield() {
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
      this.yield_graph["yieldDay"].setOption(option);

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
        self.yield_graph["yieldDay"].setOption({
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
