export default {
  getState: state => state,
  getEmployees: (state, getters) => (id) => {
    if (id === undefined) {
      return state.employees;
    }
    return state.employees.filter((element) => {
      return element.id === id;
    })[0];
  },
  getGenders: state => {
    return state.genders;
  },
  getStatuses: state => {
    return state.statuses;
  },
  getTimeOffTypes: state => state.timeOffTypes,
  getEmployeesActiveFilter: state => state.employeesActiveFilter
};
