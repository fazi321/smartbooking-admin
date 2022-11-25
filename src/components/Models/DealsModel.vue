<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Add New Deal</h2>
      </div>
      <form @submit="addNewDeal">
        <div class="category-content">
          <div class="inputs">
            <input
              type="text"
              placeholder="Deal Name"
              v-model="addDeal.dealName"
              required
            />
            <input
              type="number"
              min="1"
              placeholder="Percentage"
              v-model="addDeal.percentage"
              required
            />
            <input
              type="text"
              placeholder="Location"
              v-model="addDeal.location"
              required
            />
            <input
              type="date"
              placeholder="Start Date"
              v-model="addDeal.startDate"
              required
            />
            <input
              type="date"
              placeholder="Expiry Date"
              v-model="addDeal.expiryDate"
              required
            />
          </div>
          <div class="upload-file">
            <p>Add category image</p>
            <label for="inputTag" :class="{ active: err.file }">
              Add image
              <input
                id="inputTag"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                @change="handleFile"
              />
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
  name: "DealModel",
  data() {
    return {
      addDeal: {},
      file: null,
      //
      err: {},
      loading: false,
    };
  },
  methods: {
    handleFile(event) {
      if (event.target.files && event.target.files[0]) {
        let formData = new FormData();
        formData.append("image", event.target.files[0]);
        this.err.file = false;
        this.file = formData;
      }
    },
    async addNewDeal(e) {
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
      var payload = this.addDeal;
      payload.categoryImage = imageUrl;
      try {
        var res = await this.$axios.post(`/admin/deal`, payload);
        if (res) {
          this.loading = false;
          this.$swal({
            icon: "success",
            title: "Deal added successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(() => {
            this.$emit("reCall", res.data);
            this.closeSlide();
          }, 3000);
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
.upload-file label.active {
  border: 1px solid red !important;
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
