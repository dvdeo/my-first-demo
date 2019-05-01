<template>
	<div>
		<h3>{{title_detail}}</h3>
		<hr>
	</div>
	
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState([
			'title_detail'
		])
	}
};

</script>

<style>

</style>