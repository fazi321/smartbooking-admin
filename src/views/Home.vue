<template>
  <default-layout>
    <HeaderProfile />
    <HomeCards />
    <Statistics />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
import HomeCards from "@/components/HomeCards.vue";
import Statistics from "@/components/Statistics.vue";
export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    HeaderProfile,
    HomeCards,
    Statistics,
  },
};
</script>

<style scoped>
</style>