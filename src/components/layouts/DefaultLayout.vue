<template>
  <div>
    <Header />
    
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../header/index.vue";
import Footer from "../footer/AppFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,

  }
};
</script>
