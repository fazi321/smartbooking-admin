<template>
  <router-link to="" class="what-card">
    <div class="image">
      <img :src="require(`../../assets/images/${dataItem.image}`)" />
    </div>
    <div class="detail">
      <h5>{{dataItem.title}}</h5>
      <p>{{dataItem.text }} </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props:['dataItem']
};
</script>

<style scoped>
.what-card {
    display: flex;
    align-items: center;
    width: 30%;
    margin: 10px 0 25px 0;
}
.what-card .image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #0000001a;
  opacity: 1;
  margin-right: 20px;
}
.what-card .image img{
    width: 30px;
}
.what-card .detail {
  padding: 5px 0 10px 0;
  line-height: 1.8;
  width: 80%;
}
.what-card .detail h5 {
  font-size: 14px;
  color: #000000;
  opacity: 0.8;
  text-align: left;
  /* line-height: 1.5; */
}
.what-card .detail p {
  font-size: 12px;
  color: #000000;
  opacity: 0.6;
  text-align: left;
}
</style>