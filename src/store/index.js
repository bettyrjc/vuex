import { createStore } from 'vuex'

export default createStore({
  // state initial
  state: {
    counter: 1000,
    // state: true,
  },
  // son lo unico que puede cambiar el state, no hay otra forma de hacerlo
  // su unico obejtivo es modificar el state
  mutations: {
    incrementar(state, payload) { 
      state.counter = state.counter + payload 
    },
    disminuir(state, payload) {
      state.counter = state.counter - payload
    }
  },
  // para acceder a una mutations dentro del html debe ser por medio de las acciones
  // el commit ejecuta una mutacion
  actions: {
    actionIncrement({commit},numero) {
      commit('incrementar',numero)
    },
    actionDisminuir({ commit }, numero) {
      commit('disminuir',numero)
    },
    actionBtn({ commit }, objeto) {
      if (objeto.statee) {
        commit('incrementar',objeto.numero)
      } else {
        commit('disminuir',objeto.numero)
      }
    }
  },
  modules: {
  }
})
