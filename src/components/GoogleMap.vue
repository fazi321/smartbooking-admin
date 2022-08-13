<template>
  <div class="location-set">
    <GMapMap
      :center="center"
      :zoom="zoom"
      :disableDefaultUI="true"
      :options="mapOptions"
      @center_changed="updateCenter"
      map-type-id="terrain"
      style="width: 100%; height: 20rem"
    >
      <!-- <GMapAutocomplete
        class="auto-input"
        placeholder="e.g: Bahria Town"
        @place_changed="setPlace"
      >
      </GMapAutocomplete> -->
      <!-- <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster> -->
    </GMapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      zoom: 7,
      center: { lat: 24.9582, lng: 46.7008 },
      currentRepo: {
        lat: "",
        lng: "",
      },
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        clickableIcons: false,
      }
      // markers: [
      //   {
      //     position: {
      //       lat: 38.093048,
      //       lng: 73.84212,
      //     },
      //   },
      // ],
    };
  },
  methods: {
    updateCenter(latLng) {
      this.currentRepo = {
        lat: latLng.lat(),
        lng: latLng.lng(),
      };
    },
    setPlace(place) {
      this.zoom = 8;
      this.center.lat = place.geometry.location.lat();
      this.center.lng = place.geometry.location.lng();
      this.currentRepo = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    },
    // submit() {
    //   if (!this.currentRepo.lat && !this.currentRepo.lng) return;
    //   this.$emit("latlng", this.currentRepo);
    // },
  },
};
</script>

<style>
.location-set {
  position: relative;
}
.location-set .auto-input {
  position: absolute;
  top: 10px;
  padding: 10px;
  left: 20%;
  min-width: 274px;
  border: none;
  font-size: 16px;
  outline: none;
}
.location-set .submit-btn {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.location-set .submit-btn button {
  padding: 16px 0px;
  color: #000;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #dbe9df, #99c7a5);
  font-size: 14px;
  min-width: 331px;
}
.location-set .vue-map{
  height: 14rem!important;
  border-radius: 20px!important;
}
</style>