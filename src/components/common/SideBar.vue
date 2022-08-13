<template>
  <div class="side-bar">
    <section class="logo-container">
      <Logo />
    </section>
    <section>
      <Menu />
    </section>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
export default {
  components: {
    Logo,
    Menu,
  },
};
</script>

<style scoped>
.side-bar {
  width: 20%;
  background: #fff;
  padding:10px;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>