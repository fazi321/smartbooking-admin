<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Add New City</h2>
      </div>
      <form @submit="addNewCategory">
        <div class="category-content">
          <input type="text" placeholder="City Name" v-model="name" required />
          <div class="upload-file">
            <p>Add category image</p>
            <label for="inputTag" :class="{ active: err.file }">
              Add image
              <input id="inputTag" type="file" accept="image/png, image/gif, image/jpeg" @change="handleFile" />
            </label>
          </div>
          <div class="add-btn">
            <button type="submit" :disabled="loading">
              {{ !loading ? "Add" : "Loading..." }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "cityModel",
  data() {
    return {
      name: "",
      file: null,
      //
      err: {},
      loading: false,
    };
  },
  methods: {
    handleFile(event) {
      let formData = new FormData();
      formData.append("image", event.target.files[0]);
      this.file = formData;
    },
    async addNewCategory(e) {
      e.preventDefault();
      if (!this.file) {
        this.err.file = true;
        return;
      }
      this.loading = true;
      this.err.file = false;
      var imageUrl = await this.uploadFiles();
      this.add(imageUrl);
    },
    async add(imageUrl) {
      try {
        var res = this.$axios.post("/admin/city", {
          name: this.name,
          image: imageUrl,
        });
        if (res) {
          this.loading = false;
          this.$swal({
            icon: "success",
            title: "New City added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          this.closeSlide();
          this.$emit("reCall");
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async uploadFiles() {
      try {
        const imagesData = await this.$axios.post("user/upload", this.file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return imagesData.data.url;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    closeSlide() {
      this.$parent.$parent.cityModel = false;
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
  width: 450px;
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
  padding: 0 50px;
}
.category-content input {
  outline: none;
  font-size: 12px;
  padding: 18px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  width: 90%;
  margin: 40px 0 8px 0;
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
.upload-file label.active {
  border: 1px solid red !important;
}
.add-btn {
  margin: 40px 0 10px 0;
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
