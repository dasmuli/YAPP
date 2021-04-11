import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import VueGoogleCharts from 'vue-google-charts'
import storeLike from './store.js';
import './registerServiceWorker'

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(Vuex);
Vue.use(VueGoogleCharts)


Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  render: h => h(App),
  store: new Vuex.Store(storeLike),
}).$mount('#app')


