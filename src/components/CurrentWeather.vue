<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  data() {
    return {
      weatherMain: "",
    }
  },
  computed: {
    ...mapGetters({
      weather: "getWeather",
    }),
  },
  methods: {
    logData() {
      console.log(JSON.parse(JSON.stringify(this.weather)))
      // console.log(Object.assign({}, this.weather))
      this.weatherMain = this.weather.weather[0].main
    },
  },
}
</script>

<template>
  <div>
    <p>{{ weather }}</p>
    <div className="d-flex flex-column align-items-center">
      <h2 className="location-name">{{ weather?.name }}</h2>
      <h4 className="weather-short-description">
        <!-- {{ this.weather?.weather[0]?.main }}test -->
        {{ weatherMain }}test
      </h4>
      <button @click="logData()">Show data</button>
      <h1 className="display-1 ml-3">{{ weather?.main?.temp }}</h1>
      <div className="d-flex">
        <p className="mx-1">H:{{ weather?.main?.temp_max }}</p>
        <p className="mx-1">L:{{ weather?.main?.temp_min }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
