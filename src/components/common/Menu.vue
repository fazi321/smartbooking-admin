<template>
  <div class="menu">
    <ul class="menu-setUp">
      <li :class="{ active: $route.path == '/' && !isSelectedChilds }">
        <router-link to="/">
          <div class="list">
            <div class="svg">
              <img
                class="black"
                src="../../assets/images/dashboard.svg"
                alt=""
              />
              <img
                class="white"
                src="../../assets/images/white-dashboard.svg"
                alt=""
              />
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
              <img
                class="black"
                src="../../assets/images/category.svg"
                alt=""
              />
              <img
                class="white"
                src="../../assets/images/white-category.svg"
                alt=""
              />
            </div>
            <div class="content">Categories</div>
          </div>
        </router-link>
      </li>
      <li :class="{ active: $route.path == '/deals' && !isSelectedChilds }">
        <router-link to="/deals">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/deal.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-deal.svg"
                alt=""
              />
            </div>
            <div class="content">Deals</div>
          </div>
        </router-link>
      </li>
      <li
        :class="{
          active: $route.path == '/vendor',
        }"
      >
        <router-link to="/vendor">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/vendor.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-vendor.svg"
                alt=""
              />
            </div>
            <div class="content">Vendors</div>
          </div>
        </router-link>
      </li>
      <!-- vendor childs -->
      <!-- <div
        v-if="
          isSelectedChilds == 'vn' ||
          ($route.path == '/vendor' && $route.query.type)
        "
      >
        <li
          :class="{
            activee:
              $route.path == '/vendor' && $route.query.type == 'improved',
          }"
        >
          <router-link to="#">
            <div class="list">
              <div class="svg">
                <img src="../../assets/images/house.svg" alt="" />
              </div>
              <div class="content">Approved</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee: $route.path == '/vendor' && $route.query.type == 'pending',
          }"
        >
          <router-link to="/vendor?type=pending">
            <div class="list">
              <div class="svg">
                <img src="../../assets/images/house.svg" alt="" />
              </div>
              <div class="content">Pending Requests</div>
            </div>
          </router-link>
        </li>
      </div> -->
      <!-- vendor childs end -->
      <li :class="{ active: $route.path == '/bookings' && !isSelectedChilds }">
        <router-link to="/bookings">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/booking.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-booking.svg"
                alt=""
              />
            </div>
            <div class="content">Bookings</div>
          </div>
        </router-link>
      </li>
      <!-- cancelation-requests -->
      <li
        @click="slectedChild('cancel')"
        :class="{
          active:
            isSelectedChilds == 'cancel' ||
            $route.path == '/cancelation-requests',
        }"
      >
        <!-- <router-link to="/services"> -->
        <div class="list">
          <div class="svg">
            <img class="black" src="../../assets/images/services.svg" alt="" />
            <img
              class="white"
              src="../../assets/images/white-service.svg"
              alt=""
            />
          </div>
          <div class="content">Cancelation Request</div>
        </div>
        <!-- </router-link> -->
      </li>
      <!-- cancelation childs -->
      <div
        v-if="
          isSelectedChilds == 'cancel' ||
          ($route.path == '/cancelation-requests' && $route.query.type)
        "
      >
        <li
          :class="{
            activee:
              $route.path == '/cancelation-requests' &&
              $route.query.type == 'pending',
          }"
        >
          <router-link to="/cancelation-requests?type=pending">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Pending</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/cancelation-requests' &&
              $route.query.type == 'approved',
          }"
        >
          <router-link to="/cancelation-requests?type=approved">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Approved</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/cancelation-requests' &&
              $route.query.type == 'rejected',
          }"
        >
          <router-link to="/cancelation-requests?type=rejected">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Rejected</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- cencelation childs end -->
      <li :class="{ active: $route.path == '/users' && !isSelectedChilds }">
        <router-link to="/users">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/deal.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-deal.svg"
                alt=""
              />
            </div>
            <div class="content">Users</div>
          </div>
        </router-link>
      </li>
      <li
        @click="slectedChild('sr')"
        :class="{
          active: isSelectedChilds == 'sr' || $route.path == '/services',
        }"
      >
        <!-- <router-link to="/services"> -->
        <div class="list">
          <div class="svg">
            <img class="black" src="../../assets/images/services.svg" alt="" />
            <img
              class="white"
              src="../../assets/images/white-service.svg"
              alt=""
            />
          </div>
          <div class="content">Services</div>
        </div>
        <!-- </router-link> -->
      </li>
      <!-- service childs -->
      <div
        v-if="
          isSelectedChilds == 'sr' ||
          ($route.path == '/services' && $route.query.type)
        "
      >
        <li
          :class="{
            activee:
              $route.path == '/services' && $route.query.type == 'approved',
          }"
        >
          <router-link to="/services?type=approved">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Approved</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/services' && $route.query.type == 'pending',
          }"
        >
          <router-link to="/services?type=pending">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Pending Requests</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- service childs end -->
      <li :class="{ active: $route.path == '/cities' && !isSelectedChilds }">
        <router-link to="/cities">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/city.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-city.svg"
                alt=""
              />
            </div>
            <div class="content">Cities</div>
          </div>
        </router-link>
      </li>
      <!-- balance -->
      <li :class="{ active: $route.path == '/balance' && !isSelectedChilds }">
        <router-link to="/balance">
          <div class="list">
            <div class="svg">
              <img class="black" src="../../assets/images/city.svg" alt="" />
              <img
                class="white"
                src="../../assets/images/white-city.svg"
                alt=""
              />
            </div>
            <div class="content">Balance</div>
          </div>
        </router-link>
      </li>
      <li
        @click="slectedChild('st')"
        :class="{
          active:
            isSelectedChilds == 'st' || $route.path.slice(0, 9) == '/settings',
        }"
      >
        <div class="list">
          <div class="svg">
            <img class="black" src="../../assets/images/settings.svg" alt="" />
            <img
              class="white"
              src="../../assets/images/white-setting.svg"
              alt=""
            />
          </div>
          <div class="content">Settings</div>
        </div>
      </li>
      <!-- Settings childs -->
      <div
        v-if="
          isSelectedChilds == 'st' || $route.path.slice(0, 9) == '/settings'
        "
      >
        <li
          :class="{
            activee: $route.path == '/settings/api-settings',
          }"
        >
          <router-link to="/settings/api-settings">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">API Settings</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/settings/notifications' && !isSelectedChilds,
          }"
        >
          <router-link to="/settings/notifications">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Notifications</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee: $route.path == '/settings/sms' && !isSelectedChilds,
          }"
        >
          <router-link to="/settings/sms">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">SMS</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/settings/payment-setting' && !isSelectedChilds,
          }"
        >
          <router-link to="/settings/payment-setting">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Payment Settings</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/settings/payment-method' && !isSelectedChilds,
          }"
        >
          <router-link to="/settings/payment-method">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Payment Method</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- frontend childs end -->
      <li
        @click="slectedChild('fe')"
        :class="{
          active:
            isSelectedChilds == 'fe' || $route.path.slice(0, 9) == '/frontend',
        }"
      >
        <div class="list">
          <div class="svg">
            <img class="black" src="../../assets/images/settings.svg" alt="" />
            <img
              class="white"
              src="../../assets/images/white-setting.svg"
              alt=""
            />
          </div>
          <div class="content">Frontend</div>
        </div>
      </li>
      <!-- frontend childs -->
      <div
        v-if="
          isSelectedChilds == 'fe' || $route.path.slice(0, 9) == '/frontend'
        "
      >
        <li
          :class="{
            activee: $route.path == '/frontend/privacy-policy',
          }"
        >
          <router-link to="/frontend/privacy-policy">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Privacy Policy</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/frontend/faqs' && !isSelectedChilds,
          }"
        >
          <router-link to="/frontend/faqs">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">FAQ's</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee: $route.path == '/frontend/terms' && !isSelectedChilds,
          }"
        >
          <router-link to="/frontend/terms">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Terms of Use</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/frontend/about-us' && !isSelectedChilds,
          }"
        >
          <router-link to="/frontend/about-us">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">About us</div>
            </div>
          </router-link>
        </li>
        <li
          :class="{
            activee:
              $route.path == '/settings/payment-method' && !isSelectedChilds,
          }"
        >
          <router-link to="/settings/payment-method">
            <div class="list">
              <div class="svg">
                <!-- <img src="../../assets/images/house.svg" alt="" /> -->
              </div>
              <div class="content">Payment Method</div>
            </div>
          </router-link>
        </li>
      </div>
      <!-- frontend childs end -->
    </ul>
    <ul class="logout-container">
      <li @click="logOut">
        <div class="list">
          <div class="svg">
            <img src="../../assets/images/logout.svg" alt="" />
          </div>
          <div class="content">Logout</div>
        </div>
      </li>
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
    logOut() {
      // localStorage.user = false;
      this.$cookies.remove("Authorization");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.menu-setUp {
  height: 480px;
  overflow-y: scroll;
}
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
  color: #fff;
}
.menu ul li.activee .list {
  background-color: #fecb12;
  color: #fff;
}
.menu ul li .svg {
  width: 18px;
  margin: 0 12px 0 14px;
  display: flex;
}
.menu ul li .svg .black {
  display: block;
}
.menu ul li.active .black {
  display: none;
}
.menu ul li .svg .white {
  display: none;
}
.menu ul li.active .white {
  display: block;
}
.menu ul li .content {
  position: relative;
  top: 2px;
  font-size: 14px;
}
.logout-container {
  position: absolute;
  bottom: 15%;
  width: 100%;
}
.menu-setUp::-webkit-scrollbar {
  width: 2px;
}

.menu-setUp::-webkit-scrollbar-track {
  background: transparent;
}
.menu-setUp::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>
