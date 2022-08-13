<template>
  <section class="container hero-slider">
    <carousel
      :settings="settings"
      :autoplay="4000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
    >
      <slide :key="1">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <slide :key="2">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <slide :key="3">
        <router-link to="/">
          <img src="../../assets/images/hero-banner.png" />
          <div class="layout"></div>
        </router-link>
      </slide>
      <template #addons>
        <navigation>
          <template #next>
            <img src="../../assets/images/right-arrow.png" />
          </template>
          <template #prev>
            <img src="../../assets/images/arrow-left.png" />
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
    <SearchHeader />
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import SearchHeader from "@/components/SearchHeader.vue";
export default {
  name: "HeroSlider",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    SearchHeader,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style scoped>
.hero-slider {
  padding: 10px 0;
  min-height: 200px;
  position: relative;
  margin-bottom: 30px;
  margin-top: 10px;
}
.hero-slider .search {
  position: absolute;
  right: 0;
  bottom: -9px;
  left: 0;
}
.hero-slider .primary-search {
  box-shadow: 0px 4px 8px -3px #cfcfcf6b!important;
}
.layout {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#9f9f9f21, #00000094);
  border-radius: 25px;
  height: 170px;
}
.carousel__slide {
  position: relative;
  height: 440px;
  border-radius: 16px;
  overflow: hidden;
}
.carousel__slide img {
  width: 100%;
}
</style>