import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

//Layouts
import Clean from '@/layouts/Clean.vue';
import Default from '@/layouts/Default.vue';


Vue.config.productionTip = false

Vue.component('clean-layout', Clean);
Vue.component('default-layout', Default);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
