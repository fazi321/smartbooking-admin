<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>API</h2>
        <p>You can see all the api settings here.</p>
      </div>
      <div class="api-setting">
        <h3>API Settings</h3>
        <div class="api-inputs">
          <label>API Key</label>
          <input type="text" placeholder="Lorem Ipsum" />
        </div>
        <div class="api-inputs">
          <label>Lorem Ipsum</label>
          <input type="text" placeholder="Lorem Ipsum" />
        </div>
        <div class="api-inputs">
          <label>Lorem Ipsum</label>
          <input type="text" placeholder="Lorem Ipsum" />
        </div>
        <div class="add-btn">
          <button>Save Changes</button>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
// import CityModel from "@/components/Models/CityModel.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "CityView",
  components: {
    DefaultLayout
    // CityModel
  },
  data() {
    return {
      cityModel: false
    };
  },
  methods: {
    CityModelShow() {
      this.cityModel = !this.cityModel;
    }
  }
};
</script>

<style scoped>

.top-heading {
  line-height: 1.8;
}
.top-heading h2 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 18px;
}
.top-heading p {
  text-align: left;
  letter-spacing: 0px;
  color: #808183;
  font-size: 12px;
}
.api-setting {
  background: #fff;
  padding: 25px;
  margin-top: 15px;
  border-radius: 5px;
}
.api-setting h3 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 16px;
}
.api-inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.api-inputs label {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 14px;
  padding: 20px 0;
}
.api-inputs input {
  outline: none;
  font-size: 12px;
  padding: 18px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  width: 40%;
  margin: 0 0 8px 0;
}
.add-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 10px 0;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 32px;
  background: #febb12;
  color: #fff;
  padding: 12px 30px;
  font-size: 14px;
  cursor: pointer;
}
</style>