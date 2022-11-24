<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Add New Deal</h2>
      </div>
      <div class="category-content">
        <div class="inputs">
          <input type="text" placeholder="Deal Name" />
          <input type="text" placeholder="Percentage" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Start Date" />
          <input type="text" placeholder="Expiry Date" />
        </div>
        <div class="upload-file">
          <p>Add category image</p>
          <label for="inputTag">
            Add image
            <input id="inputTag" type="file" />
          </label>
        </div>
        <div class="add-btn">
          <button>Add</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DealModel",
  data() {
    return {};
  },
  methods: {
    closeSlide() {
      this.$emit("close");
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
  width: 700px;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  position: relative;
  overflow: scroll;
}
.primary-login::-webkit-scrollbar {
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
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 18px;
}
.category-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.category-content .inputs {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.category-content .inputs input {
  outline: none;
  font-size: 12px;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  width: 25%;
  margin: 20px 8px 8px 8px;
}
.upload-file input {
  display: none;
}
.upload-file {
  margin: 30px 0px 10px 0px;
  padding: 15px;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  border-radius: 20px;
  line-height: 1.8;
  width: 40%;
}
.upload-file p {
  letter-spacing: 0px;
  color: #393f45;
  font-size: 12px;
  padding-bottom: 20px;
  line-height: 1.8;
}
.upload-file label {
  cursor: pointer;
  padding: 10px 24px;
  background: #febb12;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
}
.add-btn {
  margin: 40px 0 10px 0;
  width: 40%;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 32px;
  background: #febb12;
  color: #fff;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>
