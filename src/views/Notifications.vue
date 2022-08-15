<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Notifications</h2>
        <p>You can see all the notifications settings here</p>
      </div>
      <div class="api-setting">
        <h3>Notification Settings</h3>
        <div class="notification">
          <div class="first-container">
            <div class="api-inputs">
              <label>Pusher App Id</label>
              <input type="text" placeholder="Lorem Ipsum" />
            </div>
            <div class="api-inputs">
              <label>Pusher App Key</label>
              <input type="text" placeholder="Lorem Ipsum" />
            </div>
            <div class="api-inputs">
              <label>Pusher App Secret</label>
              <input type="text" placeholder="Lorem Ipsum" />
            </div>
          </div>
          <div class="second-container">
            <div class="api-inputs">
              <label>Pusher Cluster</label>
              <input type="text" placeholder="Lorem Ipsum" />
            </div>
            <div class="api-inputs">
              <label>Auto check for new notifications</label>
              <input type="text" placeholder="Lorem Ipsum" />
            </div>
          </div>
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
  name: "NotificationsView",
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
.notification .first-container {
  display: flex;
  justify-content: space-between;
}
.notification .second-container {
  display: flex;
  justify-content: flex-start;
}
.notification .second-container .api-inputs {
  margin-right: 68px;
}
.api-inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 28%;
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
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  margin: 0 0 8px 0;
  width: 85%;
}

.add-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100px 0 10px 0;
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
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  width: 17%;
}
</style>