<template>
	<div class="navbar">
		<label>Member per page:</label>
		<b-form-select :value="perPage" :options="options" @input="updatePerpage" size='sm'></b-form-select>
	</div>
	
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState([
			'perPage',
			'options'
		])
	},
	methods: {
		...mapActions(['updatePerpage'])
	}
};

</script>

<style>
.navbar {
	display: inline-flex;
}
</style>