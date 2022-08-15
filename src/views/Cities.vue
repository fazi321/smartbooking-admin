<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Cities</h2>
        <p>You can see all the citiess here. You can also add new ciities</p>
      </div>
      <div class="add-btn">
        <button @click="CityModelShow">Add New City</button>
      </div>
      <div class="category-main">
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img class="hotel-icon" src="../assets/images/city-img.png" />
          </div>
          <h6>Mecca</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Madina</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Riyadh</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Dammam</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Taif</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Abha</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Chalets</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Tabuk</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
        <router-link to="/booking-details" class="category-card">
          <div class="icon">
            <img src="../assets/images/city-img.png" />
          </div>
          <h6>Dhahran</h6>
          <div class="bottom-icons">
            <h3>2447</h3>
          </div>
        </router-link>
      </div>
      <CityModel v-if="cityModel" />
    </section>
  </default-layout>
</template>

<script>
import CityModel from "@/components/Models/CityModel.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "CityView",
  components: {
    DefaultLayout,
    CityModel
  },
  data() {
    return {
      cityModel: false
    };
  },
  methods: {
    CityModelShow() {
      this.cityModel = !this.cityModel;
    }
  }
};
</script>

<style scoped>
.top-heading {
  line-height: 1.8;
}
.top-heading h2 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 18px;
}
.top-heading p {
  text-align: left;
  letter-spacing: 0px;
  color: #808183;
  font-size: 12px;
}
.add-btn {
  width: 98%;
  display: flex;
  justify-content: flex-end;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 11px;
  background: #febb12;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
}
.category-main {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  padding: 20px 0;
}
.category-card {
  width: calc(16% - 2px);
  margin-right: 23px;
  margin-bottom: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}
.category-card .icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-card .icon img {
  width: 100%;
  height: 100%;
}
.category-card h6 {
  letter-spacing: 0px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: center;
  padding: 15px 0 10px 0;
  font-weight: normal;
}
.bottom-icons {
  display: flex;
  justify-content: space-between;
}
.bottom-icons h3 {
  letter-spacing: 0px;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
}
</style>