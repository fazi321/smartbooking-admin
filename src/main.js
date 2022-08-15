import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/style.css";
import axios from "axios";
import VueCookies from 'vue3-cookies'
const axiosInstence = () =>
  axios.create({
    baseURL: "http://13.229.167.135:5000/",
    withCredentials: false,
  });
const app = createApp(App);
app.use(VueCookies);
app.config.globalProperties.$axios = { ...axiosInstence() };
app.use(store);
app.use(router);
app.mount("#app");
