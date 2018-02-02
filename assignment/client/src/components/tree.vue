<template>

<div>
<span>Company</span>
<span>Earnings</span>
<span>Total earnings</span>

<taxon :tree="companies"></taxon>

<router-link :to="{ name: 'create' }" >Create a new company</router-link>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import taxon from './taxon.vue'
export default {
  components: {
    'taxon': taxon
  },
  methods: {
    ...mapActions({
      GET_COMPANIES: 'GET_COMPANIES'
    })
  },
  computed: {
    ...mapState([
      'companies'
    ])
  },
  mounted () {
    this.GET_COMPANIES()
  }
}
</script>
