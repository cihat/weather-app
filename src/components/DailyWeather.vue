<script>
import { mapState, mapActions, mapGetters } from "vuex"
import moment from "moment"

export default {
  name: "DailyWeather",
  computed: {
    ...mapGetters({
      weather: "getWeather",
    }),
  },
}
</script>

<template>
  <div className="container">
    <div className="mb-4 list-group list-group-flush">
      <div
        className="list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom text-center day-header"
      >
        <div
          className="col text-left d-none d-md-block d-lg-block d-xl-block text-muted"
        >
          <small>DAY</small>
        </div>
        <div
          className="col d-none d-md-block d-lg-block d-xl-bloc text-mutedk"
        ></div>
        <div className="col d-none d-md-block d-lg-block d-xl-block text-muted">
          <small>CHANCE OF RAIN</small>
        </div>
        <div className="col d-none d-md-block d-lg-block d-xl-block text-muted">
          <small>HUMIDITY</small>
        </div>
        <div
          className="col text-right d-none d-md-block d-lg-block d-xl-block text-muted"
        >
          <small>TEMPERATURE</small>
        </div>
      </div>
      <div class="weather">
        <ul v-if="weather">
          <li v-for="(day, index) in weather" :key="index">
            <div
              key="{day.dt}"
              className="list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom"
            >
              <div className="col">
                <p className="mb-0">{{ moment.unix(day.dt).format("dddd") }}</p>
              </div>
              <div className="col px-2 text-center">
                <img
                  className="img-fluid weather-img"
                  alt="{day.weather[0].description}"
                  :src="`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`"
                />
              </div>
              <div
                className="col d-none d-md-block d-lg-block d-xl-block text-center"
              >
                {{ Math.round(day.pop * 100) }}%
              </div>
              <div className="col d-none d-md-block text-center">
                { {day.humidity}}%
              </div>
              <div className="col d-flex flex-row justify-content-end">
                <p className=" mb-0">{{ day.temp.max }}</p>
                <p className=" ml-2 mb-0">{{ day.temp.min }}</p>
              </div>
            </div>
          </li>
        </ul>
        <div v-else>
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
