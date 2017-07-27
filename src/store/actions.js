export default {
  addEmployee ({commit}, {value}) {
    commit('ADD_EMPLOYEE', {value});
  },
  updateEmployee ({commit}, {id, employee}) {
    commit('UPDATE_EMPLOYEE', {id, employee});
  },
  removeEmployee ({commit}, {id}) {
    commit('REMOVE_EMPLOYEE', {id});
  }
};
