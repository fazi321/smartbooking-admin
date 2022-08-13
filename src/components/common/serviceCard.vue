<template>
  <router-link to="/service-details">
    <section class="filter-card">
    <div class="image">
      <img src="../../assets/images/hotel-img.svg" />
    </div>
    <div class="card-detail">
      <div class="heading">
        <h5>Lorem Ipsum Farm</h5>
      </div>
      <p>Riyadh, KSA</p>

      <div class="sar">
        <h6>Bookings:</h6>
        <p>3</p>
      </div>
    </div>
  </section>
  </router-link>
</template>

<script>
export default {
  name: "ServiesCard"
};
</script>

<style scoped>
.filter-card {
  display: flex;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 12px;
  opacity: 1;
  margin-bottom: 20px;
  cursor: pointer;
}
.filter-card .image {
  width: 30%;
  display: flex;
}
.filter-card .image img {
  width: 100%;
}
.filter-card .card-detail {
  padding: 20px 25px;
  width: 60%;
}
.filter-card .card-detail .heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.filter-card .card-detail .heading h5 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
}
.filter-card .card-detail .heading .wish {
  box-shadow: 0px 0px 3px 2px #0000000d;
  opacity: 1;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.filter-card .card-detail .heading svg {
  width: 30px;
}
.filter-card .card-detail p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  font-size: 12px;
  padding: 15px 0;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 5px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 18px;
  margin-right: 10px;
  font-weight: normal;
}
.filter-card .card-detail .sar p {
  color: #febb12;
  font-size: 18px;
  padding: 0px;
  font-weight: normal;
}
.rating {
  text-align: left;
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.rating .star {
  font-size: 28px;
  color: #fdc350;
  margin-right: 5px;
  cursor: pointer;
  line-height: 1;
}
.rating .gray {
  color: #efefef !important;
}
.rating .rating-counter {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  font-size: 14px;
}
</style>