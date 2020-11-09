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
    },
    undoLast(state, index){
      state.trainers.forEach(t => t.drafting.splice(index, 1))
      state.trainers = state.trainers
    }
  },
  actions: {
    newTrainer({commit}, data){
      commit("addTrainer", data)
    },
    undoLast({commit}, num){
      commit('undoLast', num)
    }
  },
  modules: {
  }
})
