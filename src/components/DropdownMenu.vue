<template>
  <section class="dropdown">
    <ul>
      <li>
        <router-link to="/my-profile">
          <span>My Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="/messages">
          <span>Messages</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Balance</span>
          <span>SAR 500</span>
        </router-link>
      </li>
      <li>
        <router-link to="/my-services">
          <span>My Services</span>
        </router-link>
      </li>
      <li>
        <router-link to="/service-booking">
          <span>Service Bookings</span>
        </router-link>
      </li>
      <li>
        <router-link to="/favourites">
          <span>Favourites</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Language</span>
          <span>Eng</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Price Display</span>
          <span>SAR</span>
        </router-link>
      </li>
      <li>
        <router-link to="#demo">
          <span>Distance</span>
          <span>km</span>
        </router-link>
      </li>
      <li>
        <router-link to="/privacy">
          <span>Privacy Policy</span>
        </router-link>
      </li>
      <li>
        <router-link to="/faqs">
          <span>FAQs</span>
        </router-link>
      </li>
      <li>
        <router-link to="/term-conditions">
          <span>Term of Use</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span>About Us</span>
        </router-link>
      </li>
      <li>
        <p @click="logOut">
          <span>Logout</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("auth/logOut");
      this.$axios.defaults.headers.common["Authorization"] = "";
      this.$swal({
        icon: "success",
        title: "Success!",
        showConfirmButton: false,
        timer: 3000,
      });
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  background: #fff;
  box-shadow: 0px 0px 7px 0px #adadada6;
  width: 70%;
  text-align: left;
  padding: 10px 14px;
  border-radius: 14px;
  z-index: 2;
  right: 35px;
  top: 50px;
  min-height: 503px;
}

.dropdown ul li a,
.dropdown ul li p {
  color: #828282;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 10px 0;
  cursor: pointer;
}
.dropdown ul li a span:nth-child(2) {
  color: #febb12;
}
</style>