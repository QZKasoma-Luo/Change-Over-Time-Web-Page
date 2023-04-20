<template>
  <div>
    <el-card class="box-card">
      <div>Information about 24-hour output</div>
      <br />
      <div>No. Of Equipment Used:</div>
      <br />
      <div>No. Of Moulds Used:</div>
      <br />
      <div>Qty Of Parts Produced:</div>
    </el-card>
    <el-card class="box-card">
      <div ref="niceOutputIcon" style="display: inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="128px"
          height="128px"
        >
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Ca"
            x1="32"
            x2="32"
            y1="7"
            y2="55.84"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Ca)"
            d="M54.996,37.446c-0.974-1.03-2.112-1.836-3.351-2.414C51.879,33.706,52,32.355,52,31 C52,18.317,41.683,8,29,8S6,18.317,6,31s10.317,23,23,23c3.32,0,6.504-0.692,9.485-2.047C40.504,54.421,43.57,56,47,56 c6.065,0,11-4.935,11-11C58,42.18,56.934,39.497,54.996,37.446z M29,52C17.421,52,8,42.579,8,31s9.421-21,21-21s21,9.421,21,21 c0,1.126-0.095,2.247-0.272,3.352C48.848,34.128,47.936,34,47,34c-6.065,0-11,4.935-11,11c0,1.91,0.491,3.706,1.35,5.273 C34.719,51.418,31.916,52,29,52z M47,54c-4.963,0-9-4.037-9-9s4.037-9,9-9c2.5,0,4.824,1.001,6.543,2.819 C55.127,40.498,56,42.692,56,45C56,49.963,51.963,54,47,54z"
          />
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Cb"
            x1="48.5"
            x2="48.5"
            y1="7"
            y2="55.84"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Cb)"
            d="M52.793 41.793L47 47.586 44.207 44.793 42.793 46.207 47 50.414 54.207 43.207z"
          />
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Cc"
            x1="20.041"
            x2="20.041"
            y1="7"
            y2="55.84"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Cc)"
            d="M11.082,24.667l1.885,0.666c1.695-4.796,5.57-8.671,10.367-10.366 C25.15,14.325,27.057,14,29,14v-2c-2.171,0-4.302,0.364-6.332,1.082C17.307,14.976,12.976,19.307,11.082,24.667z"
          />
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Cd"
            x1="20"
            x2="20"
            y1="24.25"
            y2="34.27"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Cd)"
            d="M20 25A4 4 0 1 0 20 33A4 4 0 1 0 20 25Z"
          />
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Ce"
            x1="38"
            x2="38"
            y1="24.25"
            y2="34.27"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Ce)"
            d="M38 25A4 4 0 1 0 38 33A4 4 0 1 0 38 25Z"
          />
          <linearGradient
            id="npWyVMH_SNRmaD~1Sft4Cf"
            x1="29"
            x2="29"
            y1="34.875"
            y2="45.128"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#npWyVMH_SNRmaD~1Sft4Cf)"
            d="M34,36H24c-0.552,0-1,0.448-1,1v1c0,3.314,2.686,6,6,6s6-2.686,6-6v-1 C35,36.448,34.552,36,34,36z"
          />
        </svg>
      </div>
      <p>24-hour Output</p>
      <div ref="output" style="display: inline-block">
        <countTo
          :startVal="0"
          :endVal="999999"
          :duration="5000"
          class="countToStyle"
        ></countTo>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="Scrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="128px"
          height="128px"
        >
          <linearGradient
            id="fbsFAcPTNuInJg1GESjdha"
            x1="32"
            x2="32"
            y1="7.001"
            y2="56.998"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#fbsFAcPTNuInJg1GESjdha)"
            d="M49.757,56.999c-0.768,0-1.536-0.292-2.121-0.877L32,40.485L16.364,56.121 c-1.17,1.169-3.073,1.169-4.243,0l-4.243-4.243c-1.17-1.17-1.17-3.073,0-4.243L23.515,32L7.879,16.364 c-1.17-1.17-1.17-3.073,0-4.243l4.243-4.243c1.169-1.17,3.072-1.171,4.243,0L32,23.515L47.636,7.879c1.17-1.171,3.073-1.17,4.243,0 l4.243,4.243c1.17,1.17,1.17,3.073,0,4.243L40.485,32l15.636,15.636c1.17,1.17,1.17,3.073,0,4.243l-4.243,4.243 C51.293,56.706,50.525,56.999,49.757,56.999z M32,37.657l17.05,17.05c0.39,0.39,1.025,0.389,1.415,0l4.243-4.243 c0.39-0.39,0.39-1.024,0-1.415L37.657,32l17.05-17.05c0.39-0.39,0.39-1.024,0-1.415l-4.243-4.243c-0.39-0.39-1.025-0.391-1.415,0 L32,26.343L14.95,9.293c-0.39-0.39-1.025-0.389-1.415,0l-4.243,4.243c-0.39,0.39-0.39,1.024,0,1.415L26.343,32L9.293,49.05 c-0.39,0.39-0.39,1.024,0,1.415l4.243,4.243c0.389,0.389,1.024,0.39,1.415,0L32,37.657z"
          />
          <linearGradient
            id="fbsFAcPTNuInJg1GESjdhb"
            x1="32"
            x2="32"
            y1="11.94"
            y2="52.06"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#fbsFAcPTNuInJg1GESjdhb)"
            d="M52.061 14.061L49.939 11.939 32 29.879 14.061 11.939 11.939 14.061 29.879 32 11.939 49.939 14.061 52.061 32 34.121 49.939 52.061 52.061 49.939 34.121 32z"
          />
        </svg>
      </div>
      <p>Scrap</p>
      <div ref="Scrap" style="display: inline-block">
        <countTo
          :startVal="0"
          :endVal="11111"
          :duration="5000"
          class="countToStyle"
        ></countTo>
      </div>
    </el-card>

    <div class="gague-container">
      <el-col :span="8">
        <div ref="currentHourYield" class="gague-container"></div>
      </el-col>
      <el-col :span="8">
        <div ref="24HourYield" class="gague-container"></div>
      </el-col>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="rank" label="#" width="180"> </el-table-column>
      <el-table-column prop="Machine" label="Machine" width="180">
      </el-table-column>
      <el-table-column prop="partNumber" label="part Number" width="180">
      </el-table-column>
      <el-table-column prop="ZAM" label="0AM"> </el-table-column>
      <el-table-column prop="OAM" label="1AM"> </el-table-column>
      <el-table-column prop="TAM" label="2AM"> </el-table-column>
      <el-table-column prop="ThAM" label="3AM"> </el-table-column>
      <el-table-column prop="FouAM" label="4AM"> </el-table-column>
      <el-table-column prop="FiAM" label="5AM"> </el-table-column>
      <el-table-column prop="SixAM" label="6AM"> </el-table-column>
      <el-table-column prop="SevAM" label="7AM"> </el-table-column>
      <el-table-column prop="EAM" label="8AM"> </el-table-column>
      <el-table-column prop="NAM" label="9AM"> </el-table-column>
      <el-table-column prop="TenAM" label="10AM"> </el-table-column>
      <el-table-column prop="EleAM" label="11AM"> </el-table-column>

      <el-table-column prop="TwPM" label="0PM"> </el-table-column>
      <el-table-column prop="OPM" label="1PM"> </el-table-column>
      <el-table-column prop="TPM" label="2PM"> </el-table-column>
      <el-table-column prop="ThPM" label="3PM"> </el-table-column>
      <el-table-column prop="FouPM" label="4PM"> </el-table-column>
      <el-table-column prop="FivPM" label="5PM"> </el-table-column>
      <el-table-column prop="SixPM" label="6PM"> </el-table-column>
      <el-table-column prop="SevPM" label="7PM"> </el-table-column>
      <el-table-column prop="EPM" label="8PM"> </el-table-column>
      <el-table-column prop="NPM" label="9PM"> </el-table-column>
      <el-table-column prop="TenPM" label="10PM"> </el-table-column>
      <el-table-column prop="ElePM" label="11PM"> </el-table-column>
    </el-table>
  </div>
</template>
<style>
.countToStyle {
  font-size: 48px;
}
.gague-container {
  height: 300px;
}
.box-card {
  width: 300px;
  display: inline-block;
  height: 300px;
}
</style>
<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      //startVal and endVal will be used for countTo once it plugs in to the Api
      startVal: [],
      endVal: [],
      hourlyChart: {},
      tableData: [],
    };
  },
  mounted() {
    this.initChart("currentHourYield");
    this.initChart("24HourYield");
    this.updateGagueChart();
    this.fetchTOOLS_TABLE_DATA();
  },
  methods: {
    initChart(refName) {
      // if object ref does not exist, create the charts
      if (!this.hourlyChart[refName]) {
        const dom = this.$refs[refName];
        this.hourlyChart[refName] = this.$echarts.init(dom, {
          renderer: "svg",
        });
      }
    },
    updateGagueChart() {
      try {
        Promise.all([
          this.$axios.get("/api/OEEOverAll"), //reused the link of OEEOverall Api
          this.$axios.get("/api/OEEOverAll"),
        ]) //fetch 5 data once from API
          .then((response) => {
            response.forEach((response, index) => {
              //display gauags data by the order of fetch them
              let returnData = parseFloat(JSON.parse(response.data));
              if (!isNaN(returnData)) {
                switch (index) {
                  case 0:
                    this.draw_current_hour_yield(returnData);
                    break;
                  case 1:
                    this.draw_24_hour_yield(returnData);
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
    draw_current_hour_yield(initValue) {
      this.hourlyChart["currentHourYield"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "Current Hour Yield",
          textbaseline: "center",
          top: "230",
          left: "80",
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
            data: [{ value: initValue }],
          },
        ],
      });
    },
    draw_24_hour_yield(initValue) {
      this.hourlyChart["24HourYield"].setOption({
        progressive: 2000, // 异步渲染每帧渲染的数据量
        progressiveThreshold: 3000, // 异步渲染阈值
        title: {
          show: true,
          text: "24 Hour Yield",
          textbaseline: "center",
          top: "230",
          left: "110",
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
            data: [{ value: initValue }],
          },
        ],
      });
    },
    fetchTOOLS_TABLE_DATA() {
      this.$axios
        .post("/api/tableDataHourly")
        .then((response) => {
          const data = response.data;
          for (let i = 0; i < data.length; i++) {
            data[i].rank = i + 1;
          }
          this.tableData = data;
        })
        .catch((error) => {
          console.error("Error fetching tableDataHourly:", error);
        });
    },
  },
};
</script>
