<template>
  <section class="side-bar">
    <div class="inner-side">
      <section class="logo-container">
        <Logo />
      </section>
      <section class="primary">
        <Menu />
      </section>
    </div>
  </section>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
export default {
  components: {
    Logo,
    Menu
  }
};
</script>

<style scoped>
.side-bar {
  width: 20%;
  background: #fff;
  padding: 10px;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.side-bar .inner-side {
  position: fixed;
  width: 20%;
  /* overflow-y: scroll; */
  bottom: 0;
  top: 0;
}
.inner-side .primary{
  overflow-y: scroll;
  height: 600px;
}
.inner-side .primary::-webkit-scrollbar {
  width: 2px;
}

.inner-side::-webkit-scrollbar-track {
  background: transparent;
}
.inner-side::-webkit-scrollbar-thumb {
  background-color: transparent ;
}

</style>