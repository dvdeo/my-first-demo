<template>
	<div v-if="profileData.length > 0">
		<app-title-detail/>
		<b-img thumbnail  :src="profileData[0].avatar"></b-img>
		<p>{{profileData[0].first_name}} {{profileData[0].last_name}}</p>
	</div>
	
</template>

<script>
import { mapState } from 'vuex'
import AppTitleDetail from './TitleDetail'

export default {
	computed: {
		...mapState([
			'profileData'
		])
	},
	components: {
		AppTitleDetail
	}
};

</script>

<style>
	
</style>