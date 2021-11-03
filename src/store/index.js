import { createStore } from "vuex";
import axios from 'axios';

const API_KEY = process.env.VUE_APP_API_KEY

export default createStore({
  state: {
    weather: {},
    location: {}
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    },
    setLocation(state, location) {
      state.location = location
    }
  },
  actions: {
    async fetchWeather({ commit }, city) {
      return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => {
          commit('setWeather', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchLocation({ commit }, location) {
      return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
        .then(response => {
          commit('setLocation', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchWeatherAndLocation({ dispatch }, location) {
      await dispatch('fetchLocation', location);
      await dispatch('fetchWeather', location.city);
    }
  },
  modules: {},
});
