<template>
<form id="form-add-employee" @submit.prevent="add">
	<div class="columns">
		<h3>Add employee</h3>
	</div>
	<div class="medium-10 columns">
		<label for="newEmployeeName">Name:</label>
		<input type="text" name="newEmployeeName" id="newEmployeeName" v-model.trim="newEmployee.name" autocomplete="off">
	</div>
	<div class="medium-2 columns">
		<label>&nbsp;</label>
		<button type="submit" class="button small-12">Add</button>
	</div>
</form>
</template>

<script>
export default {
	name: 'add-employee',
	props: ['employeesInfo'],
	data() {
		return {
			newEmployee: {
				name: ''
			}
		}
	},
	methods: {
		add: function() {
			let value = this.newEmployee.name;
			if (!value) {
				return true;
			}
			this.employeesInfo.employees.push({
                name: value,
                balance: this.employeesInfo.defaultVacation ? this.employeesInfo.defaultVacation : 21
            });
            this.newEmployee.name = '';
		}
	}
}
</script>

<style>
</style>
