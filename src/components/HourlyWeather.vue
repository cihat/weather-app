<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
  name: "HourlyWeather",
  computed: {
    ...mapGetters({
      weather: "getWeather",
    }),
  },
}
</script>

<template>
  <div class="d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2">
    <div
      className="d-flex flex-column col-2 align-items-center px-4 "
      key="{hour.dt}"
    >
      <p className="h-25">{time}</p>
      <p className="text-primary">
        {hour.pop > 0 ? Math.round(hour.pop * 100) + '%' : ''}
      </p>
      <figure>
        <img
          className="img-fluid weather-img"
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
        />
      </figure>

      <p className="">{{ weather.main.temp }}</p>
    </div>
  </div>
</template>

<style></style>
