<template>
  <section>
    <div class="container primary-container">
      <SideBar />
      <section class="pages-slide">
        <slot />
      </section>
    </div>
  </section>
</template>

<script>
import SideBar from "../common/SideBar.vue";
export default {
  name: "DefaultLayout",
  components: { SideBar },
};
</script>
<style scoped>
.primary-container {
  display: flex;
}
.pages-slide{
  background: #F4F7FA;
  width: 80%;
  padding:20px;
}
</style>
