<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Booking</h2>
      </div>
      <div class="booking-card">
        <BookCard />
      </div>
      <div class="service-details">
        <div>
          <p>Check-in Date</p>
          <p>22/05/2022</p>
        </div>
        <div>
          <p>Check-out Date</p>
          <p>24/05/2022</p>
        </div>
        <div>
          <p>Nights</p>
          <p>2</p>
        </div>
        <div>
          <p>Vendor ID</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <!-- Payment Options  -->
      <section class="Payment">
        <h6>Payment Options</h6>
        <form class="form">
          <label class="checkbox-container">
            Full Payment (SAR 120)
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <div class="payment-option">
            <label class="checkbox-container">
              Partial Payment (SAR 60)
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>You can pay the remaining amount at the location</p>
          </div>
        </form>
      </section>
      <!-- Payment Options  -->
      <!-- Payment Method  -->
      <section class="Payment">
        <h6>Payment Method</h6>
        <form class="form">
          <div class="payment-option">
            <label class="checkbox-container">
              <img src="../../assets/images/master.png" />
              <img src="../../assets/images/visa.svg" />
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>You can pay with Visa or MasterCard</p>
          </div>
          <div class="payment-option">
            <label class="checkbox-container">
              <img src="../../assets/images/pay.svg" />
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>You can pay with ApplePay</p>
          </div>
          <div class="payment-option tamara">
            <label class="checkbox-container">
              <img src="../../assets/images/tamara.png" />
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>Pay with installments with no interest</p>
          </div>
        </form>
      </section>
      <!-- Payment Method  -->
      <div class="terms-container">
        <div>
          <h4>Terms & Conditions</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div>
          <h4>Cancellation Policy</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>

      <div class="book-btn">
        <button>Pay (SAR 500)</button>
      </div>
    </div>
  </section>
</template>

<script>
import BookCard from "@/components/hotelDetail/bookCard.vue";
export default {
  name: "BookModel",
  components: {
    BookCard
  },
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$parent.bookingModel = false;
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
  width: 52%;
  background: #fff;
  height: 550px;
  padding: 25px 0;
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
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
}
.service-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}
.service-details div p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 14px;
}
.booking-card {
  margin-top: 40px;
  padding: 0 20px;
}
.form {
  padding: 20px;
  border-bottom: 0.5px solid #0000000f;
  text-align: left;
}
.form .checkbox {
  margin: 10px 0 15px 0;
  display: flex;
  align-items: center;
}
.tamara .checkbox-container img {
  width: 70px !important;
  height: 22px;
}
.checkbox-container img {
  width: 44px;
  margin-right: 15px;
  margin-bottom: 5px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000000;
  height: 25px;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 4px #0000000f;
  opacity: 1;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2196f3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.Payment h6 {
  font-size: 14px;
  text-align: left;
  letter-spacing: 0.4px;
  color: #231f20;
  opacity: 0.8;
  padding: 15px 15px 0 20px;
}
.payment-option {
  padding: 12px 0;
}
.payment-option p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  font-size: 11px;
  margin-left: 35px;
  margin-top: -10px;
  font-weight: 200;
}
.terms-container {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
}
.terms-container h4 {
  text-align: left;
  letter-spacing: 0.4px;
  color: #231f20;
  opacity: 0.8;
  font-size: 16px;
  padding: 5px 0 10px 0;
}
.terms-container > div {
  width: 50%;
}
.terms-container > div ul {
  list-style: disc;
  padding-left: 15px;
}
.terms-container > div ul li {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
  font-size: 11px;
  line-height: 1.8;
}
.book-btn {
  margin: 30px;
}
.book-btn button {
  border: none;
  outline: none;
  padding: 15px 50px;
  text-align: center;
  letter-spacing: 0px;
  color: #04304b;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 53px;
  opacity: 1;
  background: #febb12;
  cursor: pointer;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>