<template>
  <section class="cards-container">
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>12</h2>
      <h4>Updated today</h4>
    </div>
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>14</h2>
      <h4>Updated today</h4>
    </div>
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>16</h2>
      <h4>Updated today</h4>
    </div>
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>18</h2>
      <h4>Updated today</h4>
    </div>
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>20</h2>
      <h4>Updated today</h4>
    </div>
    <div class="card">
      <h1>Total Categories</h1>
      <h4>06/06/2022</h4>
      <h2>22</h2>
      <h4>Updated today</h4>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cards-container {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  padding: 20px 0 6px 0;
}
.cards-container .card {
  text-align: center;
  margin: 0 0 -12px 0px;
  width: 15%;
  background: #fff;
  padding: 14px;
  border-radius: 5px;
}
.cards-container .card h1 {
  font-size: 14px;
  margin-bottom: 10px;
}
.cards-container .card h4 {
  font-size: 12px;
  color: #bfbfbf;
}
.cards-container .card h2 {
  font-size: 19px;
  color: #febb12;
  margin: 10px 0;
}
/* .cards-container .card:nth-child(4n+0) {
  margin-right: 0;
} */
</style>