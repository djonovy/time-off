import Vue from 'vue';
import * as types from './mutation-types';

export default {
    [types.ADD_EMPLOYEE] (state, {value}) {
        state.employees.push({
            id: state.employees.length ? state.employees[state.employees.length - 1].id + 1 : 0,
            name: value,
            balance: state.defaultVacation ? state.defaultVacation : 21,
            status: 'Active'
        });
    },
    [types.UPDATE_EMPLOYEE] (state, {id, employee}) {
        state.employees[id] = employee;
    },
    [types.REMOVE_EMPLOYEE] (state, index) {
        state.employees.splice(index, 1);
    },
    [types.ADD_TIME_OFF] (state, {index, from, to, diffDays, type}) {
        let employee = state.employees[index];
        employee.balance -= diffDays;
        if (!employee.timeOff) {
            employee.timeOff = [];
        }
        employee.timeOff.push({
            from: from,
            to: to,
            days: diffDays,
            type: type
        });
    }
}
