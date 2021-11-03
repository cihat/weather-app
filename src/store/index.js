import { createStore } from "vuex";
import axios from 'axios';

const API_KEY = process.env.VUE_APP_API_KEY

export default createStore({
  state: {
    weather: {},
  },
  getters: {
    getWeather: state => (state.weather),
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    },
  },
  actions: {
    async fetchWeather({ commit }, city) {
      return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => JSON.parse(JSON.stringify(response.data)),)
        .then(response => {
          commit('setWeather', response);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  modules: {},
});
