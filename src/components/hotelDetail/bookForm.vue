<template>
  <section class="form-book">
    <div class="book-container">
      <div class="heading">
        <h6>SAR 120 </h6>
        <p>Per Night</p>
      </div>
      <div class="filter-option">
        <img src="../../assets/images/date.svg" />
        <input type="text" placeholder="Check-in date" />
      </div>
      <div class="filter-option">
        <img src="../../assets/images/date.svg" />
        <input type="text" placeholder="Check-out date" />
      </div>
      <div class="filter-option">
        <img src="../../assets/images/time.svg" />
        <input type="text" placeholder="Check-in time" />
      </div>
      <div class="filter-option">
        <img src="../../assets/images/time.svg" />
        <input type="text" placeholder="Check-out time" />
      </div>
      <div class="book-btn" @click="BookingModelShow">
        <button>Book</button>
      </div>
    </div>
      <BookModel v-if="bookingModel" />
  </section>
</template>

<script>
import BookModel from "@/components/models/BookModel.vue";
export default {
  components: {
    BookModel
  },
  data() {
    return {
      bookingModel: false,
    };
  },
  methods: {
    BookingModelShow() {
      this.bookingModel = !this.bookingModel;
    },
  }
};
</script>

<style scoped>
.form-book {
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 20px;
  opacity: 1;
  min-height: 500px;
}
.book-container {
  padding: 15px 30px;
}
.book-container .heading {
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 20px 0;
}
.book-container .heading h6 {
  font-size: 24px;
  text-align: center;
  letter-spacing: 2.04px;
  color: #febb12;
  opacity: 1;
  font-weight: 600;
  margin-right: 10px;
}
.book-container .heading p {
  letter-spacing: 1.18px;
  color: #000000;
  opacity: 0.4;
  font-size: 14px;
}
.book-container .filter-option {
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 53px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  cursor: pointer;
  margin-top: 20px;
}
.book-container .filter-option img {
  width: 18px;
  height: 18px;
  margin-right: 15px;
}
.book-container .filter-option input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 100%;
  padding: 20px 0;
}
.book-btn {
  margin: 30px;
}
.book-btn button {
  border: none;
  outline: none;
  padding: 15px 50px;
  text-align: center;
  letter-spacing: 0px;
  color: #04304b;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 53px;
  opacity: 1;
  background: #febb12;
  cursor: pointer;
}
</style>