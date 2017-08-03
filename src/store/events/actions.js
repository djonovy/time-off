export default {
  addEvent ({commit}, event) {
    commit('ADD_EVENT', event);
  },
  updateEvent ({commit}, {event, id}) {
    commit('UPDATE_EVENT', {event, id});
  },
  removeEvent ({commit}, id) {
    commit('REMOVE_EVENT', id);
  },
  filterEvents ({commit}, type) {
    commit('FILTER_EVENTS', type);
  }
};
