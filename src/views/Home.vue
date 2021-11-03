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
    <p>{{ city }}</p>
    <div class="result">
      <p v-if="errMessage">{{ errMessage }}</p>
      <p v-else-if="isLoading">Please wait..⌛️.</p>
      <p v-else>{{ JSON.stringify(weather) }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: "Home",
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
    this.weather = {
      hello: "helloo",
    }
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

<style lang="scss"></style>
