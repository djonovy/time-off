<template>
<div class="hello">
	<h1 class="columns">{{ msg }}</h1>
</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			msg: 'HR Portal'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
</style>
