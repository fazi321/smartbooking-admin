<template>
  <router-view />
</template>
<script>
export default {
  beforeCreate() {
    let auth = this.$cookies.get("Authorization");
    if (auth) {
      this.$axios.defaults.headers.common["Authorization"] = `bearer ${auth}`;
      this.$router.push("/");
      // this.$store.dispatch("auth/profile");
    } else {
      this.$axios.defaults.headers.common["Authorization"] = "";
      this.$router.push("/login");
    }
  },
  // mounted() {
  //   if (localStorage.user == "false" || !localStorage.user) {
  //     this.$router.push("/login");
  //   }
  // },
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
