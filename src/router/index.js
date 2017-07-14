import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Employees from '../components/Employees'
import Employee from '../components/Employee'
import AddEmployee from '../components/AddEmployee'
import VacationEntry from '../components/VacationEntry'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/employees',
        name: 'Employees',
        component: Employees,
    },
    {
        path: '/employees/id/:id',
        name: 'Employee',
        component: Employee
    },
    {
        path: '/employees/new',
        name: 'AddEmployee',
        component: AddEmployee
    },
    {
        path: '/time-off',
        name: 'VacationEntry',
        component: VacationEntry
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
});
