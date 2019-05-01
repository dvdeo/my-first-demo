<template>
	<div>
		<h2>{{title}}</h2>
		<hr>
	</div>
	
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState([
			'title'
		])
	}
};

</script>

<style>
	
</style>