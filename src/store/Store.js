import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5,
    projects:[]
  },


  actions:{
    loadProjects({commit}) {
        axios.get('./../static/data.json')
            .then((response)=>{
                commit("FETCH_PROJECTS",response.data.projects)
            })
    }


  },

  getters:{
      projects(state){
        return state.projects
      }
  },


  mutations: {
    increment (state) {
      state.count++
    },

    FETCH_PROJECTS(state,projects){
        state.projects = projects
    }
  }
})
