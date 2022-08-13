<template>
  <section class="facilities-container">
    <h5>Amenities</h5>
    <!-- Sports -->
    <div class="facility-icons">
      <h6>Sports</h6>
      <div class="facility-card">
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/gym.svg" alt />
              </div>
            </div>
            <p>Gym</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/bill.svg" alt />
              </div>
            </div>
            <p>Billiard</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/tenis.svg" alt />
              </div>
            </div>
            <p>Tennis Court</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/air.svg" alt />
              </div>
            </div>
            <p>Air Hockey</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/soccer.svg" alt />
              </div>
            </div>
            <p>Soccer Field</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/vollybal.svg" alt />
              </div>
            </div>
            <p>Vollyball</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sports -->
    <!-- Leisure -->
    <div class="facility-icons">
      <h6>Leisure</h6>
      <div class="facility-card">
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/steam.svg" alt />
              </div>
            </div>
            <p>Steam Bath</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/indoor.svg" alt />
              </div>
            </div>
            <p>Indoor Swimming Pool</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/outdoor.svg" alt />
              </div>
            </div>
            <p>Outdoor Swimming Pool</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/heater.svg" alt />
              </div>
            </div>
            <p>Swimming Pool Heater</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/playground.svg" alt />
              </div>
            </div>
            <p>Playground</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/tub.svg" alt />
              </div>
            </div>
            <p>Hot Tub</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Leisure -->
    <!-- Home Amenities -->
    <div class="facility-icons">
      <h6>Home Amenities</h6>
      <div class="facility-card">
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/hour.svg" alt />
              </div>
            </div>
            <p>24 Hours Access</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/wheelchair.svg" alt />
              </div>
            </div>
            <p>Wheelchair Access</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/entrance.svg" alt />
              </div>
            </div>
            <p>Private Entrance</p>
          </div>
        </div>
        <div class="icon-card">
          <div>
            <div class="icon-img">
              <div>
                <img src="../../assets/images/doorman.svg" alt />
              </div>
            </div>
            <p>Doorman</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Amenities -->
  </section>
</template>

<script>
export default {
  name: "DetailFacilities"
};
</script>

<style scoped>
.facilities-container {
  padding: 20px 0;
}
.facilities-container h5 {
  font-size: 18px;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  padding-bottom: 50px;
}
.facility-icons {
  padding: 0px 0 50px 0;
}
.facility-icons h6 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.8;
  font-size: 12px;
}
.facility-card {
  display: flex;
  padding-top: 30px;
}
.facility-card .icon-card {
  width: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.facility-card .icon-card > div {
  /* width: 90px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.facility-card .icon-card .icon-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #00000012;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.facility-card .icon-card .icon-img div {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.facility-card .icon-card .icon-img img {
  width: 100%;
  height: 100%;
}
.facility-card .icon-card p {
  font-size: 14px;
  text-align: center;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  padding: 10px 0;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* white-space: nowrap; */
}
</style>