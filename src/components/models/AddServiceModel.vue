<template>
  <section :class="['login-signup', { active: model }]">
    <!-- step one -->
    <div class="primary-login" v-if="!isSubmitted">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Add Service</h1>
          <h4>Please add details for new service</h4>
        </div>
        <div class="container-vendor">
          <div class="cards">
            <div
              :class="['primary-cards', { active: accountOpt == 'info' }]"
              @click="selectedOptions('info')"
            >
              <div class="category-img">
                <img src="../../assets/images/basic.svg" alt="" />
              </div>
              <div class="content">
                <h5>Basic Information</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
            <div
              :class="['primary-cards', { active: accountOpt == 'service' }]"
              @click="selectedOptions('service')"
            >
              <div class="category-img">
                <img src="../../assets/images/servies.svg" alt="" />
              </div>
              <div class="content">
                <h5>Service Description</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
            <div
              :class="['primary-cards', { active: accountOpt == 'price' }]"
              @click="selectedOptions('price')"
            >
              <div class="category-img">
                <img src="../../assets/images/price.svg" alt="" />
              </div>
              <div class="content">
                <h5>Price Details</h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Fusce ac odio at urna curs <br />us lacinia.
                </h6>
              </div>
            </div>
          </div>
          <div class="form-container">
            <div class="input-div step-btn">
              <button type="submit" @click="accountSelected">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- basic information start -->
    <InfoModel v-if="isSubmitted && accountOpt == 'info'" :model="true" @close="close"/>
    <!-- Description start -->
    <ServiceModel v-if="isSubmitted && accountOpt == 'service'" :model="true" @close="close"/>
    <!-- price start -->
    <PriceModel v-if="isSubmitted && accountOpt == 'price'" :model="true"  @close="close"/>
  </section>
</template>

<script>
import InfoModel from "./steps/InfoModel.vue";
import ServiceModel from "./steps/ServiceModel.vue";
import PriceModel from "./steps/PriceModel.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    InfoModel,
    ServiceModel,
    PriceModel,
  },
  data() {
    return {
      accountOpt: null,
      isSubmitted: false,
      nextStep: null,
    };
  },
  methods: {
    selectedOptions(opt) {
      this.accountOpt = opt;
    },
    accountSelected() {
      if (!this.accountOpt) return;
      this.isSubmitted = true;
    },
    close() {
      this.isSubmitted = false;
      this.$parent.serviceModel = false;
    },
  },
};
</script>

<style scoped>
.main-section {
  display: flex;
  justify-content: center;
  width: 100%;
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
  padding: 0 24px 24px 24px;
  margin: 15px 0;
}
.headings h1 {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 26px;
}
.headings h4 {
  font-weight: 500;
  font-size: 16px;
}
.headings h4 span {
  color: #febb12;
}
.add-services .headings {
  padding-bottom: 5px;
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
.input-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 18px;
}
.input-div button {
  background: #febb12;
  color: #000;
  font-size: 18px;
  border: none;
  padding: 14px 30px;
  border-radius: 50px;
  outline: none;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  min-width: 263px;
  cursor: pointer;
}
.step-btn {
  margin-top: 10px;
  margin-bottom: 5px;
}
/* step one */
.container-vendor {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}
.container-vendor .cards {
  display: flex;
  justify-content: space-between;
  width: 98%;
  flex-wrap: wrap;
  padding: 10px;
}
.container-vendor .primary-cards {
  width: 45%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0 8px;
  margin-bottom: 22px;
}
.container-vendor .primary-cards .category-img {
  width: 36px;
  position: relative;
  left: 14px;
}
.container-vendor .primary-cards .content {
  text-align: left;
  line-height: 1.5;
}
.container-vendor .primary-cards.active {
  border: 1px solid #febb12;
}
.container-vendor .primary-cards h6 {
  color: #393f45;
  margin-top: 3px;
  font-size: 10px;
}
.container-vendor .primary-cards h5 {
  font-size: 14px;
}
</style>