<template>
  <section class="login-signup">
    <div class="primary-login">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="service-heading">
        <h2>User Details</h2>
      </div>
      <section class="service-popup">
        <div class="service-details">
          <!-- <h3>Service Details</h3> -->
          <div>
            <p>ID</p>
            <p>demo</p>
          </div>
          <div>
            <p>User ID</p>
            <p>demo</p>
          </div>
          <div>
            <p>Name</p>
            <p>demo</p>
          </div>
          <div>
            <p>Email</p>
            <p>demo</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>demo</p>
          </div>
        </div>
        <!-- block -->
        <table>
          <th>Permissions</th>
          <th>View</th>
          <th>Create</th>
          <th>Edit</th>
          <th>Delete</th>
          <tr>
            <td>Dashboard</td>
            <td>
              <div class="form-group">
                <input id="cb" type="checkbox" class="checkboxField" checked />
              </div>
            </td>
          </tr>
          <tr>
            <td>Categories</td>
            <td></td>
            <td>
              <div class="form-group">
                <input id="cb" type="checkbox" class="checkboxField" checked />
              </div>
            </td>
          </tr>
          <tr>
            <td>Deals</td>
            <td></td>
            <td></td>
            <td>
              <div class="form-group">
                <input id="cb" type="checkbox" class="checkboxField" checked />
              </div>
            </td>
          </tr>
          <tr>
            <td>Vendors</td>
            <td></td>
            <td></td>
            <td>
              <div class="form-group">
                <input id="cb" type="checkbox" class="checkboxField" checked />
              </div>
            </td>
          </tr>
          <tr>
            <td>Bookings</td>
            <td></td>
            <td></td>
            <td>
              <div class="form-group">
                <input id="cb" type="checkbox" class="checkboxField" checked />
              </div>
            </td>
          </tr>
        </table>
      </section>
      <div class="id-image">
        <div class="add-btn">
          <button @click="closeSlide">
            Close
          </button>
          <!-- <button @click="Suspend" v-else-if="$route.query.type === 'approved'">
            Suspend
          </button> -->
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
    Suspend() {
      const imagePath = require("../../assets/images/cancelicon.png");
      this.$swal({
        title: "You want to suspend/unpublish?",
        text: "You want to suspend/unpublish the service?",
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
          this.suspendConfirmed();
        }
      });
    },
    async suspendConfirmed() {
      try {
        var res = await this.$axios.put(
          `admin/service/${this.service._id}/un-publish`
        );
        if (res) {
          this.$emit("call");
          this.$swal({
            title: "Suspended",
            text: "Your service has been Suspended successfully.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#FEBB12",
            confirmButtonText: "Done",
            reverseButtons: true,
          });
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Some Thing Went Wrong!",
          showConfirmButton: false,
          timer: 3000,
        });
        console.log(error);
      }
    },
    Approve() {
      const imagePath = require("../../assets/images/cancelicon.png");
      this.$swal({
        title: "You want to Approve?",
        text: "You want to Approve the service?",
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
          this.publishedConfirmed();
          console.log("result");
        }
      });
    },
    async publishedConfirmed() {
      try {
        var res = await this.$axios.put(
          `admin/service/${this.service._id}/publish`
        );
        if (res) {
          this.$emit("call");
          this.$swal({
            title: "Approved",
            text: "Your service has been Approved successfully.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#FEBB12",
            confirmButtonText: "Done",
            reverseButtons: true,
          });
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Some Thing Went Wrong!",
          showConfirmButton: false,
          timer: 3000,
        });
        console.log(error);
      }
    },
    closeSlide() {
      this.$parent.$parent.adminModel = false;
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
  height: 400px;
  overflow-y: scroll;
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
  margin: 20px;
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
table {
  width: 100%;
}
td,
th {
  text-align: left;
  padding: 8px 8px 8px 0;
  font-size: 14px;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
}
</style>
