<template>
  <default-layout>
    <section class="container">
      <div class="service-booking">
        <h1>FAVOURITES</h1>
      </div>
      <div class="service-container">
        <section class="filters-container">
          <div class="filter-buttons">
            <div class="filter-option">
              <img src="../assets/images/sort.svg" />
              <select name="sort">
                <option value>Sort by</option>
                <option value>Price low to high</option>
                <option value>Price high to low</option>
                <option value>Discount low to high</option>
              </select>
            </div>
          </div>
        </section>
        <div class="booking-cards favourite">
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
        <div class="pagination-container">
          <paginate
            :page-range="3"
            :margin-pages="2"
            :page-count="10"
            :click-handler="clickCallback"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MyServicesCard from "@/components/common/filterCard.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "FavouritesView",
  components: {
    DefaultLayout,
    MyServicesCard,
    Paginate
  },
  methods: {
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    }
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
  padding: 20px 0 0px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.booking-cards .card {
  width: 47%;
}
.filters-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 0;
}
.filters-container div h6 {
  color: #0e4763;
  font-size: 18px;
}
.filter-buttons {
  display: flex;
}
.filter-buttons .filter-option {
  border: 1px solid #0e4763;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 100%;
}
.filter-buttons .filter-option img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.filter-buttons .filter-option select {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 70%;
  cursor: pointer;
  padding: 10px 0;
}
</style>
