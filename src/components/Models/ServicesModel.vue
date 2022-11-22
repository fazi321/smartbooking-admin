<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>Service Details</h2>
      </div>
      <div class="service-details">
        <h3>Service Details</h3>
        <div>
          <p>Service Name</p>
          <p>{{ service.description.nameInEnglish }}</p>
        </div>
        <div>
          <p>Service Address</p>
          <p>{{ service.address.address }}</p>
        </div>
        <div>
          <p>Total Bookings</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div class="service-details booking-detail">
        <h3>Vendor Details</h3>
        <div>
          <p>Vendor Name</p>
          <p>
            {{ service.vender && service.vender.firstName }}
            {{ service.vender && service.vender.lastName }}
          </p>
        </div>
        <div>
          <p>Mobile Number</p>
          <p>{{ service.vender && service.vender.phone }}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{{ service.vender && service.vender.email }}</p>
        </div>
        <div>
          <p>Address</p>
          <p>{{ service.vender && service.vender.address }}</p>
        </div>
        <div>
          <p>Commmercial ID No</p>
          <p>{{ service.vender && service.vender.commId }}</p>
        </div>
      </div>
      <div class="id-image">
        <div>
          <h3>Commercial ID Image</h3>
          <div class="placeholder-img">
            <img src="../../assets/images/placeholder.png" />
          </div>
        </div>
        <div class="add-btn">
          <button @click="Approve">Approve</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesModel",
  props: ["service"],
  data() {
    return {};
  },
  methods: {
    Approve() {
      const imagePath = require("../../assets/images/cancelicon.png");
      this.$swal({
        title: "You want to Approve?",
        text: "You want to Approve the vendor?",
        imageUrl: imagePath,
        imageWidth: 100,
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: "#FEBB12",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // this.cancelConfirmed();
          console.log("result");
        }
      });
    },
    // async cancelConfirmed() {
    //   try {
    //     var res = await this.$axios.get(
    //       `admin/vender/accept/${this.selectedVendor._id}`
    //     );
    //     if (res) {
    //       this.$emit('call')
    //       this.$swal({
    //         title: "Approved",
    //         text: "Your vendor has been Approved successfully.",
    //         icon: "success",
    //         showCancelButton: false,
    //         confirmButtonColor: "#FEBB12",
    //         confirmButtonText: "Done",
    //         reverseButtons: true,
    //       });
    //     }
    //   } catch (error) {
    //     this.$swal({
    //       icon: "error",
    //       title: "Some Thing Went Wrong!",
    //       showConfirmButton: false,
    //       timer: 3000,
    //     });
    //     console.log(error);
    //   }
    // },
    closeSlide() {
      this.$parent.$parent.servicesModel = false;
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
  height: 550px;
  padding: 25px 25px 0 25px;
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
.booking-detail {
  padding: 0 !important;
}
.service-heading h2 {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 20px;
}
.service-details {
  padding: 25px 0 0px 0;
}
.service-details h3 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 15px;
  padding: 10px 0 10px 0;
}
.service-details div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.service-details div p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 14px;
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
}
.add-btn {
  width: 50%;
  margin-top: 20px;
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
