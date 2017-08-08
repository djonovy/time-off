export default {
  getEvents: (state) => (id) => {
    if (id === undefined) {
      return state.events;
    }
    return state.events.filter((item) => {
      return item.id === id;
    })[0];
  },
  getEventesActiveFilter: state => state.eventsActiveFilter
};
