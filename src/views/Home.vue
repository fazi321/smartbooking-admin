<template>
  <default-layout>
    <HeaderProfile />
    <HomeCards />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
import HomeCards from "@/components/HomeCards.vue";
export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    HeaderProfile,
    HomeCards,
  },
};
</script>

<style scoped>
</style>