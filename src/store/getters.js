export default {
  getAuth: state => state.auth,
  getUser: state => state.auth.user,
  getEmployees: (state) => (id) => {
    if (id === undefined) {
      return state.employees;
    }
    return state.employees.filter((element) => {
      return element.id === id;
    })[0];
  },
  getActiveEmployees: (state, getters) => {
    return getters.getEmployees().filter(employee => employee.status === getters.getEmployeesActiveFilter);
  },
  getGenders: state => state.genders,
  getStatuses: state => state.statuses,
  getPositions: state => state.positions,
  getPlaceholderUrl: state => state.placeholderUrl,
  getTimeOffTypes: state => state.timeOffTypes,
  getEmployeesActiveFilter: state => state.employeesActiveFilter
};
