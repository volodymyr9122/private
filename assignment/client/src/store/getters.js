export default {
  company: (state) => id => state.companies.find(n => n._id === id),
  childNameSelected: (state) => id => state.companies.find(n => n._id === id)
  /* findMatch: (state, getters) => id => state.companies.filter(function f (o) {
    if (o._id.includes(id)) return true
    if (o.childCompanies) {
      return (o.childCompanies = o.childCompanies.filter(f)).length
    }
  }) */
}
