<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="user-profile">
        <Profile />
      </div>
      <div class="top-heading">
        <h2>Users</h2>
        <p>You can see all of the users here.</p>
      </div>
      <div class="add-btn">
        <div class="permissions-set">
          <h2>User Details</h2>
        </div>
      </div>
      <div class="service-container">
        <div class="inputs">
          <input type="text" placeholder=" Name" required />
          <input type="emailo" min="1" placeholder="Email" required />
          <input type="number" placeholder="Phone Number" required />
        </div>
      </div>
    </section>
    <!-- app users -->
    <section class="main-wrapper">
      <div class="add-btn">
        <div>
          <h2>Permissions</h2>
        </div>
      </div>
      <div class="service-container">
        <div class="service-detail">
          <table>
            <tr>
              <th></th>
              <th>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                  <label for="cb">View</label>
                </div>
              </th>
              <th>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                  <label for="cb">Create</label>
                </div>
              </th>
              <th>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                  <label for="cb">Edit</label>
                </div>
              </th>
              <th>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                  <label for="cb">Delete</label>
                </div>
              </th>
            </tr>
            <!-- <tr v-for="(deal, index) in serviceList" :key="index"> -->
            <tr>
              <td>Dashboard</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Categories</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Deals</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Vendors</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Bookings</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Cancelation Requests</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Users</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Services</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Cities</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Balance</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
            <!-- block -->
            <tr>
              <td>Settings</td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" checked/>
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input id="cb" type="checkbox" class="checkboxField" />
                </div>
              </td>
            </tr>
          </table>
          <div class="add-user">
            <button>Add user</button>
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import Profile from "@/components/common/Profile.vue";

export default {
  name: "DealsView",
  components: {
    DefaultLayout,
    Profile,
  },
};
</script>
<style scoped>
.service-container .inputs {
  display: flex;
  flex-wrap: wrap;
}
.service-container .inputs input {
  outline: none;
  font-size: 12px;
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  width: 25%;
  margin: 20px 12px 20px 0px;
}
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
  /* box-shadow: 0px 0px 39px #00000012;
  border-radius: 11px; */
  opacity: 1;
  /* background: #fff; */
}

.service-detail table th {
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  /* border-bottom: 1px solid #eee; */
  padding: 15px;
}
.service-detail table td {
  padding: 15px;
  text-align: left;
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
  font-size: 14px;
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

.permissions-set {
  margin-top: 14px;
}
.add-user {
  text-align: center;
}
.add-user button {
  margin-top: 30px;
  border: none;
  outline: none;
  border-radius: 30px;
  background: #febb12;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  width: 17%;
}
</style>
