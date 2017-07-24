export default {
    getEmployees: (state, getters)  => (id) => {
        if (id === 'undefined') {
            return state.employees;
        }
        return state.employees[id];
    },
    getGenders: state => {
        return state.genders;
    },
    getStatuses: state => {
        return state.statuses;
    }
}
