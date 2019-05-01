<template>
	<div>
		<b-pagination
			@input="updateCurrentpage"
			:total-rows="getItemlength"
			:per-page="perPage"
			aria-controls="my-table"
			align="center">

		</b-pagination>
		
	</div>
	
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapState([
			'currentPage',
			'perPage'
		]),
		...mapGetters(['getItemlength'])
	},
	methods: {
		...mapActions(['updateCurrentpage', 'updateFirstname'])
	}
};

</script>

<style>
	
</style>