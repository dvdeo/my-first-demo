<template>
	<div>
		<b-row class="justify-content-md-center">

			<b-col class="nav-col1" cols="3"><label>Item per page</label></b-col>
			<b-col class="nav-col2" cols="2"><b-form-select :value="perPage" :options="options" @input="updatePerpage" size='sm'></b-form-select></b-col>
		</b-row>
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
label{
	font-family: 'Helvetica';
}
.nav-col1{
	text-align: right;
}
.nav-col2{
	text-align: left;
	margin-top: -5px;
}
</style>