<template>
  <div id="OEECharts" :style="{height: '300px'}"></div>
  
</template>

<script setup>

  import{
    onMounted
  } from "vue";
  import * as Echarts from 'echarts'
  import { color } from "echarts/core";
  onMounted(() => {
    let OEECharts = Echarts.init(document.getElementById("OEECharts"));
    OEECharts.setOption({
      textStyle: {

        color: '#FFFFFF'

      },

      title: {
        text: "test",
        color: '#FFFFFF'
      },

      tooltip:{},

      xAxis: {
        data: ["12-3", "12-4", "12-5", "12-6", "12-7"],
      },

      yAxis: {},

      series: [{
        name: "test",
        type: "line",
        data: [5,20,36,10,10,20],
      },],

    });
    window.onresize = function(){
      OEECharts.resize();
    };
  })

</script>
