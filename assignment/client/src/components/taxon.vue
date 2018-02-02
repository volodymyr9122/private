<template>

  <ul v-if="tree.length">
   <li v-for="taxon in tree">
     {{ taxon.name }}
     {{ taxon.earnings }}
     {{ sumEarnings(taxon) }}
        <router-link :to="{ name: 'updatecom', params: { id: taxon._id } }">Update</router-link>
        <router-link :to="{ name: 'deletecom', params: { id: taxon._id } }">Delete</router-link>
          <ul v-if="taxon.childCompanies">
             <taxon :tree="taxon.childCompanies"></taxon>
          </ul>
    </li>
</ul>

</template>

<script>
export default {
  name: 'taxon',
  components: {
  },
  props: {
    tree: Array,
    taxon: String
  },
  methods: {
    sumEarnings: function (data) {
      let ar = []
      let sum = data.earnings
      function recur (n) {
        if (n.childCompanies) {
          ar = n.childCompanies.map(l => l.earnings)
          sum += ar.reduce(function (sum, current) { return sum + current }, 0)
          recur(n = n.childCompanies)
        }
      }
      recur(data)
      return sum
    }
  }
}
</script>
