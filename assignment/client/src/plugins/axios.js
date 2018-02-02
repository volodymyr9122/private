import Vue from 'vue'
import Axios from 'axios'
// set the  base URL
Axios.defaults.baseURL = 'http://localhost:8000/companies/'
Axios.defaults.headers.common.Accept = 'application/json'
// bind Axios to Vue
Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return Axios
  }
})
