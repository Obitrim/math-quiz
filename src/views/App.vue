<template>
	<div id="app">
		<transition name="flip" mode="out-in">
			<component 
				:is="currentView" 
				@showQuizView="currentView = 'AppQuiz'"
				@showHomeView="currentView = 'AppHome'"
				/>
		</transition>
	</div>
</template>

<script>
import AppHome from '@/views/AppHome.vue';
import AppQuiz from '@/views/AppQuiz.vue';

export default {
	components: {
		AppHome,
		AppQuiz
	},

	data(){
		return {
			currentView: "AppHome"
		}
	}
};
</script>