<template>
<div>
<form>
<input v-model="name" type="text" placeholder="company name" required><br>
<input v-model="earning" type="number" placeholder="company earnings" required><br>

<select  v-model="childCompanies" multiple>
<option disabled value="">Please select child`s companies ...</option>
<option v-for="company in companies" v-bind:value="company._id">{{company.name}}</option>
</select><br>

<input @click.prevent="ADD_NEW_COMPANY()" type="submit" value="Create new company">
<button><router-link to="/" exact>Cancel</router-link></button>
</form>
<pre>{{response}}</pre>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      name: '',
      earning: null,
      childCompanies: []
    }
  },
  computed: {
    ...mapState([
      'companies',
      'response'
    ])
  },
  methods: {
    ...mapActions({
      GET_COMPANIES: 'GET_COMPANIES'
    }),
    ADD_NEW_COMPANY () {
      this.$store.dispatch('ADD_NEW_COMPANY', {
        name: this.name,
        earnings: this.earning,
        childCompanies: this.childCompanies
      })
    }
  },
  mounted () {
    this.GET_COMPANIES()
  }
}
</script>
<!--<img :src="'http://localhost:8000/companies/' + $route.params._id">-->
 
