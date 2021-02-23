import { createApp } from 'vue'
// import Vue from 'vue'
import router from './router'
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// createApp(App).use(VueAxios, axios)
// const app = Vue.createApp(App)
// app.use(VueAxios, axios)
createApp(App).use(router).mount('#app')