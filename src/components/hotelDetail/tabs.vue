<template>
  <section>
    <div class="detail-tabs">
      <div class="tabs">
        <p class="active">Facilities</p>
        <p>Reviews</p>
        <p>Terms & Conditions</p>
        <p>Map</p>
      </div>
    </div>
    <Facilities/>
  </section>
</template>

<script>
import Facilities from "@/components/hotelDetail/facilities.vue";
export default {
  name: "DetailTabs",
   components: {
    Facilities
  }
};
</script>

<style scoped>
.detail-tabs {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.detail-tabs .tabs {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 11px;
  opacity: 1;
  width: 65%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail-tabs .tabs p {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.4;
  font-size: 12px;
  padding: 15px 30px;
  cursor: pointer;
}
.detail-tabs .tabs .active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
.detail-tabs .tabs p:hover,
.detail-tabs .tabs p:active {
  color: #000000;
  background-color: #febb12;
  border-radius: 12px;
  opacity: 1;
}
</style>