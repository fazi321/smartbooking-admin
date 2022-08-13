<template>
  <section class="message-card">
   
    <!-- message card  -->
    <div class="msg-wrapper">
      <div>
        <div class="msg-image">
          <img src="../../assets/images/msg-profile.svg" />
        </div>
        <div class="msg-details">
          <h6>Lorem Ipsum</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed convallis massa, at laoreet ligula. Etiam tempus lobortis pharetra. Praesent nec cursus quam, non blandit purus. Proin placerat purus nisl.</p>
        </div>
      </div>
      <div class="time">
        <p>36 Min Ago</p>
      </div>
    </div>
    <!-- message card  -->
  </section>
</template>

<script>
export default {
      name: "MessageCard",
};
</script>

<style scoped>

.message-card .msg-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 11px;
  opacity: 1;
  padding: 10px;
  margin-bottom: 15px;
}
.message-card .msg-wrapper > div {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 82%;
}
.message-card .msg-wrapper .msg-image {
  width: 15%;
  border-radius: 50%;
  margin-right: 2px;
}
.message-card .msg-wrapper .msg-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.message-card .msg-wrapper .msg-details {
  line-height: 1.7;
  width: 85%;
}
.message-card .msg-wrapper .msg-details h6 {
  text-align: left;
  letter-spacing: 0.34px;
  color: #231f20;
  opacity: 0.8;
  font-size: 11px;
}
.message-card .msg-wrapper .msg-details p {
  text-align: left;
  letter-spacing: 0.24px;
  color: #231f20;
  opacity: 0.6;
  font-size: 9px;
}
.message-card .msg-wrapper .time {
  width: 18%;
  display: flex;
  justify-content: flex-end;
}
.message-card .msg-wrapper .time p {
  text-align: left;
  letter-spacing: 0.2px;
  color: #231f20;
  opacity: 0.4;
  font-size: 9px;
}
</style>