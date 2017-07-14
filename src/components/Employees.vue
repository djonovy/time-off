<template>
    <div class="employee-list columns">
        <h2>List of employees</h2>
        <table>
            <colgroup>
                <col width="5%">
                <col width="50%">
                <col width="35%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Employee</th>
                    <th>Balance</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employeesInfo.employees">
                    <td>{{index + 1}}</td>
                    <td><router-link :to="{ name: 'Employee', params: { id: index} }">{{employee.name}}</router-link></td>
                    <td>{{employee.balance}}</td>
                    <td>{{employeesInfo.defaultVacation}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Employees',
    computed: mapState({
        employeesInfo: state => state.Employees.employeesInfo
    })
}
</script>

<style>
</style>
