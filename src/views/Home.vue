<script>
import { mapActions, mapState } from "vuex"
import CurrentWeather from "@/components/CurrentWeather.vue"
import HourlyWeather from "@/components/HourlyWeather.vue"
import DailyWeather from "@/components/DailyWeather.vue"

export default {
  name: "Home",
  components: {
    CurrentWeather,
    HourlyWeather,
    DailyWeather,
  },
  data() {
    return {
      city: "",
      localWeather: null,
      errMessage: "",
      isLoading: true,
    }
  },
  computed: {
    ...mapState(["weather"]),
  },
  created() {
    this.getWeather("Adıyaman")
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
  },
}
</script>

<template>
  <div class="home">
    <h1>Weather App</h1>
    <input
      type="text"
      name="input-city"
      id="weather"
      v-model="city"
      v-on:keyup.enter="getWeather"
    />
    <!-- <p>{{ city }}</p> -->
    <!-- <div class="result">
      <p v-if="errMessage">{{ errMessage }}</p>
      <p v-else-if="isLoading">Please wait..⌛️.</p>
      <p v-else>{{ JSON.stringify(weather) }}</p>
    </div> -->
    <div className="mb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 order-md-1 container">
          <CurrentWeather />
          <!-- :weather="weather" -->
        </div>
        <!-- <div className="col-md-8 order-md-2 container">
          <HourlyWeather />
        </div> -->
        <div className="col-md-12 order-md-5 mt-5">
          <DailyWeather temperature="{temperature}" />
        </div>
        <!--
        <div className="col-md-12 order-md-4 bg-dark pt-5 pb-5">
          <WeatherDescription temperature="{temperature}" />
        </div>
        <div className="col-12 my-5 text-center order-md-2">
          Today: {weather.current.weather[0].description}. The high will be{' '}
          {temperature(weather.daily[0].temp.max)}. The low tonight will be{' '}
          {temperature(weather.daily[0].temp.night)}.
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
