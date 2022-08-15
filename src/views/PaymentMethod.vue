<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Payment Methods</h2>
        <p>You can see all the payment Methods here.</p>
      </div>
      <div class="add-btn">
        <button @click="MethodModelShow">Add New</button>
      </div>
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th>Icon</th>
              <th>Gateway</th>
              <th>Action</th>
            </tr>
            <tr>
              <td class="payment">
                <div class="payment-icon">
                  <img src="../assets/images/master.png" alt />
                </div>
              </td>
              <td>Lorem Ipsum</td>
              <td>
                <div class="view-btn">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="payment">
                <div class="payment-icon">
                  <img src="../assets/images/visa.svg" alt />
                </div>
              </td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="payment">
                <div class="payment-icon">
                  <img src="../assets/images/pay.svg" alt />
                </div>
              </td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn">
                  <button>Action</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="payment">
                <div class="payment-icon tamara">
                  <img src="../assets/images/tamara.png" alt />
                </div>
              </td>
              <td>Lorem Ipsum</td>

              <td>
                <div class="view-btn">
                  <button>Action</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <PaymentMethodModel v-if="settingModel" />
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import PaymentMethodModel from "@/components/Models/PaymentMethodModel.vue";

export default {
  name: "PaymentMethodView",
  components: {
    DefaultLayout,
    PaymentMethodModel
  },
  data() {
    return {
      settingModel: false
    };
  },
  methods: {
    MethodModelShow() {
      this.settingModel = !this.settingModel;
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
  margin: 20px 0;
  box-shadow: 0px 0px 39px #00000012;
  border-radius: 17px;
  opacity: 1;
  background: #fff;
  padding-bottom: 100px;
}
.service-detail table {
  border-collapse: collapse;
  width: 100%;
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
th:first-child {
  padding: 15px !important;
}
.service-detail table td {
  padding: 12px 8px;
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
.payment {
  display: flex;
  justify-content: center;
}
.tamara {
  width: 60px !important;
  height: 20px !important;
}
.payment-icon {
  width: 50px;
  height: 30px;
}
</style>
