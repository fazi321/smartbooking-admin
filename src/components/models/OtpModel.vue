<template>
  <section :class="['login-signup', { active: model }]">
    <div class="primary-login">
      <h1>{{otpC}}</h1>
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/logo-forms.svg" alt="" />
          </div>
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Enter the code?</h1>
          <h4>Enter the code that you received through SMS</h4>
        </div>
        <div class="login-form">
          <div class="form-container">
            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              separator=""
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <div class="input-div">
            <button type="submit" v-if="otp.length == 4" @click="submitOtp">
              Verify
            </button>
            <button class="submit-div" v-else>Verify</button>
          </div>
          <!-- <div class="buttom-text">
            Don’t Have an Account? <span @click="SignUpModel">Sign Up </span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import in a Vue component
import VOtpInput from "vue3-otp-input";

export default {
  name: "LoginModel",
  props: ["model", "otpC"],
  components: {
    VOtpInput,
  },
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    async submitOtp() {
      this.$emit("submited", this.otp);
    },
    close() {
      this.$parent.otpModel = false;
    },
    handleOnComplete(value) {
      this.otp = value;
    },
    handleOnChange(value) {
      this.otp = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },
};
</script>

<style scoped>
.error {
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
}
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
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 623px;
  background: #fff;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 120px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.headings {
  text-align: center;
  padding: 24px;
  margin: 15px 0;
}
.headings h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.login-form .input-primary {
  display: flex;
  height: 42px;
  padding: 6px 30px;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 1px #f1f1f1;
  margin-bottom: 35px;
  align-items: center;
  width: 62%;
}
.container-input {
  width: 90%;
}
.login-form input {
  width: 100%;
  /* height: 42px; */
  border: none;
  outline: none;
  user-select: none;
  margin-left: 10px;
}
.login-form input::placeholder {
  color: #b0b0b0;
}
.form-container {
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
}

.form-container form {
  width: 100%;
}
.input-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-div button {
  padding: 15px 30px;
  background: #febb12;
  color: #000;
  width: 72%;
  font-size: 18px;
  border: none;
  padding: 18px 30px;
  border-radius: 50px;
  outline: none;
  margin-bottom: 40px;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  cursor: pointer;
}
.input-div .submit-div {
  background: #d1d1d1;
}
.input-div .flag {
  display: flex;
  align-items: center;
}
.input-div .flag span {
  color: #b0b0b0;
  font-size: 14px;
}
.input-div .flag .flag-img {
  width: 20px;
  position: relative;
  top: 2px;
  right: 3px;
}
.buttom-text {
  text-align: center;
  font-size: 14px;
}
.buttom-text span {
  text-align: center;
  color: #febb12;
  cursor: pointer;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>