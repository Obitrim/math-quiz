<template>
	<div class="container">
		<div class="row mx-3">
			<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 app-content" :class="contentClasses">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		contentClasses: Array
	}
};
</script>