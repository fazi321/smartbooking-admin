<template>
  <section class="profile-section">
    <div class="content-area">
      <h1>Welcome Lorem Ipsum</h1>
      <p>Hi, your analytics are all set</p>
    </div>
    <Profile />
  </section>
</template>

<script>
import Profile from "./common/Profile.vue";
export default {
  components: {
    Profile,
  },
};
</script>

<style scoped>
.profile-section {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.profile-section .content-area {
  text-align: left;
}
.content-area {
  font-size: 16px !important;
  line-height: 1.5;
}
.content-area p {
  font-size: 12px;
  color: #b4b7b9;
}
</style>
