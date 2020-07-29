import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		settings: {
			lowerLimit: 0,
			upperLimit: 100,
		}
	}
});