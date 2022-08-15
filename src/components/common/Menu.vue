<template>
  <div class="menu">
    <ul>
      <li :class="{ active: $route.path == '/dashboard' && !isSelectedChilds }">
        <router-link to="/dashboard">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/dashboard.svg" alt="" />
            </div>
            <div class="content">Dashboard</div>
          </div>
        </router-link>
      </li>
      <li
        :class="{ active: $route.path == '/categories' && !isSelectedChilds }"
      >
        <router-link to="/categories">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/category.svg" alt="" />
            </div>
            <div class="content">Categories</div>
          </div>
        </router-link>
      </li>
       <li
        :class="{ active: $route.path == '/deals' && !isSelectedChilds }"
      >
        <router-link to="/deals">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/deal.svg" alt="" />
            </div>
            <div class="content">Deals</div>
          </div>
        </router-link>
      </li>
      <li
        @click="slectedChild('vn')"
        :class="{
          active: isSelectedChilds == 'vn' || $route.path == '/vendor',
        }"
      >
        <div class="list">
          <div class="svg">
            <img src="../../assets/images/vendor.svg" alt="" />
          </div>
          <div class="content">Vendors</div>
        </div>
      </li>
      <!-- vendor childs -->
      <div v-if="isSelectedChilds == 'vn' || $route.query.category">
        <li :class="{ activee: $route.query.category == 'improved' }">
          <router-link to="/vendor?category=improved">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Approved</div>
            </div>
          </router-link>
        </li>
        <li :class="{ activee: $route.query.category == 'pending' }">
          <router-link to="/vendor?category=pending">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Pending Requests</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- vendor childs end -->
      <li
        :class="{ active: $route.path == '/bookings' && !isSelectedChilds }"
      >
        <router-link to="/bookings">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/booking.svg" alt="" />
            </div>
            <div class="content">Bookings</div>
          </div>
        </router-link>
      </li>
      <li
        :class="{ active: $route.path == '/services' && !isSelectedChilds }"
      >
        <router-link to="/services">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/services.svg" alt="" />
            </div>
            <div class="content">Services</div>
          </div>
        </router-link>
      </li>
      <li
        :class="{ active: $route.path == '/cities' && !isSelectedChilds }"
      >
        <router-link to="/cities">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/city.svg" alt="" />
            </div>
            <div class="content">Cities</div>
          </div>
        </router-link>
      </li>
      <li
        @click="slectedChild('vn')"
        :class="{
          active: isSelectedChilds == 'vn',
        }"
      >
        <div class="list">
          <div class="svg">
            <img src="../../assets/images/settings.svg" alt="" />
          </div>
          <div class="content">Settings</div>
        </div>
      </li>
      <!-- Settings childs -->
      <div v-if="isSelectedChilds == 'vn' || $route.query.category">
        <li :class="{ activee: $route.query.category == 'api-settings' }">
          <router-link to="/api-settings">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">API Settings</div>
            </div>
          </router-link>
        </li>
        <li :class="{ activee: $route.query.category == 'notifications' }">
          <router-link to="/notifications">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Notifications</div>
            </div>
          </router-link>
        </li>
        <li :class="{ activee: $route.query.category == 'sms' }">
          <router-link to="/sms">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">SMS</div>
            </div>
          </router-link>
        </li>
        <li :class="{ activee: $route.query.category == 'payment-setting' }">
          <router-link to="/payment-setting">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Payment Settings</div>
            </div>
          </router-link>
        </li>
        <li :class="{ activee: $route.query.category == 'payment-method' }">
          <router-link to="/payment-method">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Payment Method</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- Settings childs end -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuNav",
  data() {
    return {
      isSelectedChilds: "",
      toggle: false,
    };
  },
  methods: {
    slectedChild(val) {
      this.isSelectedChilds = val;
    },
  },
};
</script>

<style scoped>
.menu ul li .list {
  display: flex;
  align-items: center;
  color: #828282;
  background-color: #fff;
  margin-right: 10px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  padding: 12px 0;
  margin: 10px 10px 10px 0;
}
.menu ul li.active .list {
  background-color: #febb12;
  color:#fff;
}
.menu ul li.activee .list {
  background-color: #fecb12;
  color:#fff;
}
.menu ul li .svg {
  width: 18px;
  margin: 0 12px 0 14px;
  display: flex;
}
.menu ul li .content {
  position: relative;
  top: 2px;
  font-size: 14px;
}
</style>