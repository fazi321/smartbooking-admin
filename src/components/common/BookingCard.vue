<template>
  <router-link to="/hotel" class="smart-card" v-if="dataItem">
    <div class="image">
      <img :src="require(`../../assets/images/${dataItem.image}`)" />
    </div>
    <div class="detail">
      <h5>{{dataItem.title}}</h5>
      <p>{{dataItem.categoryCount}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "BookingCard",
    props:['dataItem'],
};
</script>

<style scoped>
.smart-card {
  width: 22%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 17px;
  opacity: 1;
}
.smart-card .image img {
  width: 100%;
  border-radius: 17px;
}
.smart-card .detail {
  padding: 5px 0 10px 0;
}
.smart-card .detail h5 {
  font-size: 16px;
  color: #000000;
  opacity: 0.8;
  text-align: center;
  font-weight: normal;
}
.smart-card .detail p {
  font-size: 14px;
  color: #000000;
  opacity: 0.6;
  text-align: center;
}
</style>