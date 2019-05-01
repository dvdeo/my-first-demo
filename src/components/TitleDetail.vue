<template>
	<div>
		<h2>{{title_detail}}</h2>
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
}

</script>

<style>

</style>