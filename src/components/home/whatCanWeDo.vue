<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>WHAT CAN WE DO FOR YOU?</h1>
    </div>
    <div class="card-container">
      <WhatWeDo v-for="(item, index) in WhatWeDo" :dataItem="item" :key="index" />
    </div>
  </div>
</template>

<script>
import WhatWeDo from "@/components/common/WeDo.vue";
export default {
  name: "WhatCanWeDo",
  components: {
    WhatWeDo
  },
  data() {
    return {
      WhatWeDo: [
        { title: "Instant Reservation", image: "reserve.svg", text: "Your reservation is 100% guaranteed." },
        { title: "Customer service", image: "customer.svg", text: "We support you throughout the week" },
        { title: "Advanced and intelligent search", image: "search.svg", text: "All kinds of search at your fingertips" },
        { title: "Safe Payment Methods", image: "payment.svg", text: "Multiple and secure payment methods" },
        { title: "Trusted Reviews", image: "review.svg", text: "Certified reviews and comments" },
        { title: "Photos and videos", image: "photo.svg", text: "See photos from your place" }
      ]
    };
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
}
.smart-booking {
  padding: 10px 0;
}
</style>