<template>
  <section class="profile-section">
    <div class="content-area">
      <h1>Welcome Lorem Ipsum</h1>
      <p>Hi, your analytics are all set</p>
    </div>
    <div class="image-container">
      <div class="profile-avatar">
        <!-- <img src="" alt=""/> -->
      </div>
      <div class="profile-primary">
        <h5>Hello, George</h5>
        <h6>Admin</h6>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
.image-container {
  display: flex;
  align-items: center;
  margin-right: 34px;
}
.profile-primary h5 {
  text-align: left;
  line-height: 1.4;
  font-size: 14px;
}
.profile-primary h6 {
  text-align: left;
  font-size: 12px;
  color: #b4b7b9;
}
.image-container .profile-avatar {
  width: 34px;
  height: 34px;
  background: red;
  border-radius: 50%;
  margin-right: 10px;
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