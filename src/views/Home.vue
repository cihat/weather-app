<script>
import { mapActions, mapState } from "vuex"
import CurrentWeather from "@/components/CurrentWeather.vue"
import HourlyWeather from "@/components/HourlyWeather.vue"
import DailyWeather from "@/components/DailyWeather.vue"
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  windDegreeToText,
} from "@/helpers/temprature"
import renderjson from "renderjson"

export default {
  name: "Home",
  components: {
    CurrentWeather,
    HourlyWeather,
    DailyWeather,
  },
  data() {
    return {
      city: "Elazıg",
      errMessage: "",
      isLoading: true,
    }
  },
  computed: {
    ...mapState(["weather"]),
  },
  created() {
    this.getWeather()
  },
  methods: {
    ...mapActions(["fetchWeather"]),
    async getWeather(city) {
      try {
        await this.fetchWeather(this.city || city)
      } catch (error) {
        this.errMessage = error.message
      } finally {
        this.isLoading = false
      }
    },
    kelvinToCelsius(temp) {
      return kelvinToCelsius(temp)
    },
    renderjson(object) {
      return renderjson(object)
    },
  },
  filters: {},
}
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Weather App</h1>
      <input
        type="text"
        name="input-city"
        id="weather"
        v-model="city"
        v-on:keyup.enter="getWeather"
      />
      <!-- <p>{{ city }}</p> -->
      <p>Temperature</p>
      <p>{{ kelvinToCelsius(weather.main.temp) }}</p>
      <div class="image_wrapper">
        <img
          className="img-fluid weather-img"
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
          :alt="weather.weather[0].description"
        />
      </div>
      <!-- <pre>{{ JSON.stringify(weather, null, 2) }}</pre> -->
      <div>{{ renderjson(weather) }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 30px);
  overflow-y: hidden;
  background-color: #f5f5f5;
  background: url("../assets/images/bg.jpeg") no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;

  .wrapper {
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    height: 90%;
    padding: 1rem;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 1rem;
    }

    .image_wrapper {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100px;
      margin: auto;
      img {
        width: 100%;
        height: auto;
      }
    }

    .render_json {
    }
  }
}
</style>
