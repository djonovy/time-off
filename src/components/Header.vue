<template>
<header class="header-container">
  <div class="wrapper">
    <img class="logo" src="../assets/logo.svg" alt="">
    <ul class="menu">
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
export default {
  name: 'Header'
};
</script>
