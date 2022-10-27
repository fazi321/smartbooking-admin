import { createStore } from "vuex";

export default createStore({
  state: {
    user:{},
  },
  getters: {},
  mutations: {
    USER_INFO(state, data) {
      state.user = data.data.admin;
    },
  },
  actions: {},
  modules: {},
});
