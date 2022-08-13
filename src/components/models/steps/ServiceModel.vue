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
          <h1>Service Description</h1>
          <h4>Rules</h4>
        </div>
        <div class="container-rules">
          <div class="rules">
            <div>
              <label class="container-input"
                >Events & Parties allowed
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Pets Allowed
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Smoking Allowed
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Suitable for Childrens (2-14)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Suitable for grooms
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="container-input"
                >Suitable for Infants (Under 2)
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
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
          <h1>Service Description</h1>
          <h4>Description</h4>
        </div>
        <div class="container-vendor">
          <div>
            <div class="inputs-container">
              <div>
                <input type="text" placeholder="Service Name (English)" />
              </div>
              <div>
                <input type="text" placeholder="Service Name (Arabic)" />
              </div>
              <div>
                <input type="text" placeholder="Secondary Phone Number" />
              </div>
              <div>
                <input type="text" placeholder="Area" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Property Description (English)"
                />
              </div>
              <div>
                <input type="text" placeholder="Outdoor Seating" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Property Description (Arabic)"
                />
              </div>
            </div>
          </div>
          <div class="upload-file">
            <label for="inputTag">
              Add service image
              <input id="inputTag" type="file" />
            </label>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div">
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
          <h1>Service Description</h1>
          <h4>Address & Location</h4>
        </div>
        <div class="map-container">
          <div class="map">
            <GoogleMap />
          </div>
          <div class="container-vendor">
            <div>
              <div class="inputs-container">
                <div>
                  <input type="text" placeholder="Address" />
                </div>
                <div>
                  <input type="text" placeholder="Property Number" />
                </div>
                <div>
                  <input type="text" placeholder="City" />
                </div>
                <div>
                  <input type="text" placeholder="Area" />
                </div>
                <div>
                  <input type="text" placeholder="Landmark" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Property Description (Arabic)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-div step-btn">
            <button type="submit">Next</button>
          </div>
        </div>
      </div>
    </div>
    <!-- step three End -->
  </section>
</template>

<script>
import GoogleMap from "../../GoogleMap.vue";
export default {
  name: "AddServiceModel",
  props: ["model"],
  components: {
    GoogleMap,
  },
  data() {
    return {
      nextStep: null,
      step: 1,
    };
  },
  methods: {
    changeStep(step) {
      // if (!this.serviceType) return;
      this.step = step;
    },
    close() {
      this.$emit("close");
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
.container-rules {
  display: flex;
  justify-content: center;
}
.rules {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
}
.rules > div {
  width: 42%;
}
.rules .container-input {
  margin: 20px 0;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
}
/* Hide the browser's default checkbox */
.rules .container-input input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.rules .checkmark {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  box-shadow: 0px 1px 12px -2px #00000040;
}
/* Create the checkmark/indicator (hidden when not checked) */
.rules .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.rules .container-input input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.rules .container-input .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #febb12;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* step one */
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
.map-container {
  height: 350px;
  overflow-y: scroll;
  margin-bottom: 30px;
}
.map-container .inputs-container input {
  min-width: 220px;
}
.map {
  margin-bottom: 30px;
  padding: 0 28px;
}
/* step two end */
</style>