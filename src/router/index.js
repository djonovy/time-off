import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello';
import Employees from '../components/Employees';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import AddTimeOff from '../components/AddTimeOff';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/employees/id/:id',
    props: true,
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
    name: 'AddTimeOff',
    component: AddTimeOff
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
