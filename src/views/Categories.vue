<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>Categories</h2>
        <p>You can see all the categories here. Also you can add new categories.</p>
      </div>
      <div class="add-btn">
        <button @click="CategoryeModelShow">Add New Category</button>
      </div>
      <div class="category-main">
        <div class="category-card">
          <div class="icon">
            <img class="hotel-icon" src="../assets/images/hotel-icon.png" />
          </div>
          <h6>Hotels</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/apartment.svg" />
          </div>
          <h6>Appartments</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/resort.svg" />
          </div>
          <h6>Resorts</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/forms.svg" />
          </div>
          <h6>Farms</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/lounges.svg" />
          </div>
          <h6>Lounges</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/staduim.svg" />
          </div>
          <h6>Staduims</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/chalets.svg" />
          </div>
          <h6>Chalets</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/camps.svg" />
          </div>
          <h6>Camps</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
        <div class="category-card">
          <div class="icon">
            <img src="../assets/images/hall.svg" />
          </div>
          <h6>Wedding Halls</h6>
          <div class="bottom-icons">
            <img src="../assets/images/edit.svg" />
            <img src="../assets/images/delete.svg" />
          </div>
        </div>
      </div>
      <CategoriesModel v-if="categoryModel" />
    </section>
  </default-layout>
</template>

<script>
import CategoriesModel from "@/components/Models/ModelCategories.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "CatView",
  components: {
    DefaultLayout,
    CategoriesModel
  },
  data() {
    return {
      categoryModel: false
    };
  },
  methods: {
    CategoryeModelShow() {
      this.categoryModel = !this.categoryModel;
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
.category-main {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  padding: 20px 0;
}
.category-card {
  width: calc(16% - 2px);
  margin-right: 18px;
  margin-bottom: 18px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}
.category-card .icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #f0f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.category-card .icon .hotel-icon{
  width: 45px!important;
}
.category-card .icon img {
  width: 60px;
  height: 50px;
}
.category-card h6 {
  letter-spacing: 0px;
  color: #6a6a6a;
  font-size: 14px;
  text-align: center;
  padding: 15px 0 10px 0;
  font-weight: normal;
}
.bottom-icons {
  display: flex;
  justify-content: space-between;
}
.bottom-icons img {
  width: 50px;
  margin: 0 5px;
}
</style>