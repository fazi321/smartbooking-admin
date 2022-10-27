<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Services</h2>
        <p>You can see all the services here.</p>
      </div>
      <!-- <div class="add-btn">
        <button @click="DealModelShow">Add New Deal</button>
      </div> -->
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th>Service ID</th>
              <th>Service Name</th>
              <th>Service Address</th>
              <th>Total Bookings</th>
              <th>Vendor Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            <tr v-for="(service, index) in serviceList" :key="index">
              <td>{{ service.count }}</td>
              <td>{{ service.description.nameInEnglish }}</td>
              <td>{{ address(service.address.address) }}</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <!-- <tr>
              <td>02</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn" @click="servicesModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr> -->
          </table>
          <div class="bottom-container">
            <div>
              <p>Showing 1 to 10 of {{ total }} entries</p>
            </div>
            <div class="service-pagination">
              <paginate
                :page-range="3"
                :margin-pages="2"
                :page-count="3"
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
      <ServicesModel v-if="servicesModel" />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import ServicesModel from "@/components/Models/ServicesModel.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "ServicesDetailsView",
  components: {
    DefaultLayout,
    Paginate,
    ServicesModel,
  },
  data() {
    return {
      servicesModel: false,
      serviceData: [],
      serviceList: [],
      //
      pageCount: 0,
      selectedService: {},
      total: 0,
      //
      dataShow: 10,
    };
  },
  mounted() {
    this.getRequests();
  },
  methods: {
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
    servicesModelShow(serviceObj) {
      this.selectedServices = serviceObj;
      this.servicesModel = !this.servicesModel;
    },
    async getRequests() {
      try {
        const services = await this.$axios.get(
          "https://www.testingserver.tech/api/v1/admin/service/pending"
        );
        console.log(services, "==>");
        this.total = services.data.length;
        //asigning number
        for (let index = 0; index < services.data.length; index++) {
          const element = services.data[index];
          element.count = index + 1;
          this.serviceData.push(element);
        }
        this.pageCount = Math.ceil(services.data.total / this.dataShow);
        this.serviceList = this.serviceData.slice(0, this.dataShow);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
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
  padding: 15px 5px;
  white-space: nowrap;
}
.service-detail table td {
  padding: 15px 5px;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  font-weight: normal;
  color: #9a9a9a;
  white-space: nowrap;
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
