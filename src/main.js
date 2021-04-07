import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import reactiveStorage from "vue-reactive-storage";
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import storeLike from './store.js';

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(Vuex);

// must contain all proxied data fields
Vue.use(reactiveStorage, {
    "version": '0.1',
    projects: [
      // {name: 'Pro 1', openTaskFirst: '0', openTaskLength: '0', closedTaskFirst: '0', closedTaskLength: '0'},
      //  {name: 'Pro 2', openTaskFirst: '0', openTaskLength: '0', closedTaskFirst: '0', closedTaskLength: '0'},
      ],
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: new Vuex.Store(storeLike),
  data() {
    return {
      showWhich: 'DynamicOne'
    }
  }
}).$mount('#app')


