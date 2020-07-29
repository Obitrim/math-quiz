import '@/assets/scss/main.scss';
import GlobalComponents from '@/components/global.js';

export default {
	install(Vue){

		for(let component in GlobalComponents){
			Vue.component(component, GlobalComponents[component]);
		}
	}
};