<template>
  <router-view />
</template>
<script>
import Cookies from "js-cookie";
export default {
  beforeCreate() {
    let auth = Cookies.get("Authorization");
    if (auth) {
      this.$axios.defaults.headers.common["Authorization"] = auth;
      this.$store.dispatch("auth/profile");
    } else {
      this.$axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
