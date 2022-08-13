<template>
  <section :class="['account-container', { active: model }]">
    <!-- step one -->
    <div class="primary-login" v-if="step == 1">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Basic Information</h1>
          <h4>Service type</h4>
        </div>
        <div class="container-service">
          <div class="cards">
            <div
              :class="{ active: serviceType == 'Chalets' }"
              @click="selectedOptions('Chalets')"
            >
              <h6>Chalets</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Resorts' }"
              @click="selectedOptions('Resorts')"
            >
              <h6>Resorts</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Stadium' }"
              @click="selectedOptions('Stadium')"
            >
              <h6>Stadium</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Apartment' }"
              @click="selectedOptions('Apartment')"
            >
              <h6>Apartment</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Lounges' }"
              @click="selectedOptions('Lounges')"
            >
              <h6>Lounges</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Camps' }"
              @click="selectedOptions('Camps')"
            >
              <h6>Camps</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Wedding' }"
              @click="selectedOptions('Wedding')"
            >
              <h6>Wedding</h6>
              <h6>Halls</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Farms' }"
              @click="selectedOptions('Farms')"
            >
              <h6>Farms</h6>
            </div>
            <div
              :class="{ active: serviceType == 'Hotel' }"
              @click="selectedOptions('Hotel')"
            >
              <h6>Hotel</h6>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="changeStep(2)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step one End -->
    <!-- step two -->
    <div class="primary-login" v-if="step == 2">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Basic Information</h1>
          <h4>Rooms & Guests</h4>
        </div>
        <div class="container-vendor">
          <div>
            <div class="inputs-container">
              <div>
                <input type="text" placeholder="Sections" />
              </div>
              <div>
                <input type="text" placeholder="Bedrooms" />
              </div>
              <div>
                <input type="text" placeholder="Double Beds" />
              </div>
              <div>
                <input type="text" placeholder="Single Beds" />
              </div>
              <div>
                <input type="text" placeholder="Indoor Seating" />
              </div>
              <div>
                <input type="text" placeholder="Outdoor Seating" />
              </div>
              <div>
                <input type="text" placeholder="Additional Seating" />
              </div>
              <div>
                <input type="text" placeholder="Bathrooms" />
              </div>
              <div>
                <input type="text" placeholder="Maximum Guests" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit" @click="changeStep(3)">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step two End -->
    <!-- step three -->
    <div class="primary-login" v-if="step == 3">
      <div class="main-login add-services">
        <div class="logo-close">
          <div class="close-icon" @click="close">
            <img src="../../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>Basic Information</h1>
          <h4>Amenities</h4>
        </div>
        <section class="over-follow">
          <div>
            <div class="head">
              <h1>Sports</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{ active: serviceType == 'Chalets' }"
                  @click="selectedOptions('Chalets')"
                >
                  <img src="../../../assets/images/gym.svg" alt="" />
                  <h6>Gym</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Billiard' }"
                  @click="selectedOptions('Billiard')"
                >
                  <img src="../../../assets/images/Billiard.svg" alt="" />
                  <h6>Billiard</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Tennis Court' }"
                  @click="selectedOptions('Tennis Court')"
                >
                  <img src="../../../assets/images/Tennis.svg" alt="" />
                  <h6>Tennis Court</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Air Hockey' }"
                  @click="selectedOptions('Air Hockey')"
                >
                  <img src="../../../assets/images/hockey.svg" alt="" />
                  <h6>Air Hockey</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Trampoline' }"
                  @click="selectedOptions('Trampoline')"
                >
                  <img src="../../../assets/images/Trampoline.svg" alt="" />
                  <h6>Trampoline</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Soccer Field' }"
                  @click="selectedOptions('Soccer Field')"
                >
                  <img src="../../../assets/images/SoccerField.svg" alt="" />
                  <h6>Soccer Field</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Vollyball' }"
                  @click="selectedOptions('Vollyball')"
                >
                  <img src="../../../assets/images/Vollyball.svg" alt="" />
                  <h6>Vollyball</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <h1>Sports</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{ active: serviceType == 'Steam Bath' }"
                  @click="selectedOptions('Steam Bath')"
                >
                  <img src="../../../assets/images/SteamBath.svg" alt="" />
                  <h6>Steam Bath</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Indoor' }"
                  @click="selectedOptions('Indoor')"
                >
                  <img src="../../../assets/images/indoor.svg" alt="" />
                  <h6>Indoor</h6>
                  <h6>Swimming Pool</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Outdoor' }"
                  @click="selectedOptions('Outdoor')"
                >
                  <img src="../../../assets/images/outdoor.svg" alt="" />
                  <h6>Outdoor</h6>
                  <h6>Swimming Pool</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Swimming Pool' }"
                  @click="selectedOptions('Swimming Pool')"
                >
                  <img src="../../../assets/images/SwimmingPool.svg" alt="" />
                  <h6>Swimming Pool</h6>
                  <h6>Heater</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Playground' }"
                  @click="selectedOptions('Playground')"
                >
                  <img src="../../../assets/images/playground.svg" alt="" />
                  <h6>Playground</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Hot Tub' }"
                  @click="selectedOptions('Hot Tub')"
                >
                  <img src="../../../assets/images/HotTub.svg" alt="" />
                  <h6>Hot Tub</h6>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="head">
              <h1>Sports</h1>
            </div>
            <div class="container-service container-amenities">
              <div class="cards">
                <div
                  :class="{ active: serviceType == '24 Hours' }"
                  @click="selectedOptions('24 Hours')"
                >
                  <img src="../../../assets/images/24Hours.svg" alt="" />
                  <h6>24 Hours</h6>
                   <h6>Access</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Wheelchair' }"
                  @click="selectedOptions('Wheelchair')"
                >
                  <img src="../../../assets/images/wheelchair.svg" alt="" />
                   <h6>Wheelchair</h6>
                   <h6>Access</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Private' }"
                  @click="selectedOptions('Private')"
                >
                  <img src="../../../assets/images/Private.svg" alt="" />
                  <h6>Private</h6>
                  <h6>Entrance</h6>
                </div>
                <div
                  :class="{ active: serviceType == 'Doorman' }"
                  @click="selectedOptions('Doorman')"
                >
                  <img src="../../../assets/images/doorman.svg" alt="" />
                  <h6>Doorman</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step three end -->
  </section>
</template>

<script>
export default {
  name: "AddServiceModel",
  props: ["model"],
  data() {
    return {
      phoneNumber: null,
      serviceType: null,
      isSubmitted: false,
      nextStep: null,
      step: 1,
      // istransition: false,
    };
  },
  methods: {
    selectedOptions(opt) {
      this.serviceType = opt;
    },
    changeStep(step) {
      if (!this.serviceType) return;
      this.step = step;
      this.isSubmitted = true;
    },
    close() {
      this.$emit('close')
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
.account-container {
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
.account-container.active {
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
.account-container.active .primary-login {
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
.container-service {
  display: flex;
  overflow: hidden;
  justify-content: center;
}
.container-service .cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
}
.container-service .cards > div {
  box-shadow: 0px 1px 12px -2px #00000040;
  width: 106px;
  height: 76px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10px 10px 14px 10px;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid transparent;
}
.container-service .cards .active {
  border: 1px solid #febb12;
}
/* step one end */

/* step two start */
.company {
  padding: 25px 25px 10px 25px;
}
.company .headings {
  padding: 0 24px 9px 24px;
}
.inputs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px;
}
.inputs-container input {
  outline: none;
  font-size: 12px;
  padding: 18px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  min-width: 230px;
  margin: 8px 0;
}
.inputs-container input::placeholder {
  color: #c4c4c4;
}
.upload-file input {
  display: none;
}
.upload-file {
  margin: 30px 10px 10px 10px;
}
.upload-file label {
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 24px;
  color: #febb12;
  font-size: 12px;
}
/* step two end */
/* step three */
.head {
  text-align: left;
  width: 92%;
  margin: 18px auto 20px auto;
}
.container-service .cards img {
  width: 40px;
  height: 25px;
  margin: 0px 0 15px 0;
}
.container-amenities .cards {
  width: 92%;
  justify-content: flex-start;
}
.container-amenities .cards > div {
  height: 90px;
  margin: 10px 36px 14px 0px;
}
.container-amenities .cards > div h6{
  font-size:12px;
}
.container-amenities .cards > div:nth-child(4n + 0) {
  margin-right: 0;
}
.over-follow {
  overflow-y: scroll;
  height: 350px;
}
/* step three end */
</style>