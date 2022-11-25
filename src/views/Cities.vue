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
        <router-link
          to="#"
          class="category-card"
          v-for="(city, index) in cities"
          :key="index"
        >
          <div class="icon">
            <img class="hotel-icon" src="../assets/images/city-img.png" />
          </div>
          <h6>{{ city.city }}</h6>
          <div class="bottom-icons">
            <h3>{{ city.count }}</h3>
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
    CityModel,
  },
  data() {
    return {
      cityModel: false,
      cities: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        var res = await this.$axios.get("admin/service-by-city");
        if (res) {
          this.cities = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    CityModelShow() {
      this.cityModel = !this.cityModel;
    },
  },
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
  width: 100%;
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
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  width: 17%;
}
.category-main {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  /* justify-content: space-between; */
  padding: 20px 0;
}
.category-card {
  width: 16%;
  margin: 0 0 -12px 0px;
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
