export default {
  addEmployee ({commit}, {value}) {
    commit('ADD_EMPLOYEE', {value});
  },
  updateEmployee ({commit}, {id, updatedFields}) {
    commit('UPDATE_EMPLOYEE', {id, updatedFields});
  },
  removeEmployee ({commit}, {id}) {
    commit('REMOVE_EMPLOYEE', {id});
  }
};
