import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5,
    allProjects:[],
    projects:[],
    tag:null
  },


  actions:{
    loadProjects({commit,state}) {
        axios.get('./../static/data.json')
            .then((response)=>{
                commit("FETCH_PROJECTS",response.data.projects)
                commit("FILTER_PROJECTS",state.tag)
            })
    },

    filterProjects({commit},tag){
      commit("FILTER_PROJECTS",tag)
    }


  },

  getters:{
      projects(state){
        return state.projects
      }
  },


  mutations: {


    FETCH_PROJECTS(state,projects){
        state.allProjects = projects
    },

    FILTER_PROJECTS(state,tag){
      console.log("filter tag",tag)
      state.tag = tag
      if(tag == null){
        state.projects = state.allProjects.concat([]);
      }else{
        console.log(state.allProjects)
          state.projects = state.allProjects.filter (o =>{
            console.log("filter in ",o.tags)
            return o.tags.indexOf(tag) > -1
          })
      
      }
    }

  }
})
