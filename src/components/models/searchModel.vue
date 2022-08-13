<template>
  <section :class="['login-signup', { active: model }]">
    <!-- step one -->
    <section class="primary-login" v-if="step == 1">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings vendor-text">
          <h1>City</h1>
          <h2><span>Riyadh</span></h2>
          <h4>Please select the category</h4>
        </div>
        <div class="container-vendor">
          <div class="cards">
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Hotels' }]"
              @click="selectedOptions('Hotels')"
            >
              <h5>Hotels</h5>
              <div class="card-image">
                <img src="../../assets/images/hotels.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Apartments' }]"
              @click="selectedOptions('Apartments')"
            >
              <h5>Apartments</h5>
              <div class="card-image">
                <img src="../../assets/images/apart.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Resorts' }]"
              @click="selectedOptions('Resorts')"
            >
              <h5>Resorts</h5>
              <div class="card-image">
                <img src="../../assets/images/res.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Farms' }]"
              @click="selectedOptions('Farms')"
            >
              <h5>Farms</h5>
              <div class="card-image">
                <img src="../../assets/images/farms.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Lounges' }]"
              @click="selectedOptions('Lounges')"
            >
              <h5>Lounges</h5>
              <div class="card-image">
                <img src="../../assets/images/Lounges.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Stadium' }]"
              @click="selectedOptions('Stadium')"
            >
              <h5>Stadium</h5>
              <div class="card-image">
                <img src="../../assets/images/Stadium.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Chalets' }]"
              @click="selectedOptions('Chalets')"
            >
              <h5>Chalets</h5>
              <div class="card-image">
                <img src="../../assets/images/Chalets.png" alt="" />
              </div>
            </div>
            <!-- block -->
            <div
              :class="['primary-cards', { active: accountOpt == 'Camps' }]"
              @click="selectedOptions('Camps')"
            >
              <h5>Camps</h5>
              <div class="card-image">
                <img src="../../assets/images/Campsi.png" alt="" />
              </div>
            </div>
          </div>
          <!-- <div class="form-container">
            <div class="input-div">
              <button type="submit" @click="accountSelected(2)">Next</button>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- step two -->
    <section class="primary-login" v-if="step == 2">
      <div class="main-login">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings vendor-text">
          <h1>City</h1>
          <h2><span>Riyadh</span></h2>
          <h4>Please select reservation date</h4>
        </div>
        <div class="container-vendor">
          <div class="date-container">
            <Datepicker
              v-model="date"
              inline
              autoApply
              :enableTimePicker="false"
              monthNameFormat="long"
            >
              <template #calendar-header="{ index, day }">
                <div :class="index === 6 ? 'red-color' : ''">
                  {{ day }}
                </div>
              </template>
            </Datepicker>
          </div>
          <div class="form-container">
            <div class="input-div">
              <button type="submit" @click="accountSelected">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "SearchModel",
  props: ["model"],
  components: {
    Datepicker,
  },
  data() {
    return {
      accountOpt: null,
      step: 1,
      date: null,
    };
  },
  methods: {
    selectedOptions(opt) {
      this.accountOpt = opt;
      if (!this.accountOpt) return;
      this.step = 2;
    },
    accountSelected() {
      if (!this.accountOpt) return;
      //   this.isSubmitted = true;
    },
    close() {
      this.$parent.searchModel = false;
    },
  },
};
</script>

<style scoped>
/* transition */
.transitionBox {
  transition: 0.3s;
  transform: translateX(100%);
}
.transitionActive {
  transform: translateX(0);
}
/* transition */
.main-section {
  display: flex;
  justify-content: center;
  width: 100%;
}
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
  width: 46%;
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
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 4px;
}
.headings h2 span {
  color: #febb12;
  font-size: 16px;
}
.headings h4 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 26px;
}
.headings h4 span {
  color: #febb12;
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
  margin: 20px 0px 40px 0px;
  width: 96%;
  flex-wrap: wrap;
}
.container-vendor .primary-cards {
  width: 100px;
  height: 90px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 1px 11px -5px #0000006b;
  cursor: pointer;
  border: 1px solid transparent;
  margin-bottom: 20px;
}
.container-vendor .primary-cards.active {
  border: 1px solid #febb12;
}
.container-vendor .primary-cards h6 {
  color: #febb12;
  margin-top: 3px;
}
.container-vendor .primary-cards h6,
h5 {
  font-size: 12px;
  font-weight: normal;
}
.cards .card-image {
  height: 55px;
}
.red-color {
  color: #ef4056;
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