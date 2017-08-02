import * as types from '../mutation-types';

export default {
  [types.ADD_EVENT] (state, event) {
    let id = state.events.length ? state.events[state.events.length - 1].id + 1 : 0;
    event = Object.assign({id: id}, event);
    state.events.push(event);
  },
  [types.REMOVE_EVENT] (state, id) {
    state.events = state.events.filter((item) => {
      return item.id !== id;
    });
  }
};
