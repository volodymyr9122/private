import Vue from 'vue'
import * as types from './mutation-types'
import router from '../router'

export default {
  GET_COMPANIES ({ commit, state, dispatch }) {
    Vue.$http
      .get()
    .then(({data}) => {
      commit(types.SET_COMPANIES, data)
    })
    .catch((error) => {
      commit(types.GET_ERR_RESPONSE, error)
      setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
    })
  },
  /* GET_COMPANY (context, {id}) {
    Vue.$http
      .get(`http://localhost:8000/companies/${id}`)
    .then(({data}) => {
      context.commit(types.SET_COMPANY, data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }, */
  ADD_NEW_COMPANY ({ commit, state, dispatch }, data) {
    Vue.$http
        .post('http://localhost:8000/companies/', data)
      .then((response) => {
        commit(types.GET_OK_RESPONSE, response)
      })
      .then(() => {
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
      .then(() => {
        setTimeout(_ => router.push('/'), 3000)
      })
      .catch((error) => {
        commit(types.GET_ERR_RESPONSE, error)
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
  },
  UPDATE_ONE_COMPANY ({commit, state}, data) {
    Vue.$http
        .put(`http://localhost:8000/companies/${data.id}`, data)
      .then((response) => {
        commit(types.GET_OK_RESPONSE, response)
      })
      .then(() => {
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
      .then(() => {
        setTimeout(_ => router.push('/'), 3000)
      })
      .catch((error) => {
        commit(types.GET_ERR_RESPONSE, error)
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
  },
  DELETE_COMPANY ({ commit, state, dispatch }, {id}) {
    Vue.$http
        .delete(`http://localhost:8000/companies/${id}`)
      .then((response) => {
        commit(types.GET_OK_RESPONSE, response)
      })
      .then(() => {
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
      .then(() => {
        setTimeout(_ => router.push('/'), 3000)
      })
      .catch((error) => {
        commit(types.GET_ERR_RESPONSE, error)
        setTimeout(_ => { commit(types.REMOVE_MESSAGE) }, 5000)
      })
  }
}
