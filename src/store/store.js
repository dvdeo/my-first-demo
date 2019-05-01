import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export const store = new Vuex.Store({
  state: {
    items: [],
    title: 'MEMBER INFORMATION',
    title_detail: "PROFILE",
    options: [
          { value: 3, text: 3 },
          { value: 5, text: 5 },
          { value: 10, text: 10 }
    ],
    items: [],
    perPage: 3,
    currentPage: 1,
    selectMode: 'single',
    profileData: [],
    dataTemp: [],
    checkEdit: false,
    disableEdit: false
  },
  actions: {
    loadApi({commit}) {
      Axios.get('https://reqres.in/api/users?per_page=12')
      .then(function(response){
        let items = response.data.data
        commit('importData', items)
      })
      .catch(function (err) {
        console.log('An error occurred.' + err)
      });
    },
    updatePerpage({commit}, value) {
    	commit('updatePerpage', value)
    },
    updateCurrentpage({commit}, value) {
    	commit('updateCurrentpage', value)
    },
    updateFirstname({commit}) {
    	commit('updateFirstname')
    },
    updateProfile({commit}, value) {
    	commit('updateProfile', value)
    },
    updateCheckedit({commit}) {
      commit('updateCheckedit')
    }
  },
  mutations: {
  	// import data
    importData(state, items) {
      state.items = items
    },
    // update perpage
    updatePerpage(state, value) {
    	state.perPage = value
    },
    // update currentpage
    updateCurrentpage(state, value) {
    	state.currentPage = value 
    },
    updateFirstname(state) {
    	console.log(state.items[0])
    	state.items[0].first_name = "VanDeo"
    },
    updateProfile(state, value) {
    	state.profileData = value;
      if(state.checkEdit === true) {
        state.checkEdit = false
      }
      if(state.disableEdit === true) {
        state.disableEdit = false
      }
    },
    // update checkEdit
    updateCheckedit(state) {
      if(state.checkEdit === false) {
        state.checkEdit = true
        state.disableEdit = true
      } else {
        state.checkEdit = false
        state.disableEdit = false
      }
    }
  },
  getters: {
  	// get length of items
  	getItemlength: state => {
  		return state.items.length
  	},
    // get checkEdit
    getCheckedit: state => {
      return state.checkEdit
    }
  }
})