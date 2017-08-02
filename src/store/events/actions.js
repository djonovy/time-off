export default {
  addEvent ({commit}, event) {
    commit('ADD_EVENT', event);
  },
  removeEvent ({commit}, id) {
    commit('REMOVE_EVENT', id);
  }
};
