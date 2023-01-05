<template>
  <section>
    <div class="container primary-container">
      <SideBar />
      <section :class="['pages-slide',{'set-height': $route.path == '/add-user'}]">
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
  width: 76%;
  padding:20px 20px 45px 20px;
  height: 100vh;
}
.set-height{
  height: auto;
}
</style>
