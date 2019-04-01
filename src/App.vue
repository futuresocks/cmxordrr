
<template lang="html">
  <div>
    <input type="text" v-model="postcode"/>
    <button @click="getCoords">Find your nearest comic shop</button>
  </div>
</template>

<script>
import LocationHelper from './models/LocationHelper'

export default {
  data(){
    return {
      coords: null,
      country: "",
      postcode: "",
      shops: [
        {
          name: "Forbidden Planet Glasgow",
          coords: {lat: 55.8624636, lng: -4.255389},
          email: "sales@forbiddenplanet.co.uk"
        },
        {
          name: "Forbidden Planet London",
          coords: {lat: 51.5151226, lng:-0.1295157},
          email: null,
          webform: "https://forbiddenplanet.com/contact/form/"
        }
      ],
      nearestShop: null
    }
  },
  methods: {
    getCoords(){
      fetch(`https://api.postcodes.io/postcodes/${this.postcode}`)
      .then(res => res.json())
      .then(data => {
        this.country = data.result.country;
        this.coords = {lat: data.result.latitude, lng: data.result.longitude}})
      .then(() => {
        const locator = new LocationHelper(this.coords, this.shops);
        this.nearestShop = locator.findNearest();
      })
      }
    }
  }
  </script>

  <style lang="css" scoped>
  </style>
