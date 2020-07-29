
import Vue from 'vue';
import store from '@/store';
import App from '@/views/App.vue';
import plugins from '@/plugins.js';

// fontawesome 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheckCircle, faCog } from '@fortawesome/free-solid-svg-icons';

// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(plugins);

// fontawesome icons
library.add( faCheckCircle, faCog );
Vue.component('fa-icon', FontAwesomeIcon);


new Vue({
	store,
  render: h => h(App)
}).$mount('#app');



