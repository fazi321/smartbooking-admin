<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>EXPLORE CITIES</h1>
    </div>
    <div class="card-container">
      <SmartBookingCard
        v-for="(item, index) in smartBooking"
        :dataItem="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import SmartBookingCard from "@/components/common/BookingCard.vue";
export default {
  name: "ExploreCity",
  components: {
    SmartBookingCard,
  },
  data() {
    return {
      smartBooking: [
        { title: "Jeddah", image: "jeddah.png", categoryCount: "681" },
        { title: "Medina", image: "medina.png", categoryCount: "681" },
        { title: "Riyadh", image: "riyadh.png", categoryCount: "681" },
        { title: "Mecca", image: "mecca.png", categoryCount: "681" },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0;
}
.smart-booking {
  padding: 10px 0;
}

</style>