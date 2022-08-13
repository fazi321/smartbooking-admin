<template>
  <div class="menu">
    <ul>
      <li :class="{ active: $route.path == '/dashboard' && !isSelectedChilds }">
        <router-link to="/dashboard">
          <div class="list">
            <div class="svg">
              <img src="../../assets/images/house.svg" alt="" />
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
              <img src="../../assets/images/house.svg" alt="" />
            </div>
            <div class="content">Categories</div>
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
            <img src="../../assets/images/house.svg" alt="" />
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
  width: 20px;
  margin: 0 12px 0 14px;
  display: flex;
}
.menu ul li .content {
  position: relative;
  top: 2px;
}
</style>