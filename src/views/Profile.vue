<template>
  <default-layout>
    <section class="container">
      <div class="my-profile">
        <h1>MY PROFILE</h1>
        <div class="profile-container">
          <div class="profile-image">
            <img src="../assets/images/profile-image.svg" alt />
            <div class="camera">
              <img src="../assets/images/camera.svg" alt />
            </div>
          </div>
        </div>
        <div class="profile-form">
          <h6>Personal Information</h6>
          <form class="form">
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="number" placeholder="Mobile Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Nationality" />
              <input type="number" placeholder="ID Number" />
              <input type="text" placeholder="Address" />
              <input type="number" placeholder="Date of Birth" />
              <input type="text" placeholder="Gender" />
            </div>
            <input class="submit" type="submit" value="Update" />
          </form>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
  },
  mounted() {
    const user = this.$store.state.auth.user;
    if (!user.firstName) {
      this.$store.dispatch("auth/profile");
    }
  },
};
</script>
<style scoped>
.my-profile {
  padding: 30px 0;
}
.my-profile h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.profile-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.profile-container .profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
}
.profile-container .profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile-container .profile-image .camera {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.profile-container .profile-image .camera {
  width: 30px;
  height: 30px;
}
.profile-form {
  padding: 15px 0;
  margin-bottom: 50px;
}
.profile-form h6 {
  text-align: left;
  letter-spacing: 0.75px;
  color: #000000;
  opacity: 0.8;
  font-size: 16px;
  padding: 15px 0;
}
.profile-form .form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.profile-form .form input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 23%;
  padding: 20px 25px;
  border-radius: 46px;
  opacity: 1;
  box-shadow: 0px 0px 10px #00000012;
  margin: 20px 0;
}
.profile-form .form .submit {
  text-align: center;
  letter-spacing: 0px;
  color: #04304b;
  opacity: 1;
  font-size: 18px;
  background: #febb12;
  padding: 17px 25px;
  width: 29%;
  font-weight: 600;
  margin-top: 40px;
  cursor: pointer;
}
</style>
