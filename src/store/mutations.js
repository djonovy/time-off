import * as types from './mutation-types';

export default {
  [types.ADD_EMPLOYEE] (state, {newEmployee}) {
    let defaultData = {
      id: state.employees.length ? state.employees[state.employees.length - 1].id + 1 : 0,
      balance: state.defaultVacation ? state.defaultVacation : 21
    };
    let employee = Object.assign(defaultData, newEmployee);
    state.employees.push(employee);
  },
  [types.UPDATE_EMPLOYEE] (state, {id, updatedFields}) {
    state.employees.forEach((element) => {
      if (element.id === id) {
        Object.assign(element, updatedFields);
      }
    });
  },
  [types.REMOVE_EMPLOYEE] (state, {id}) {
    state.employees = state.employees.filter((element) => {
      return element.id !== id;
    });
  },
  [types.UPDATE_EMPLOYEE_ACTIVE_FILTER] (state, {value}) {
    state.employeesActiveFilter = value;
  },
  [types.ADD_TIME_OFF] (state, {employee, timeOff}) {
    employee.balance -= timeOff.days;
    if (!employee.timeOff) {
      employee.timeOff = [];
    }
    employee.timeOff.push(timeOff);
  }
};
