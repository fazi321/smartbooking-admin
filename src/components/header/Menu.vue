<template>
  <section class="nav">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/hotel">Apartments</router-link></li>
      <li><router-link to="/hotel">Farms</router-link></li>
      <li><router-link to="/hotel">Hotels</router-link></li>
      <li><router-link to="/hotel">Resorts</router-link></li>
      <li><router-link to="#">Lounges</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "webMenu",
};
</script>

<style scoped>
.nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* position:relative;
  left:30px; */
}

.nav ul li a {
  letter-spacing: 0.38px;
  color: gray;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 30px;
}

.nav ul li a:hover {
  color: #FEBB12;
}
@media only screen and (max-width: 1199px) {
  .nav {
    display: none;
  }
}
</style>
