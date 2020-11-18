import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(store)
    .use(router)
    .use(VueApexCharts)
    .mount('#app');


