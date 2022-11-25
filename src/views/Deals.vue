<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Deals</h2>
        <p>You can see all the deals here. Also you can add new deals.</p>
      </div>
      <div class="add-btn">
        <button @click="DealModelShow">Add New Deal</button>
      </div>
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Percentage</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Expiry Date</th>
              <th>Edit</th>
              <th>Delete</th>
              <!-- <th>Action</th> -->
            </tr>
            <tr v-for="(deal, index) in serviceList" :key="index">
              <td>{{ deal.count }}</td>
              <td>{{ deal.dealName }}</td>
              <td>{{ deal.percentage }}</td>
              <td>{{ address(deal.location) }}</td>
              <td>{{ getDate(deal.startDate) }}</td>
              <td>{{ getDate(deal.expiryDate) }}</td>
              <td class="icon-deals">
                <img
                  src="../assets/images/edit.svg"
                  @click="editModelShow(deal)"
                />
              </td>
              <td class="icon-deals">
                <img
                  src="../assets/images/delete.svg"
                  @click="deleteDeal(deal._id)"
                />
              </td>
              <!-- <td>Lorem Ipsum</td> -->
              <!-- <td>
                <div class="view-btn" @click="servicesModelShow(service)">
                  <button>Action</button>
                </div>
              </td> -->
            </tr>
          </table>
          <div class="bottom-container">
            <div>
              <p>
                Showing {{ pageSelected != 1 ? dataShow * pageSelected - dataShow : 1 }} to
                {{ serviceList[serviceList.length - 1] && serviceList[serviceList.length - 1].count }} of
                {{ serviceData.length }} entries
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
      <DealsModel v-if="dealModel" @reCall="pushData" @close="close" />
      <EditDealModel
        v-if="editDealModel"
        @reCall="getDeals"
        @close="close"
        ref="edit"
      />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import DealsModel from "@/components/Models/DealsModel.vue";
import EditDealModel from "@/components/Models/EditDealModel.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "DealsView",
  components: {
    DefaultLayout,
    Paginate,
    DealsModel,
    EditDealModel,
  },
  data() {
    return {
      dealModel: false,
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
    };
  },
  mounted() {
    this.getDeals();
  },
  methods: {
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
    editModelShow(val) {
      if (val.startDate) {
        val.startDate = this.getFormatedDate(val.startDate);
      }
      if (val.expiryDate) {
        val.expiryDate = this.getFormatedDate(val.expiryDate);
      }
      this.editDealModel = true;
      setTimeout(() => {
        this.$refs.edit.dataEdit = val;
      }, 200);
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
    close() {
      this.dealModel = false;
      this.editDealModel = false;
    },
    // clickCallback(num) {
    //   this.$refs.slider.slideTo(num);
    // }
  },
};
</script>
<style scoped>
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
  font-size: 18px;
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
.add-btn button {
  border: none;
  outline: none;
  border-radius: 11px;
  background: #febb12;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  width: 17%;
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
</style>
