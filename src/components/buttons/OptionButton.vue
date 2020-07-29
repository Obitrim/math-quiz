<template>
	<button class="option-btn" @click="$emit('click', $event)">
		<span class="option-label">{{ label }}.</span>
		<span>{{ value }}</span>
	</button>
</template>

<script>

export default {
	props: {
		label: {
			type: String,
			default: 'A',
			validator: function(value){
				return value.length === 1;
			}
		},

		value: {
			type: Number,
			default: 0
		}
	}
};
</script>