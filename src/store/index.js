import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trainers:[],
    drafters:[],
  },
  mutations: {
    addTrainer(state, data){
      state.trainers.push(data)
    }
  },
  actions: {
    newTrainer({commit}, data){
      commit("addTrainer", data)
    }
  },
  modules: {
  }
})
