<template>
  <router-link to="/hotel-detail" class="filter-card">
    <div class="image">
      <img src="../../assets/images/hotel-img.svg" />
    </div>
    <div class="card-detail">
      <div class="heading">
        <h5>Lorem Ipsum Hotel</h5>
        <div class="wish">
          <img src="../../assets/images/delete.svg" />
        </div>
      </div>
      <p>The ulitimate 5 star hotel</p>
      <p>Riyadh, KSA</p>
      <p>
        <span>2 Rooms</span>,
        <span>2 Bathrooms</span>
      </p>
      <div class="sar">
        <h6>SAR 120</h6>
        <p>Per Night</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "FilterCard",
};
</script>

<style scoped>
.filter-card {
  display: flex;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 18px;
  cursor: pointer;
}
.filter-card .image {
  width: 28%;
  padding-left: 10px;
}
.filter-card .image img {
  width: 100%;
}
.filter-card .card-detail {
  padding: 20px;
  width: 60%;
  position: relative;
}
.filter-card .card-detail .heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.filter-card .card-detail .heading h5 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 16px;
  font-weight: 600;
}
.filter-card .card-detail .heading .wish {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 24px;
  top: 35%;
}
.filter-card .card-detail .heading img {
  width: 40px;
}
.filter-card .card-detail p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
  padding-top: 12px;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 15px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-size: 18px;
  margin-right: 20px;
  font-weight: 600;
}
.filter-card .card-detail .sar p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
  padding-top: 4px;
  font-weight: normal;
}
</style>