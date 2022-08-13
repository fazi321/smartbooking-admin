<template>
  <default-layout>
    <section class="container">
      <div class="messages-main">
        <h1>MESSAGES</h1>
        <div class="message-container">
          <div class="message-left">
            <h3>ALL MESSAGES</h3>
            <div class="search">
              <img src="../assets/images/msg-search.svg" />
              <input type="text" placeholder="Search Messages" />
            </div>
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
          <div class="message-right">
            <div class="msg-top">
              <div class="msg-image">
                <img src="../assets/images/msg-profile.svg" />
              </div>
              <div class="msg-title">
                <h6>Lorem Ipsum</h6>
              </div>
            </div>
            <div class="chating-container">
              <UserChat />
              <MyChat />
              <UserChat />
              <MyChat />
              <UserChat />
            </div>
            <div class="text-msg">
              <input type="text" placeholder="Write Something" />
              <img src="../assets/images/send.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MessageCard from "@/components/message/messageCard.vue";
import UserChat from "@/components/message/userChat.vue";
import MyChat from "@/components/message/myChat.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
    MessageCard,
    UserChat,
    MyChat
  }
};
</script>
<style scoped>
.messages-main {
  padding: 30px 0;
}
.messages-main h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.message-container {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
}
.message-container .message-left {
  width: 30%;
}
.message-container .message-left h3 {
  text-align: left;
  letter-spacing: 0.5px;
  color: #231f20;
  opacity: 0.8;
  font-size: 14px;
}
.message-container .message-left .search {
  box-shadow: 0px 0px 7px #0000001a;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin: 15px 0;
}
.message-container .message-left .search img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.message-container .message-left .search input {
  border: none;
  outline: none;
  padding: 20px 0px;
  font-size: 14px;
}
.message-container .message-right {
  width: 69%;
  box-shadow: 0px 0px 39px #00000012;
  border-radius: 17px;
  opacity: 1;
  min-height: 500px;
  margin-top: 29px;
  position: relative;
}
.message-container .message-right .msg-top {
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #00000012;
  margin-bottom: 15px;
}
.message-container .message-right .msg-top .msg-image {
  width: 47px;
  height: 47px;
  border-radius: 50%;
}
.message-container .message-right .msg-top .msg-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.message-container .message-right .msg-top .msg-title {
  margin-left: 5px;
}
.message-container .message-right .msg-top .msg-title h6 {
  text-align: left;
  line-height: 1.8;
  letter-spacing: 0.34px;
  color: #231f20;
  opacity: 0.8;
  font-size: 14px;
}
.text-msg {
  display: flex;
  align-items: center;
  margin: 15px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.text-msg img {
  width: 35px;
  height: 35px;
  margin-left: 15px;
  cursor: pointer;
}
.text-msg input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 85%;
  padding: 18px 20px;
  box-shadow: 0px 0px 29px #00000012;
  border-radius: 36px;
  opacity: 1;
}
</style>
