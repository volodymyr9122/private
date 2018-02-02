<template>
<div>
<form>
<input  v-model="company.name"><br>
<input  v-model="company.earnings"><br>

<select v-model="childCompanies" multiple>
<option disabled value=""> Select children`s companies ...</option>
<option v-for="comp in optionsList" v-bind:value="comp._id">{{comp.name}}</option>
</select><br>


<button><router-link to="/" exact>Cancel</router-link></button>
<input @click="UPDATE_ONE_COMPANY()" type="submit" value="Update company"><br>
<span>*Press and hold Ctrl for multiple values</span><br>
<!--<span>Children`s companies: {{ childCompanies }}</span><br>-->
</form>
<pre>{{response}}</pre>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      childCompanies: []
    }
  },
  methods: {
    ...mapActions({
      GET_COMPANIES: 'GET_COMPANIES'
    }),
    UPDATE_ONE_COMPANY () {
      this.$store.dispatch('UPDATE_ONE_COMPANY', {
        id: this.$route.params.id,
        name: this.company.name,
        earnings: this.company.earnings,
        childCompanies: this.childCompanies
      })
    },
    findMatches (arr, matchItem) {
      let res = arr.filter(function f (o) {
        if (o._id.includes(matchItem)) return true
        if (o.childCompanies) {
          return (o.childCompanies = o.childCompanies.filter(f)).length
        }
      })
      return res.map((res) => res._id)
    },
    finalFilter (arr, filtId) {
      let filteredEmployees = arr.filter(function (emp) {
        return filtId.indexOf(emp._id) === -1
      })
      return filteredEmployees
    }
  },
  computed: {
    ...mapState([
      'response',
      'companies',
      'matches',
      'optionsList'
    ]),
    company () {
      return this.$store.getters.company(this.$route.params.id)
    },
   /* childNameSelected () {
      return this.$store.getters.childNameSelected(this.$route.params.id)
    }, */
    filtID: function () {
      return this.findMatches(this.companies, this.$route.params.id)
    },
    optionsList: function () {
      return this.finalFilter(this.companies, this.filtID)
    }
  },
  mounted () {
    this.GET_COMPANIES()
  }
}
</script>
