<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="close">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Rejection Feedback</h2>
      </div>
      <section class="service-popup">
        <div>
          <textarea placeholder="write something..."></textarea>
        </div>
      </section>
      <div class="id-image">
        <div class="add-btn">
          <button>Done</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedBackModel",
  data() {
    return {};
  },
  methods: {
    done() {
      console.log("done");
    },
    close() {
      this.$emit('modelClose')
    },
  },
};
</script>

<style scoped>
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.primary-login {
  width: 500px;
  background: #fff;
  padding: 25px 25px 0 25px;
  border-radius: 20px;
  position: relative;
}
.service-popup {
  /* min-height: 220px; */
  overflow-y: scroll;
}
.service-popup textarea {
  width: 85%;
  height: 130px;
  outline: none;
  color:gray;
  border: 1px solid #80808033;
  border-radius: 18px;
  overflow: hidden;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 7px 1px #c9c9c96b;
}
.service-popup::-webkit-scrollbar {
  display: none;
}
.primary-login {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.close-icon {
  cursor: pointer;
  top: 26px;
  position: absolute;
  right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 99;
}
.booking-detail {
  padding: 0 !important;
}
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 16px;
}
/* .service-details {
  padding: 25px 0 0px 0;
}
.service-details h3 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  padding: 5px 0 5px 0;
}
.service-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
.service-details div p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 12px;
}
.id-image {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.id-image div h3 {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  font-size: 14px;
  opacity: 0.7;
}
.id-image div .placeholder-img {
  width: 250px;
  height: 130px;
  background: #eee;
  margin: 15px 0;
  border-radius: 11px;
} */
.id-image {
  display: flex;
  justify-content: center;
}
.add-btn {
  width: 50%;
  margin: 20px;
  display: flex;
  align-items: center;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 32px;
  background: #febb12;
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
}
.btn-transparent {
  margin: 0 10px;
  background: transparent !important;
  border: 1px solid #c9c9c9a6 !important;
  color: gray !important;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>
