<template>
	<div v-if="profileData.length > 0">
		<app-title-detail/>
		<b-img thumbnail rounded="circle"  :src="profileData[0].avatar"></b-img>
		<p><label class="lb-profile">ID: </label> {{ profileData[0].id}}</p>
		<p><label class="lb-profile">Full name: </label> {{profileData[0].first_name}} {{profileData[0].last_name}}</p>
		<b-button variant="success" :disabled="disableEdit" @click="updateCheckedit">
			<b-spinner small type="grow"></b-spinner>
			EDIT INFO
		</b-button>
		<div v-if="getCheckedit" class="edit-form">
			<b-row>
				<b-col sm="3"><label class="lb-profile">First name </label></b-col>
				<b-col sm="9"><b-form-input :value="profileData[0].first_name" @input="updateFirstnam" type="text"></b-form-input></b-col>
			</b-row>
			<b-row>
				<b-col sm="3" class="col-3"><label class="lb-profile">Last name </label></b-col>
				<b-col sm="9" class="col-9"><b-form-input :value="profileData[0].last_name" @input="updateLastname" type="text"></b-form-input></b-col>
			</b-row>
			<b-button variant="danger" @click="updateCheckedit">Cancel</b-button>
			<b-button variant="success" @click="updateButton">Update</b-button>
		</div>
	</div>
	
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex'
import AppTitleDetail from './TitleDetail'

export default {
	data() {
		return {
			firstName: '',
			lastName: ''
		}
	},
	computed: {
		...mapState([
			'profileData',
			'disableEdit'
		]),
		...mapGetters([
			'getCheckedit'
		])
	},
	components: {
		AppTitleDetail
	},
	methods: {
		...mapActions(['updateCheckedit']),
		updateInfo(event){
			this.$store.state.profileData[0].first_name = 'nero';
		},
		updateFirstnam(value) {
			this.firstName = value
			
		},
		updateLastname(value) {
			this.lastName = value
			
		},
		updateButton() {
			if(this.firstName != "") {
				this.$store.state.profileData[0].first_name = this.firstName
				this.firstName = ""
			}
			if(this.lastName != "") {
				this.$store.state.profileData[0].last_name = this.lastName
				this.lastName = ""
			}
		}

	}
};

</script>

<style>
p{
	font-size: 16px;
	color: #008080;
	vertical-align: middle;
	margin-bottom: 5px;
	font-weight: 600;
}
.lb-profile{
	color: black;
	font-size: 16px;
	font-weight: 500;
}
.edit-form{
	margin-top: 15px;
	margin-bottom: 10px;
}
.col-9{
	margin-top: 10px;
	margin-bottom: 10px;
}
.col-3{

}
</style>