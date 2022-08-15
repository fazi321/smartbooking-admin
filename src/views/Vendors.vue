<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Vendors</h2>
        <p>You can see all the vendors here. Also you can add new Vendors.</p>
      </div>
      <!-- <div class="add-btn">
        <button @click="VendorModelShow">Add New Deal</button>
      </div>-->
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th>ID</th>
              <th>Vendor Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Services</th>
              <th>Commercial ID</th>
              <th>ID Image</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>01</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>1</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>2</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>3</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>4</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>5</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>6</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>7</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
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
              <td>8</td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn" @click="VendorModelShow">
                  <button>Action</button>
                </div>
              </td>
            </tr>
          </table>
          <div class="bottom-container">
            <div>
              <p>Showing 1 to 10 of 30 entries</p>
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
      <VendorDetailModel v-if="vendorModel" />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import VendorDetailModel from "@/components/Models/VendorDetailModel.vue";
import Paginate from "vuejs-paginate-next";

export default {
  name: "VendorsView",
  components: {
    DefaultLayout,
    Paginate,
    VendorDetailModel
  },
  data() {
    return {
      vendorModel: false
    };
  },
  methods: {
    VendorModelShow() {
      this.vendorModel = !this.vendorModel;
    },
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    }
  }
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
  width: 98%;
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
  padding: 15px 8px;
  white-space: nowrap;
}
th:first-child{
  padding: 15px !important;
}
.service-detail table td {
  padding: 15px 8px;
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
  background: #FEBB12;
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
