<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Details</h2>
      </div>
      <div class="service-details">
        <div>
          <p>Customer Name</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Booking ID</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Customer ID</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Vendor ID</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Booking Date</p>
          <p>24/05/2022</p>
        </div>
        <div>
          <p>Booking Time</p>
          <p>11:00 PM</p>
        </div>
        <div>
          <p>Email</p>
          <p>loremipsum@gmail.com</p>
        </div>
        <div>
          <p>Mobile Number</p>
          <p>+966 12145678</p>
        </div>
        <div>
          <p>Service Name</p>
          <p>Lorem Ipsum Hotel</p>
        </div>
        <div>
          <p>Location</p>
          <p>Riyadh</p>
        </div>
        <div>
          <p>Nights</p>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <p>Check-in Date</p>
          <p>22/05/2022</p>
        </div>
        <div>
          <p>Check-out Date</p>
          <p>24/05/2022</p>
        </div>
        <div>
          <p>Check-in Time</p>
          <p>11:00 AM</p>
        </div>
        <div>
          <p>Check-out Time</p>
          <p>12:00 PM</p>
        </div>
        <div>
          <p>Total Price</p>
          <p>SAR 500</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceDetailModel",
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$parent.$parent.serviceModel = false;
    },
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
  width: 623px;
  background: #fff;
  height: 550px;
  padding: 25px;
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
  top: 15px;
  position: absolute;
  right: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 99;
}
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 20px;
}
.service-details {
  padding: 25px 0;
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
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>