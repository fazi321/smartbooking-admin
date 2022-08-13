<template>
  <div class="container smart-booking">
    <div class="smart-title">
      <h1>EXPLORE MORE ON SMART BOOKINGS</h1>
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
  name: "SmartBooking",
  components: {
    SmartBookingCard,
  },
  data() {
    return {
      smartBooking: [
        { title: "Apartments", image: "apartment.svg", categoryCount: "681" },
        { title: "Hotels", image: "hotel.svg", categoryCount: "681" },
        { title: "Camps", image: "camps.svg", categoryCount: "681" },
        { title: "Resorts", image: "resort.png", categoryCount: "681" },
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