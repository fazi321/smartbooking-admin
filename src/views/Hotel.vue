<template>
   <div>
    <Header/>
    <Hotel/>
   </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Hotel from "@/components/hotel/index.vue";


export default {
  name: "AparmentView",
  components: {
    Header,
    Hotel,
   
  },
  async mounted() {
    const resp = await this.$axios.get('/api/v1/category',{})
    console.log(resp)
  },
};
</script>
