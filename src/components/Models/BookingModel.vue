<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Booking Details</h2>
      </div>
      <div class="service-details">
        <h3>Customer Details</h3>
        <div>
          <p>Name</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Mobile</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Email</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Address</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Nationality</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Date of Birth</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Gender</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div class="service-details booking-detail">
        <h3>Booking Details</h3>
        <div>
          <p>Check In Date</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Check out Date</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Check In Time</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Check out Time</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Service Name</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Vendor Name</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Service Address</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div class="id-image">
        <div class="add-btn">
          <button>Close</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookingDetailModel",
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$parent.$parent.bookingModel = false;
    }
  }
};
</script>

<style scoped>
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.primary-login {
  width: 500px;
  background: #fff;
  height: 550px;
  padding: 25px 25px 0 25px;
  border-radius: 20px;
  position: relative;
  overflow: scroll;
}
.primary-login::-webkit-scrollbar {
  display: none;
}
.primary-login {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.close-icon {
  cursor: pointer;
  top: 26px;
  position: absolute;
  right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 99;
}
.booking-detail {
  padding: 0 !important;
}
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 20px;
}
.service-details {
  padding: 25px 0 0px 0;
}
.service-details h3 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 15px;
  padding: 10px 0 10px 0;
}
.service-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.service-details div p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 14px;
}
.id-image {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.id-image div h3 {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  font-size: 14px;
  opacity: 0.7;
}
.id-image div .placeholder-img {
  width: 250px;
  height: 130px;
  background: #eee;
  margin: 15px 0;
  border-radius: 11px;
}
.add-btn {
  width: 50%;
  margin-top: 20px;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 32px;
  background: #febb12;
  color: #fff;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>