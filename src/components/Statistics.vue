<template>
  <div class="header-content">
    <h1>See your Statistics</h1>
  </div>
  <div class="graphs">
    <StatisticsGraph :data="monthlyData" />
    <StatisticsGraph :data="yearlyData" />
  </div>
</template>

<script>
import StatisticsGraph from "./graph/Graph.vue";
export default {
  name: "StatisticsView",
  data() {
    return {
      monthlyData: [
        { name: "Monday", average: "100" },
        { name: "Tuesday", average: "80" },
        { name: "Wednesday", average: "30" },
        { name: "Thursday", average: "60" },
        { name: "Friday", average: "50" },
        { name: "Saturday", average: "60" },
        { name: "Sunday", average: "70" },
      ],
      yearlyData: [
        { name: "Jan", average: "100" },
        { name: "Feb", average: "50" },
        { name: "Mar", average: "40" },
        { name: "Apr", average: "30" },
        { name: "May", average: "80" },
        { name: "Jun", average: "60" },
        { name: "Jul", average: "70" },
        { name: "Aug", average: "100" },
        { name: "Sep", average: "50" },
        { name: "Oct", average: "40" },
        { name: "Nov", average: "30" },
        { name: "Dec", average: "80" },
      ],
    };
  },
  components: {
    StatisticsGraph,
  },
};
</script>

<style scoped>
.graphs {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.header-content h1 {
  text-align: left;
  font-size: 16px;
  margin: 0px 0 20px 0;
}
</style>