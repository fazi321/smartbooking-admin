<template>
  <section class="search">
    <div :class="['primary-search', {shadowFull : $route.path == '/'}]">
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/locationsearch.svg" alt="search" />
          </div>
          <div>
            <span>Location</span>
          </div>
        </div>
        <div class="location">
          <input type="text" :placeholder="'Riyadh'" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/house.svg" alt="search" />
          </div>
          <div>
            <span>Type</span>
          </div>
        </div>
        <div>
          <input type="text" :placeholder="'Farms'" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/bed.svg" alt="search" />
          </div>
          <div>
            <span>Rooms</span>
          </div>
        </div>
        <div>
          <input type="number" :placeholder="'2'" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/checkin.svg" alt="search" />
          </div>
          <div>
            <span>Check-in</span>
          </div>
        </div>
        <div>
          <input type="date" placeholder="dd-mm-yyyy" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/checkin.svg" alt="search" />
          </div>
          <div>
            <span>Check-out</span>
          </div>
        </div>
        <div>
          <input type="date" placeholder="dd-mm-yyyy" ref="dateShow" />
        </div>
      </div>
      <!-- block -->
      <div class="search-block search-btn" @click="showModel">
        <div class="head-category">
          <div class="img">
            <img src="./../assets/images/icon-search.svg" alt="search" />
          </div>
          <div>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
    <SearchModel :model="searchModel" />
  </section>
</template>

<script>
import SearchModel from "./models/searchModel.vue";

export default {
  data() {
    return {
      searchModel: false,
    };
  },
  components: {
    SearchModel,
  },
  methods: {
    showModel() {
      this.searchModel = !this.searchModel;
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}

.search .primary-search {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 6px 2px #cfcfcf6b;
  border-radius: 5px;
  padding-left: 18px;
  background: #fff;
}
.shadowFull{
  box-shadow: 0px 2px 4px 0px #cfcfcf6b!important;
}
.search .head-category {
  display: flex;
  align-items: center;
  min-height: 23px;
}
.search .head-category span {
  color: #c5c5c5;
  font-size: 12px;
}
.search .head-category .img {
  width: 16px;
  margin-right: 10px;
}
.search-block .location input {
  margin-top: 24px;
}
.search-block input {
  border: none;
  outline: none;
  color: #000;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
}
.search-block input::placeholder {
  color: #000;
  font-weight: bold;
}
.search-block {
  width: 100px;
  padding: 20px;
}
.search-btn {
  background: #0e4763;
  /* box-shadow: 0px 0px 6px 2px #cfcfcf6b; */
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.search-btn span {
  font-size: 16px !important;
}
.search-btn .img {
  width: 18px !important;
}
</style>