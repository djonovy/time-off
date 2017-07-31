export default {
  addEmployee ({commit}, {newEmployee}) {
    commit('ADD_EMPLOYEE', {newEmployee});
  },
  updateEmployee ({commit}, {id, updatedFields}) {
    commit('UPDATE_EMPLOYEE', {id, updatedFields});
  },
  removeEmployee ({commit}, {id}) {
    commit('REMOVE_EMPLOYEE', {id});
  },
  addTimeOff ({commit}, {employee, timeOff}) {
    commit('ADD_TIME_OFF', {employee, timeOff});
  }
};
