<template>
  <section class="message-card">
    <!-- message card  -->
    <div class="user-wrapper">
      <div class="user">
        <div class="user-image">
          <img src="../../assets/images/user-icon.svg" />
        </div>
        <p>Me</p>
      </div>
      <div class="user-details">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed convallis massa, at laoreet ligula. Etiam tempus lobortis pharetra. Praesent nec cursus quam, non blandit purus. Proin placerat purus nisl.</p>
        <div class="time">
          <p>36 Min Ago</p>
        </div>
      </div>
    </div>
    <!-- message card  -->
  </section>
</template>

<script>
export default {
  name: "MyChat"
};
</script>

<style scoped>
.message-card {
  margin-bottom: 15px;
}
.user-wrapper {
  display: flex;
  flex-direction: row-reverse;
}
.user-wrapper .user {
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-wrapper .user .user-image {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.user-wrapper .user .user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user-wrapper .user p {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
    padding-top: 15px;
}
.user-wrapper .user-details {
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 11px;
  border-top-right-radius: 1px;
  opacity: 1;
  width: 40%;
  padding: 5px 10px;
  text-align: left;
  background: #febb12;
}

.user-wrapper .user-details p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 11px;
  line-height: 1.6;
  font-weight: normal;
}
.user-wrapper .user-details .time {
  width: 100%;
}
.user-wrapper .user-details .time p {
  text-align: right;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 11px;
  font-weight: 500;
}
</style>