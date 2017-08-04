import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Employees from '../components/Employees';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import AddTimeOff from '../components/AddTimeOff';
import NotFound from '../components/NotFound';
import Events from '../components/Events';
import Event from '../components/Event';
import AddEvent from '../components/AddEvent';
import UpdateEvent from '../components/UpdateEvent';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/employees/new',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/employees/:id',
    props: true,
    name: 'Employee',
    component: Employee
  },
  {
    path: '/time-off',
    name: 'AddTimeOff',
    component: AddTimeOff
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/new/',
    name: 'AddEvent',
    component: AddEvent
  },
  {
    path: '/events/:id',
    props: true,
    name: 'Event',
    component: Event
  },
  {
    path: '/events/:id/update',
    props: true,
    name: 'UpdateEvent',
    component: UpdateEvent
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
