export default {
  SET_COMPANIES (state, data) {
    state.companies = data
  },
  SET_COMPANY (state, data) {
    state.company = data
  },
  ADD_COMPANY (state, payload) {
    state.companies.push(payload)
  },
  UPDATE_COMPANY (state, {data}) {
    state.company = data
  },
  GET_OK_RESPONSE (state, message) {
    state.response = JSON.stringify(`${message.status} ${message.statusText}`
/* company was  ${message.config.method}ed` */)
  },
  GET_ERR_RESPONSE (state, message) {
    state.response = JSON.stringify(`${message}`)
  },
  REMOVE_MESSAGE (state) {
    state.response = null
  },
  GO_BACK () {
    window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/')
  }
}
