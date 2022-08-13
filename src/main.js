import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/style.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyB0BScCFIxNxzp_Ao7b4iwhaRx5ZnKvGCE",
      libraries: "places",
    },
  })
  .use(store)
  .use(router)
  .mount("#app");
