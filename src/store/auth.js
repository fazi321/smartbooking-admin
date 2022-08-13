import axios from "@/services/axios";
import Cookies from "js-cookie";

export default {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    },
    LOGOUT(state, value) {
      state.user = value;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("SET_USER", payload);
    },
    async signUp({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const res = await axios().post("/api/v1/user/signup", {
          phone: payload,
        });
        if (res) {
          // var time = new Date(new Date().getTime() + 1 * 60 * 1000);
          Cookies.set("Authorization", res.data.token, { expires: 7 });
          commit("SET_USER", res.data);
          commit("SET_LOADING", false);
          return res.data;
        }
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },
    async profile({ commit }) {
      var config = () => {
        var cookie = Cookies.get("Authorization");
        if (cookie) {
          var con = {
            headers: {
              Authorization: `Bearer ${cookie}`,
            },
          };
          return con;
        }
      };
      const userData = await axios().get("/api/v1/user/profile", config());
      commit("SET_USER", userData.data);
    },
    logOut({ commit }) {
      Cookies.remove("Authorization")
      commit("LOGOUT", null);
    },
  },
};
