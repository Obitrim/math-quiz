<template>
	<header class="header py-5">
		<app-content :contentClasses="['bg-white']">
			<section class="text-center">
				<slot name="math-expression" />
			</section>
		</app-content>
	</header>
</template>


<script>
import AppContent from '@/components/layouts/AppContent.vue';

export default {
	components: {
		AppContent
	}
};
</script>