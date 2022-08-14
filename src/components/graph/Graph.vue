<template>
  <section class="graph">
    <div class="content">
      <h1>Weekly Bookings</h1>
      <p>Calculated last week</p>
    </div>
    <div class="graph-container">
      <div
        class="graph-bar"
        v-for="(d, i) in data"
        :key="i"
        :style="{ height: d.average + '%' }"
      >
        <div
          :class="[
            'graph-range',
            d.average <= 20
              ? 'removeShadow'
              : d.average <= 70
              ? 'graphs-range'
              : '',
            { active: ani },
          ]"
        >
          <span>{{ d.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
  name: "graphView",
  data() {
    return {
      ani: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.ani = true;
    }, 1000);
  },
};
</script>

<style scoped>
.graph {
  background: #fff;
  border-radius: 5px;
  width: 49%;
  padding-bottom: 35px;
}
.graph .content {
  text-align: left;
  padding: 20px 15px;
  line-height: 1.8;
}
.graph .content h1 {
  font-size: 14px;
}
.graph-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-between;
  height: 190px;
  padding: 0px 38px;
}
.graph-bar {
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-right: 10px;
  width: 35px;
}
.graph-range {
  background: #febb12;
  height: 0%;
  width: 100%;
  transition: height 2s;
  position: relative;
}
.graph-range span {
  position: absolute;
  bottom: -22px;
  font-size: 11px;
  left: 0;
}
.graph-range.active {
  height: 100%;
}
.graph-range::before {
  content: "";
  position: absolute;
  top: 5px;
  right: 100%;
  width: 0%;
  transition: width 2s;
  height: 90%;
  background: transparent
    linear-gradient(
      84deg,
      #ffffff00 0%,
      #fcfcfc05 29%,
      #f6f6f616 63%,
      #eaeaea33 51%,
      #dadada5b 65%,
      #c5c5c58f 78%,
      #acacacce 91%,
      #999999 100%
    )
    0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
}
.removeShadow::before  {
  background: unset;
}
.graphs-range::before {
  background: transparent
    linear-gradient(
      77deg,
      #ffffff00 0%,
      #fcfcfc05 29%,
      #f6f6f616 63%,
      #eaeaea33 51%,
      #dadada5b 65%,
      #c5c5c58f 78%,
      #acacacce 91%,
      #999999 100%
    )
    0% 0% no-repeat padding-box;
}
.graph-range.active::before {
  width: 100%;
}
</style>