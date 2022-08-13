<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>MY SERVICES</h1>
      </div>
      <div class="service-container">
        <div class="booking-cards">
          <div class="card">
            <MyServicesCard />
          </div>
          <div class="card">
            <MyServicesCard />
          </div>
          <div class="card">
            <MyServicesCard />
          </div>
          <div class="card">
            <MyServicesCard />
          </div>
          <div class="card">
            <MyServicesCard />
          </div>
          <div class="card">
            <MyServicesCard />
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MyServicesCard from "@/components/common/MyServices.vue";

export default {
  name: "MyServices",
  components: {
    DefaultLayout,
    MyServicesCard
  }
};
</script>
<style scoped>
.service-booking {
  padding: 30px 0;
}
.service-booking h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.service-container h3 {
  text-align: left;
  letter-spacing: 0.5px;
  color: #231f20;
  opacity: 0.8;
  font-size: 16px;
  padding: 15px 0;
}
.booking-cards {
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.booking-cards .card {
  width: 49%;
}
</style>
