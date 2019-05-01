<template>
	<div>
		<b-table
	         id="my-table"
	         :busy="isBusy"
	         responsive
	         small
	         outlined
	         striped
	         fixed
	         hover
	         :items="items"
	         :fields='fields'
	         :per-page='perPage'
	         :current-page='currentPage'
	         selectable
             select-mode='single'
             selectedVariant='success'
             @row-selected="updateProfile"
             >
               <template slot="avatar" slot-scope="data">
                 <b-img thumbnail rounded="circle" :src="`${data.value}`"></b-img>

              </template>
     	</b-table>
	</div>
	
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	data () {
		return {
			fields: [
	        {key: 'id', label: "ID", sortable: true },
	        {key: 'avatar', label: "Avatar" },
	        {key: 'first_name', label: "First name" },
	        {key: 'last_name', label: "Last name" },
      		],
      		isBusy: false
      		
		}
	},
	mounted() {
    	this.$store.dispatch('loadApi')
  	},

	computed: {
		...mapState([
			'items',
			'perPage',
			'currentPage'
		])
	},
	methods: {
		...mapActions(['updateProfile'])
	}
};

</script>

<style>
#my-table th{
	color: #008080;
}
</style>