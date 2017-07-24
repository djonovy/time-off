export default {
    updateEmployee ({commit}, {id, employee}) {
        commit('UPDATE_EMPLOYEE', {id, employee});
    }
}
