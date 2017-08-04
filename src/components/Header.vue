<template>
<header class="header-container">
  <div class="wrapper">
    <img class="logo" src="../assets/logo.svg" alt="">
    <ul class="menu">
      <li v-if="!isLoggedIn">
        <router-link class="link" to="/login" title="Login">Login</router-link>
      </li>
      <li v-if="isLoggedIn">
        <a href="/" class="link" @click.prevent="logout" title="Logout">Logout</a>
      </li>
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
  </div>
</header>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Header',
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/');
        this.$toasted.success('You have logged out.');
      }).catch(error => {
        console.log(error);
      });
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.getUser;
    }
  }
};
</script>
