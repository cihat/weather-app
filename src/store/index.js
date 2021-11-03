import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    weather: {},
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather;
    }
  },
  actions: {
    fetchWeather({ commit }, city) {
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_API_KEY}`)
        .then(response => {
          commit('setWeather', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {},
});
