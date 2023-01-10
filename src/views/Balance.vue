<template>
  <default-layout>
    <!-- <section class="main-wrapper">
      <div class="user-profile">
        <Profile />
      </div>
    </section> -->
    <!-- app balance -->
    <section class="main-wrapper">
      <!-- <div class="top-heading">
        <h2>Balance</h2>
        <p>You can see all of the users here.</p>
      </div> -->
      <div class="add-btn">
        <div class="top-heading">
          <h2>Balance</h2>
          <p>
            You can see user balance here and also add or deduct the user
            balance.
          </p>
        </div>
        <div class="search-main">
          <div class="search-container">
            <input type="text" placeholder="Search here..." />
            <img src="../assets/images/search.svg" />
          </div>
          <!-- <button @click="DealModelShow">Add New</button> -->
          <div class="select-type">
            <select name="user" id="user">
              <option value="type">Select User Type</option>
              <option value="Admin">Admin</option>
              <option value="role">User Role</option>
              <option value="Guest">Guest</option>
            </select>
          </div>
        </div>
      </div>
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th>Userv ID</th>
              <th>User Name</th>
              <th>User Type</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Nationality</th>
              <th>ID Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
            <tr v-for="(deal, index) in serviceList" :key="index">
              <td>{{ deal.count }}</td>
              <td>{{ deal.dealName }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ deal.percentage }}</td>
              <td>
                <div class="view-btn" @click="appUserModelShow(deal)">
                  <button>Action</button>
                </div>
              </td>
              <!-- <td>{{ address(deal.location) }}</td>
              <td>{{ getDate(deal.startDate) }}</td>
              <td>{{ getDate(deal.expiryDate) }}</td> -->
              <!-- <td class="icon-deals">
                <img
                  src="../assets/images/edit.svg"
                  @click="editModelShow(deal)"
                />
              </td> -->

              <!-- <td class="icon-deals">
                <img
                  src="../assets/images/delete.svg"
                  @click="deleteDeal(deal._id)"
                />
              </td> -->
              <!-- <td>Lorem Ipsum</td> -->
            </tr>
          </table>
          <div class="bottom-container">
            <div>
              <p>
                Showing
                {{ pageSelected != 1 ? dataShow * pageSelected - dataShow : 1 }}
                to
                {{
                  serviceList[serviceList.length - 1] &&
                  serviceList[serviceList.length - 1].count
                }}
                of {{ serviceData.length }} entries
              </p>
            </div>
            <div class="service-pagination">
              <paginate
                v-model="pageSelected"
                :page-range="3"
                :margin-pages="2"
                :page-count="pageCount"
                :click-handler="clickCallback"
                :prev-text="'Previous'"
                :next-text="''"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </div>
          </div>
        </div>
      </div>
      <!-- <AdminModel v-if="adminModel" :service="selectedServices" /> -->
      <BalanceModel
        v-if="appUserModel"
        :service="selectedServices"
        @model="modelOpen"
      />
      <AddDeductBalance v-if="balanceModel" @close="closeBalance" :toShow="toShow"/>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import BalanceModel from "@/components/Models/BalancePopUp.vue";
import AddDeductBalance from "@/components/Models/AddDeductBalance.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "DealsView",
  components: {
    DefaultLayout,
    Paginate,
    BalanceModel,
    AddDeductBalance,
  },
  data() {
    return {
      adminModel: false,
      appUserModel: false,
      editDealModel: false,
      serviceData: [],
      serviceList: [],
      //
      pageCount: 0,
      selectedService: {},
      total: 0,
      pageSelected: 1,
      //
      dataShow: 10,
      //
      toShow: null,
      balanceModel: false,
    };
  },
  mounted() {
    this.getDeals();
  },
  methods: {
    modelOpen(val) {
      this.appUserModel = false;
      this.toShow = val;
      this.balanceModel = true;
    },
    closeBalance() {
      this.balanceModel = false;
    },
    servicesModelShow(val) {
      this.selectedServices = val;
      this.adminModel = true;
    },
    appUserModelShow(val) {
      this.selectedServices = val;
      this.appUserModel = true;
    },
    pushData(val) {
      val.count = this.serviceData.length + 1;
      this.serviceData.push(val);
      this.clickCallback(this.pageSelected);
      this.pageCount = Math.ceil(this.serviceData.length / this.dataShow);
    },
    deleteDeal(dealId) {
      const imagePath = require("../assets/images/cancelicon.png");
      this.$swal({
        title: "You want to delete deal?",
        text: "You want to delete deal?",
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
          this.confirmDelete(dealId);
        }
      });
    },
    async confirmDelete(id) {
      try {
        var res = await this.$axios.delete(`admin/deal/${id}`);
        if (res) {
          this.$swal({
            icon: "success",
            title: "Deleted",
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(() => {
            this.serviceList = this.serviceList.filter((e) => {
              return e._id != id;
            });
            this.serviceData = this.serviceData.filter((e) => {
              return e._id != id;
            });
            this.pageCount = Math.ceil(this.serviceData.length / this.dataShow);
            if (this.serviceList && !this.serviceList.length) {
              if (this.pageSelected > 1) {
                this.pageSelected = this.pageSelected - 1;
                this.clickCallback(this.pageSelected);
              }
            }
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getFormatedDate(dt) {
      var date = new Date(dt);
      var year = date.toLocaleString("default", { year: "numeric" });
      var month = date.toLocaleString("default", { month: "2-digit" });
      var day = date.toLocaleString("default", { day: "2-digit" });
      var formattedDate = year + "-" + month + "-" + day;
      return formattedDate;
    },
    getDate(val) {
      var d = new Date(val);
      return d.toLocaleDateString("en-GB");
    },
    clickCallback(num) {
      var copyFrom = num * this.dataShow - this.dataShow;
      var copyTo = num * this.dataShow;
      this.serviceList = this.serviceData.slice(copyFrom, copyTo);
    },
    address(add) {
      let address = "";
      if (add.length > 20) {
        address = add.slice(0, 20) + "...";
      } else {
        address = add;
      }
      return address;
    },
    DealModelShow(serviceObj) {
      this.selectedServices = serviceObj;
      this.dealModel = !this.dealModel;
    },
    async getDeals() {
      try {
        const services = await this.$axios.get(`admin/deal`);
        this.total = services.data.length;
        // asigning number
        for (let index = 0; index < services.data.length; index++) {
          const element = services.data[index];
          element.count = index + 1;
          this.serviceData.push(element);
        }
        this.pageCount = Math.ceil(this.total / this.dataShow);
        this.serviceList = this.serviceData.slice(0, this.dataShow);
      } catch (error) {
        console.log(error);
      }
    },
    // clickCallback(num) {
    //   this.$refs.slider.slideTo(num);
    // }
  },
};
</script>
<style scoped>
.user-profile {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}
.icon-deals img {
  width: 40px;
  cursor: pointer;
}
.top-heading {
  line-height: 1.8;
}
.top-heading h2 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 16px;
}
.top-heading p {
  text-align: left;
  letter-spacing: 0px;
  color: #808183;
  font-size: 12px;
}
.add-btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.add-btn a {
  text-decoration: none;
  color: #fff;
}
.add-btn button {
  border: none;
  outline: none;
  border-radius: 11px;
  background: #febb12;
  color: #fff;
  padding: 11px 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  min-width: 148px;
}
.service-detail {
  padding: 20px 0 40px 0;
}
.service-detail table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0px 0px 39px #00000012;
  border-radius: 11px;
  opacity: 1;
  background: #fff;
}

.service-detail table th {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding: 15px;
}
.service-detail table td {
  padding: 15px;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  font-weight: normal;
  color: #9a9a9a;
  /* opacity: 0.7; */
  font-size: 12px;
}
.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.view-btn button {
  border: none;
  outline: none;
  border-radius: 7px;
  opacity: 1;
  background: #febb12;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 12px;
  padding: 10px 50px;
  cursor: pointer;
}
.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-container div p {
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 12px;
}
.add-btn {
  justify-content: space-between;
  align-items: center;
}
.add-btn h2 {
  font-size: 16px;
}
.search-container {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  overflow: hidden;
  padding: 0 20px;
  margin-right: 10px;
}
.search-main {
  display: flex;
}
.search-container img {
  width: 15px;
}
.search-container input {
  outline: none;
  border: none;
  /* height: 38px; */
  color: #828282;
  width: 230px;
}
.select-type {
  color: #828282;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
  overflow: hidden;
  padding: 10px;
}
select {
  outline: none;
  border: none;
  color: #828282;
  padding: 0 5px;
  font-size: 12px;
}
</style>
