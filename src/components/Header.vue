<template>
<header class="header-container">
  <div class="wrapper">
    <div class="grid-x grid-padding-x">
      <span class="cell shrink"><img class="logo" src="../assets/logo.svg" alt=""></span>
      <ul class="menu cell small-8">
        <li>
          <router-link class="link" to="/" title="Dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link class="link" to="/employees" title="Employees">Employees</router-link>
        </li>
        <li>
          <router-link class="link" to="/employees/new" title="New employee">New employee</router-link>
        </li>
        <li>
          <router-link class="link" to="/time-off" title="Time off">Time off</router-link>
        </li>
        <li>
          <router-link class="link" to="/events" title="Events">Events</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'AddEvent' }" title="Add event">Add event</router-link>
        </li>
      </ul>
      <div class="cell small-3 text-right">
          <router-link v-if="!user" class="link" to="/login" title="Login">Login</router-link>
          <template v-if="user">
            <a href="/" class="link" @click.prevent="logout" title="Logout">Logout</a>
          </template>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setUser', null);
      this.$toasted.success('You have logged out.');
      firebase.auth().signOut().then(() => {
        if (this.$router.currentRoute.meta && this.$router.currentRoute.meta.requiresAuth) {
          this.$router.push('/login');
        }
      }).catch(error => {
        this.$toasted.error(error.message);
      });
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser;
    }
  }
};
</script>
