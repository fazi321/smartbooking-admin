<template>
  <router-link to="/hotel-detail" class="filter-card">
    <div class="image">
      <img src="../../assets/images/hotel-img.svg" />
    </div>
    <div class="card-detail">
      <div class="heading">
        <h5>Lorem Ipsum Farm</h5>
        <!-- <div class="wish">
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path
              fill="#949494"
              d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"
            />
          </svg>
        </div> -->
      </div>
      <p>Riyadh, KSA</p>
      <div class="rating">
        <span class="star">&starf;</span>
        <span class="star">&starf;</span>
        <span class="star">&starf;</span>
        <span class="star">&starf;</span>
        <span class="star gray">&starf;</span>
        <span class="rating-counter">(381)</span>
      </div>
      <div class="sar">
        <h6>SAR 120</h6>
        <p>Per Night</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BookCard"
};
</script>

<style scoped>
.filter-card {
  display: flex;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px;
}
.filter-card .image {
  width: 30%;
}
.filter-card .image img {
  width: 100%;
}
.filter-card .card-detail {
  padding: 20px;
  width: 65%;
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
}
.filter-card .card-detail .heading .wish {
  box-shadow: 0px 0px 10px #00000012;
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
  padding-top: 10px;
}
.filter-card .card-detail .sar {
  display: flex;
  align-items: center;
  padding-top: 10px;
}
.filter-card .card-detail .sar h6 {
  text-align: left;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-size: 18px;
  margin-right: 10px;
  font-weight: normal;
}
.filter-card .card-detail .sar p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 0.4;
  font-size: 12px;
  padding-top: 4px;
  font-weight: normal;
}
.rating {
  text-align: left;
  padding: 5px 0;
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