<template>
<div id="app">
	<App-Header/>
	<main class="main-container">
		<router-view></router-view>
	</main>
</div>
</template>

<script>
import AppHeader from './components/Header'
export default {
	name: 'app',
	components: {
		AppHeader
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
