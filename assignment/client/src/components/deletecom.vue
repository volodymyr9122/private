<template>
<div>
<section>
<p>{{company.name}}</p>
<p>{{company.earnings}}</p>
<router-link to="/" exact>Cancel</router-link>
<button @click="DELETE_COMPANY()">Delete</button>
</section>
<pre>{{response}}</pre>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      GET_COMPANIES: 'GET_COMPANIES'
    }),
    DELETE_COMPANY () {
      this.$store.dispatch('DELETE_COMPANY', {
        id: this.$route.params.id
      })
    }
  },
  computed: {
    ...mapState([
      'companies',
      'response'
    ]),
    company () {
      return this.$store.getters.company(this.$route.params.id)
    }
  },
  mounted () {
    this.GET_COMPANIES()
  }
}
</script>
