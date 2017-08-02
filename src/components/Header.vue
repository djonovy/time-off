<template>
<header class="header-container">
  <div class="wrapper">
    <img class="logo" src="../assets/logo.svg" alt="">
    <ul class="menu">
      <li>
        <router-link class="link" to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link class="link" to="/employees">Employees</router-link>
      </li>
      <li>
        <router-link class="link" to="/employees/new">New employee</router-link>
      </li>
      <li>
        <router-link class="link" to="/time-off">Time off</router-link>
      </li>
      <li>
        <router-link class="link" to="/events">Events</router-link>
      </li>
      <li>
        <router-link class="link" :to="{ name: 'AddEvent' }">Add event</router-link>
      </li>
    </ul>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header'
};
</script>
