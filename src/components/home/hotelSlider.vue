<template>
  <section class="container hotel-slider">
    <carousel
      :settings="settings"
      :autoplay="false"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
    >
      <slide :key="1">
        <router-link to="/" class="hotel-image">
          <img src="../../assets/images/hotel1.svg" />
        </router-link>
      </slide>
      <slide :key="2">
        <router-link to="/" class="hotel-image">
          <img src="../../assets/images/hotel2.svg" />
        </router-link>
      </slide>
      <slide :key="3">
        <router-link to="/" class="hotel-image">
          <img src="../../assets/images/hotel1.svg" />
        </router-link>
      </slide>

      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "HotelSlider",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2.3,
      snapAlign: "center"
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center"
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.3,
        snapAlign: "start"
      }
    }
  })
};
</script>

<style scoped>
.carousel__slide {
  position: relative;
}
.hotel-slider {
  padding: 30px 0;
  min-height: 200px;
}
/* .hotel-image img {
  width: 500px;
} */
</style>