<template>
<form id="form-add-employee" @submit.prevent="add">
	<div class="grid-x grid-padding-x">
		<div class="cell">
			<h3>Add employee</h3>
		</div>
	</div>
	<div class="grid-x grid-padding-x">
		<div class="medium-4 cell">
			<label for="newEmployeeName">Name:</label>
			<input type="text" name="newEmployeeName" id="newEmployeeName" v-model.trim="newEmployee.name" autocomplete="off">
		</div>
		<div class="medium-2 cell">
			<label>&nbsp;</label>
			<button type="submit" class="button expanded" title="Add">Add</button>
		</div>
	</div>
</form>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'add-employee',
	data() {
		return {
			newEmployee: {
				name: ''
			}
		}
	},
	computed: mapState({
        employeesInfo: state => state.Employees.employeesInfo
    }),
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
