<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Payment Method Settings</h2>
      </div>
      <div class="notification">
        <div class="first-container">
          <input type="text" placeholder="API username" />
          <input type="text" placeholder="API Password" />
          <input type="text" placeholder="API Signature" />
        </div>
        <div class="second-container">
          <input type="text" placeholder="Select Status" />
          <input type="text" placeholder="Expiry Date" />
        </div>
      </div>
      <div class="add-btn">
        <button>Save Changes</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PaymentSettingModel",
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$parent.$parent.settingModel = false;
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
  width: 650px;
  background: #fff;
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
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 20px;
}
.notification {
  margin: 25px 0;
}
.notification .first-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.notification .second-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
}
.notification .second-container input {
  margin-right: 20px;
}
.notification input {
  outline: none;
  font-size: 12px;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  margin: 0 0 8px 0;
  width: 25%;
}
.add-btn {
  display: flex;
  justify-content: center;
  margin: 50px;
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
  width: 40%;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>