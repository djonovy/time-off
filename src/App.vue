<template>
<div id="app" class="row">
	<!-- <img src="./assets/logo.png"> -->
	<hello></hello>
	<vacation-entry :employees-info="employeesInfo"></vacation-entry>
	<employees :employees-info="employeesInfo"></employees>
</div>
</template>

<script>
import Hello from './components/Hello'
import VacationEntry from './components/VacationEntry'
import Employees from './components/Employees'

const demoData = {
	employeesInfo: {
		defaultVacation: 21,
		employees: [{
				name: 'Marina Roba',
				balance: 5
			},
			{
				name: 'Oll Mirg',
				balance: 15
			},
			{
				name: 'Red Werr',
				balance: 3
			}
		]
	}
}

export default {
	name: 'app',
	components: {
		Hello,
		VacationEntry,
		Employees
	},
	data() {
		return demoData
	}
}
</script>

<style>
#app {
	color: #2c3e50;
	margin-top: 20px;
}
</style>
