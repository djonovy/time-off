<template>
<div id="app">
	<header class="header-container">
		<div class="wrapper">
			<img class="logo" src="./assets/logo.svg" alt="">
			<ul class="menu">
				<li><router-link class="link" to="/">Dashboard</router-link></li>
				<li><router-link class="link" to="/employees">Employees</router-link></li>
				<li><router-link class="link" to="/employees/new">New employee</router-link></li>
				<li><router-link class="link" to="/time-off">Time off</router-link></li>
			</ul>
		</div>
	</header>
	<main class="main-container">
		<router-view></router-view>
	</main>
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
<style lang="scss" src="./assets/scss/styles.scss"></style>

<style lang="scss">
.wrapper,
.main-container {
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	font-family: 'Roboto', sans-serif;
}
.main-container {
	margin-top: 20px;
}
</style>
