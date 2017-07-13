<template>
<div class="hello">
	<h1 class="text-center">{{ msg }}</h1>
</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			msg: 'Time off'
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
