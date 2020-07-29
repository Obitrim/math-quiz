<template>
	<app-wrapper class="app-home">
		<app-content>
			<div class="app-content full-width bg-white py-5">
				<header class="text-center">
					<h1 class="mt-0">Maths 4kidz</h1>
				</header>
				<main class="d-flex justify-content-center">
					<div class="mt-3">
						<h3 class="text-center">Solve simple maths computations</h3>
						<ul class="my-3 operations">
							<li class="px-3 py-2 operation">
								<fa-icon icon="check-circle" class="mr-2 text_primary"/>
								Addition (+)
							</li>
							<li class="px-3 py-2 operation">
								<fa-icon icon="check-circle" class="mr-2 text_primary"/>
								Substraction (-)
							</li>
							<li class="px-3 py-2 operation">
								<fa-icon icon="check-circle" class="mr-2 text_primary"/>
								Division (/)</li>
							<li class="px-3 
							py-2 operation">
								<fa-icon icon="check-circle" class="mr-2 text_primary"/>
								Multiplication (*)
							</li>
						</ul> 

						<div class="text-center mt-4">
							<button type="button" class="btn w-50 bg-success text-white base-button" @click="$emit('showQuizView')">Start Quiz</button>
						</div>
					</div>
				</main>
			</div>
		</app-content>
	</app-wrapper>
</template>

<script>
import AppWrapper from '@/components/layouts/AppWrapper.vue';
import AppContent from '@/components/layouts/AppContent.vue';

export default {
	components: {
		AppWrapper,
		AppContent
	}
};
</script>