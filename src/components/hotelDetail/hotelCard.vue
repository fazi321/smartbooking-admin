<template>
  <section class="container">
    <div class="hotel-wrapper">
      <div class="title">
        <h2>Lorem Ipsum Hotel</h2>
      </div>
      <div class="overview">
        <div class="icon">
          <img src="../../assets/images/place.svg" alt />
          <p>Riyadh</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/star.svg" alt />
          <p>4.5 (23)</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/sq.svg" alt />
          <p>2400 sq2</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/family.svg" alt />
          <p>For Families</p>
        </div>
        <div class="icon">
          <img src="../../assets/images/glob.svg" alt />
          <p>www.lorem.com</p>
        </div>
      </div>
      <div class="hotel-images">
        <div class="big-img">
          <img src="../../assets/images/hotel-big.png" alt />
        </div>
        <div class="small-images">
          <div>
            <img src="../../assets/images/hotel-mid1.png" alt />
            <img src="../../assets/images/hotel-mid2.png" alt />
          </div>
          <div>
            <img src="../../assets/images/hotel-mid3.png" alt />
            <img src="../../assets/images/hotel-mid4.png" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HotelCard"
};
</script>

<style scoped>
.hotel-wrapper .title {
  padding: 15px 0;
}
.hotel-wrapper .title h2 {
  text-align: left;
  letter-spacing: 0.6px;
  color: #231f20;
  opacity: 0.8;
  font-size: 18px;
  padding-top: 10px;
}
.overview {
  display: flex;
  padding: 20px 0;
}
.overview .icon {
  display: flex;
  align-items: center;
  margin-right: 40px;
}
.overview .icon img {
  height: 20px;
  width: 20px;
  margin-right: 15px;
}
.overview .icon p {
  text-align: center;
  letter-spacing: 0px;
  color: #0e4763;
  opacity: 1;
  font-size: 14px;
}
.hotel-images {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.hotel-images .big-img {
  width: 38%;
}
.hotel-images .big-img img {
  height: 339px;
}
.small-images {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.small-images div {
  width: 48.5%;
}
.small-images div img {
  height: 160px;
  margin-bottom: 15px;
}
</style>
