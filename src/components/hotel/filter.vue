<template>
  <section class="filters-container">
    <div>
      <h6>Filters</h6>
    </div>
    <div class="filter-buttons">
      <div class="filter-option">
        <img src="../../assets/images/sort.svg" />
        <select name="sort">
          <option value>Sort by</option>
          <option value>Price low to high</option>
          <option value>Price high to low</option>
          <option value>Discount low to high</option>
        </select>
      </div>
      <div class="filter-option">
        <img src="../../assets/images/type.svg" />
        <select name="sort">
          <option value>Property Type</option>
          <option value>Price low to high</option>
          <option value>Price high to low</option>
          <option value>Discount low to high</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ApartFilter"
};
</script>

<style scoped>
.filters-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.filters-container div h6 {
  color: #0e4763;
  font-size: 18px;
}
.filter-buttons {
  display: flex;
}
.filter-buttons .filter-option {
  border: 1px solid #0e4763;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 100%;
 
}
.filter-buttons .filter-option img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.filter-buttons .filter-option select {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 70%;
   cursor: pointer;
   padding: 10px 0;
}
</style>