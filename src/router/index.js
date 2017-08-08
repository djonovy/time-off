import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
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
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/employees/new',
    name: 'AddEmployee',
    component: AddEmployee,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/employees/:id',
    props: true,
    name: 'Employee',
    component: Employee,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/time-off',
    name: 'AddTimeOff',
    component: AddTimeOff,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/new/',
    name: 'AddEvent',
    component: AddEvent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/events/:id',
    props: true,
    name: 'Event',
    component: Event,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/events/:id/update',
    props: true,
    name: 'UpdateEvent',
    component: UpdateEvent,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  let auth = store.getters.getAuth;
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isLoggedIn) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});

export default router;
