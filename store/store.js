import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    getAllNews: '',
    getAllDonation: '',
    getAllBanner: '',
    getCampaign: '',
    getCoreTeam:'',
  },

  mutations: {
    getAllNews(state, payload) {
      state.getAllNews = payload
      console.log('======== mutation data', state.getAllNews)
    },
    getAllDonation(state, payload) {
      state.getAllDonation = payload
      console.log('======== mutation data Donation', state.getAllDonation)
    },
    getAllBanner(state, payload) {
      state.getAllBanner = payload
      console.log('========= mmmmmmmm banner======= kkkkkkk', state.getAllBanner)
    },
    getAllCampaign(state, payload) {
      state.getCampaign = payload
      console.log('========= campaign 666666666666 ======= ', state.getCampaign)
    },
    getAllCoreTeam(state, payload) {
      state.getCoreTeam = payload
      console.log('===== -------- core team -----------======', state.getCoreTeam)
    }
    // profileBind (state , payload) {
    //   console.log('[[[[[[[[[[[[[[[[[[[[[[[[[', payload.data)
    //   state.profileImg = payload.data
    // }
  },

  actions: {


    // ============================================= get the all news data ////////

    getNewsData({
      commit
    }) {
      console.log('========== inside store ==========')
      axios.post('http://localhost:3000/news/getNewsDetail')
        .then((backendData) => {
          console.log('============= result group data .....', backendData)
          commit('getAllNews', backendData.data)
        }).catch((error) => {
          console.log('=========== error', error)
          commit('getAllNews', error)
        })
    },
    getDonationData({
      commit
    }) {
      console.log('========== inside store ==========')
      axios.post('http://localhost:3000/donations/getDonation')
        .then((backendData) => {
          console.log('============= result group data .....', backendData)
          commit('getAllDonation', backendData.data)
        }).catch((error) => {
          console.log('=========== error', error)
          commit('getAllDonation', error)
        })
    },
    getBannerSection({
      commit
    }) {
      axios.post('http://localhost:3000/bannerCard/getBanner')
        .then((backendData) => {
          console.log('============= result group data banner .....', backendData.data[0].file_name)
          console.log('========== banner section data ........', backendData.data)
          commit('getAllBanner', backendData.data)
        }).catch((error) => {
          console.log('=========== error', error)
          commit('getAllBanner', error)
        })
    },
    getCampaign({
      commit
    }) {
      axios.post('http://localhost:3000/campaign/getCampaign')
        .then((backendData) => {
          console.log('============= result group data campaign .....', backendData.data[0].file_name)
          console.log('========== campaign section data ........', backendData.data)
          commit('getAllCampaign', backendData.data)
        }).catch((error) => {
          console.log('=========== error', error)
          commit('getAllCampaign', error)
        })
    },
    getCoreTeam({commit}) {
      axios.post('http://localhost:3000/coreTeam/getCoreTeam')
        .then((backendData) => {
          console.log('============= result group data core Team .....', backendData.data[0].file_name)
          console.log('========== core team section data ........', backendData.data)
          commit('getAllCoreTeam', backendData.data)
        }).catch((error) => {
          console.log('=========== error', error)
          commit('getAllCoreTeam', error)
        })
    },





















    // ====================================================delete the group  ////////

    deleteGroup({
      commit
    }, GroupId) {
      console.log('----the group id =======', GroupId)
      axios.delete(`http://localhost:3000/questionnaire/deleteGroup/${GroupId}`)
        .then((result) => {
          console.log('============= the delete group result==========', result)
        }).catch((error) => {
          console.log('======== the delete group error=======', error)
        })
    },


    // ================================================= save the group name so update the name //////

    saveGroup({
      commit
    }, groupData) {
      console.log('@@@@@@@@@@', groupData)
      console.log(groupData.id)
      var bodyData = {
        que_group_name: groupData.name
      }
      console.log('CCCCCCCCCCCCCCCCCCC', bodyData)
      axios.put(`http://localhost:3000/questionnaire/updateGroup/${groupData.id}`, bodyData)
        .then((result) => {
          console.log('RRRRRRRRRRRRR', result)
        }).catch((err) => {
          console.log('EEEEEEEEEEEEEE', err)
        })
    },


    // ======================================== update image    ///////////

    changeProfile({
      commit
    }, profileData) {
      console.log('=== the profile data in store ===', profileData.group_id)
      console.log('==== the profile data in image === ', profileData.group_image)
      axios.post(`http://localhost:3000/questionnaire/uploads/${profileData.group_id}`, profileData.group_image)
        .then((resultProfileChange) => {
          console.log('------- the result of profile change ------', resultProfileChange.data)
          commit('profileBind', resultProfileChange)
        }).catch((err) => {
          console.log('-- the error of profile change-----', err)
          commit('profileBind', resultProfileChange)
        })
    },

    // ==================== muniraj ======= save new group inser ========= ///////////

    saveInsertGroup({
      commit
    }, postData) {
      let config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('http://localhost:3000/questionnaire/insertGroup', postData, config)
        .then((result) => {
          console.log('========= the data of result === ', result)
        }).catch((err) => {
          console.log('ddddddddddddddddd', err)
        })
    },

  }
});
