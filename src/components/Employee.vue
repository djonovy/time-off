<template>
<form class="form" @submit.prevent="update">
    <div class="grid-x grid-padding-x">
        <h2 class="cell">Information</h2>
    </div>
	<div class="grid-x grid-padding-x">
		<div class="medium-4 cell">
			<label for="employeeName">Name:</label>
			<input type="text" name="employeeName" id="employeeName" v-model="employee.name" disabled>
		</div>
		<div class="medium-3 cell">
			<label for="employeeEmail">Email:</label>
			<input type="email" name="employeeEmail" id="employeeEmail" v-model="employee.email">
		</div>
		<div class="medium-2 cell">
			<label for="employeeDOB">Date of birthday:</label>
			<datepicker name="employeeDOB" id="employeeDOB" v-model="employee.dob"></datepicker>
		</div>
		<div class="medium-3 cell">
			<label for="employeeGender">Gender:</label>
			<select name="employeeGender" id="employeeGender" v-model="employee.gender">
                    <option v-for="item in gender" :value="item">{{item}}</option>
                </select>
		</div>
	</div>
	<div class="grid-x grid-padding-x">
		<div class="medium-3 cell">
			<label for="employeePhone">Phone:</label>
			<input type="text" name="employeePhone" id="employeePhone" v-model="employee.phone">
		</div>
	</div>
	<div class="grid-x grid-padding-x">
		<div class="cell">
			<button type="submit" class="button">Update</button>
		</div>
	</div>
</form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
	name: 'Employee',
	components: {
		Datepicker
	},
	data() {
		return {
			employee: this.$store.state.Employees.employeesInfo.employees[this.$route.params.id],
			gender: ['Male', 'Female']
		}
	},
	methods: {
		update: function() {
			this.employee = this.employee;
		}
	}
}
</script>
