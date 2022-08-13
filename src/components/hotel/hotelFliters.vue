<template>
  <section class="apartments-filters">
    <div class="inner">
      <!-- location section  -->
      <section class="location-filter">
        <h6>Location Filter</h6>
        <div class="form">
          <div class="option">
            <select name="sort">
              <option value>Destination</option>
              <option value>Price low to high</option>
              <option value>Price high to low</option>
              <option value>Discount low to high</option>
            </select>
          </div>
          <div class="option">
            <select name="sort">
              <option value>District</option>
              <option value>Price low to high</option>
              <option value>Price high to low</option>
              <option value>Discount low to high</option>
            </select>
          </div>
          <div class="option">
            <select name="sort">
              <option value>Direction</option>
              <option value>Price low to high</option>
              <option value>Price high to low</option>
              <option value>Discount low to high</option>
            </select>
          </div>
        </div>
      </section>
      <!-- location section  -->
      <!-- other filter section  -->
      <section class="location-filter">
        <h6>Other Filter</h6>
        <form class="form">
          <label class="checkbox-container">
            Available Only
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Offers Only
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <div class="input">
            <input type="text" placeholder="Search by property name" />
          </div>
          <div class="input">
            <input type="text" placeholder="Search by unit name" />
          </div>
        </form>
      </section>
      <!-- other filter section  -->
      <!-- Vacation Rental section  -->
      <section class="location-filter">
        <h6>Vacation Rental types</h6>
        <form class="form">
          <label class="checkbox-container">
            Room
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            House
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Farm
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Resort
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Chalet
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Vacation Rental section  -->
      <!-- Gathern Choices Filters section  -->
      <section class="location-filter">
        <h6>Gathern Choices Filters</h6>
        <div class="form">
          <div class="gathern">
            <h5>Unique</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec aliquot dolor a vulputate dapibus, sem velit tempus</p>
            <p>mi, sit amet blandit lorem elit vel ligula.</p>
          </div>
          <div class="gathern">
            <h5>Stable</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec aliquot dolor a vulputate dapibus, sem velit tempus</p>
            <p>mi, sit amet blandit lorem elit vel ligula.</p>
          </div>
        </div>
      </section>
      <!-- Gathern Choices Filters section  -->
      <!-- Price Filters section  -->
      <section class="location-filter">
        <h6>Price Filters</h6>
        <form class="form">
          <PriceSlider />
        </form>
      </section>
      <!-- Price Filters section  -->
      <!-- Space Filters section  -->
      <section class="location-filter">
        <h6>Space Filters</h6>
        <form class="form">
          <PriceSlider />
        </form>
      </section>
      <!-- Space Filters section  -->
      <!-- Review Filters section  -->
      <section class="location-filter">
        <h6>Review Filters</h6>
        <form class="form">
          <label class="checkbox-container">
            All
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +5 Excellent
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +4 Very Good
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +3 Good
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            +2 Fair
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Review Filters section  -->
      <!-- Bedroom Filters section  -->
      <section class="location-filter">
        <h6>Bedroom Filters</h6>
        <form class="form">
          <div class="bedrooms">
            <span>Rooms</span>
            <div class="count">
              <img src="../../assets/images/sub.png" />
              <span>2</span>
              <img src="../../assets/images/plus.png" />
            </div>
          </div>
          <div class="bedrooms">
            <span>Single Beds</span>
            <div class="count">
              <img src="../../assets/images/sub.png" />
              <span>2</span>
              <img src="../../assets/images/plus.png" />
            </div>
          </div>
          <div class="bedrooms">
            <span>Double Bed</span>
            <div class="count">
              <img src="../../assets/images/sub.png" />
              <span>2</span>
              <img src="../../assets/images/plus.png" />
            </div>
          </div>
        </form>
      </section>
      <!-- Bedroom Filters section  -->
      <!-- Bathroom Filters section  -->
      <section class="location-filter">
        <h6>Bathroom Filters</h6>
        <form class="form">
          <div class="bedrooms">
            <span>Rooms</span>
            <div class="count">
              <img src="../../assets/images/sub.png" />
              <span>2</span>
              <img src="../../assets/images/plus.png" />
            </div>
          </div>
          <label class="checkbox-container">
            Tissues
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Soap
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Bathtub
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Bathroom Filters section  -->
      <!-- Capacity Filters section  -->
      <section class="location-filter">
        <h6>Capacity Filters</h6>
        <form class="form">
          <div class="bedrooms">
            <span>Guests</span>
            <div class="count">
              <img src="../../assets/images/sub.png" />
              <span>2</span>
              <img src="../../assets/images/plus.png" />
            </div>
          </div>
        </form>
      </section>
      <!-- Capacity Filters section  -->
      <!-- Check-in & Check-out Filters section  -->
      <section class="location-filter">
        <h6>Check-in & Check-out Filters</h6>
        <form class="form">
          <div class="input">
            <input type="text" placeholder="Chekck-in time" />
          </div>
          <div class="input">
            <input type="text" placeholder="Check-out time" />
          </div>
        </form>
      </section>
      <!-- Check-in & Check-out Filters section  -->
      <!-- Pool Type Filters section  -->
      <section class="location-filter">
        <h6>Pool Type Filters</h6>
        <form class="form">
          <label class="checkbox-container">
            All
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Swimming pool with heat
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            No Pool
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Pool Type Filters section  -->
      <!-- Facilities Filters section  -->
      <section class="location-filter">
        <h6>Pool Type Filters</h6>
        <form class="form">
          <label class="checkbox-container">
            Internet
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Speakers
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Jacuzzi
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Facilities Filters section  -->
      <!-- Categories Filters section  -->
      <section class="location-filter">
        <h6>Categories Filters</h6>
        <form class="form">
          <label class="checkbox-container">
            Couples
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Families only
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Singles only
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Categories Filters section  -->
      <!-- Kitchen Facilities Filters section  -->
      <section class="location-filter">
        <h6>Kitchen Facilities Filters</h6>
        <form class="form last-block">
          <label class="checkbox-container">
            Oven
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Refrigerator
            <!-- <input type="checkbox" checked="" /> -->
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">
            Microwave
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </section>
      <!-- Kitchen Facilities Filters section  -->
    </div>
  </section>
</template>

<script>
import PriceSlider from "../hotel/priceSlider.vue";
export default {
  name: "HotelFilters",
  components: {
    PriceSlider
  }
};
</script>

<style scoped>
.last-block {
  border-bottom: none !important;
  padding-bottom: 40px !important;
}
.apartments-filters {
  box-shadow: 0px 0px 7px 1px #0000001a;
  border-radius: 18px;
  opacity: 1;
  height: 100%;
  width: 100%;
}
.apartments-filters .inner h6 {
  color: #0e4763;
  font-size: 14px;
  text-align: left;
  padding: 25px 15px 0 15px;
}
.apartments-filters .form {
  padding: 20px 15px;
  border-bottom: 0.5px solid #0000000f;
  text-align: left;
}

.apartments-filters .form .option {
  box-shadow: 0px 0px 8px #0000000f;
  border-radius: 28px;
  opacity: 1;
  padding: 0 15px;
  margin: 10px 0;
}
.apartments-filters .form select {
  border: none;
  outline: none;
  color: #a5a5a5;
  font-size: 12px;
  width: 100%;
  padding: 14px 0;
  cursor: pointer;
}
.apartments-filters .form .checkbox {
  margin: 10px 0 15px 0;
  display: flex;
  align-items: center;
}
.apartments-filters .form .input {
  margin-bottom: 15px;
}
.apartments-filters .form .input input {
  border: none;
  outline: none;
  color: #a5a5a5;
  font-size: 12px;
  width: 90%;
  box-shadow: 0px 0px 8px #0000000f;
  border-radius: 28px;
  opacity: 1;
  padding: 15px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000000;
  height: 25px;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #0000000f;
  opacity: 1;
}

/* .checkbox-container input:checked ~ .checkmark {
  background-color: #febb12;
} */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #febb12;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.gathern {
  padding-left: 15px;
  line-height: 1.7;
  margin-bottom: 15px;
}
.gathern h5 {
  color: #000000;
  font-size: 14px;
}
.gathern p {
  color: #000000;
  font-size: 10px;
}
.bedrooms {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.bedrooms > span {
  font-size: 14px;
  color: #000000;
}
.bedrooms .count {
  display: flex;
  align-content: center;
}
.bedrooms .count span {
  margin: 5px;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
}

.bedrooms .count img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
}
</style>