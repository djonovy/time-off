<template>
<div id="app" class="row">
	<!-- <img src="./assets/logo.png"> -->
	<ul class="menu">
		<li><router-link to="/">Dashboard</router-link></li>
		<li><router-link to="/employees">Employees</router-link></li>
		<li><router-link to="/employees/new">New employee</router-link></li>
		<li><router-link to="/time-off">Time off</router-link></li>
	</ul>
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {}
	}
}
</script>

<style>
#app {
	margin: 20px auto 0;
	max-width: 1200px;
	color: #2c3e50;

}
</style>
