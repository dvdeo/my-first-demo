<template>
	<div>
		<b-row class="justify-content-md-center">
			<b-col>
				<h3>{{title}}</h3>
				<hr>
			</b-col>
		</b-row>
		
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