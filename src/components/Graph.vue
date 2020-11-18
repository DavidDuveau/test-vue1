<template>
  <div>
    <apexchart
      width="70%"
      type="line"
      :options="options"
      :series="series"
      @change="updateChart, updateTheme"
    ></apexchart>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "VueChart",
  data() {
    return {
      store: store,
      options: {
        chart: {
          id: "vuechart-line",
        },
        xaxis: {
          categories: store.state.clicks,
        },
      },
      series: [
        {
          name: "serie 1",
          data: store.state.clicks,
        },
      ],
    };
  },
  methods: {
    updateChart() {
      const newData = this.series[0].data.map(() => {
        return store.state.clicks;
      });
      this.series = [
        {
          data: newData,
        },
      ];
    },

    updateTheme() {
      this.chartOption = {
        xaxis: {
          categories: store.state.clicks
        },
      };
    },
  },
};
</script>

<style>
.apexcharts-canvas {
  margin: auto;
}
</style>