<template>
<form class="form" @submit.prevent="updateEmployee">
	<div class="grid-x grid-padding-x">
		<div class="small-12 cell">
			<h2 class="title">Information:</h2>
			<p><b>Balance: {{employee.balance}} day(s)</b></p>
		</div>
		<div class="medium-4 cell">
			<label for="employeeName">Name:</label>
			<input type="text" name="employeeName" id="employeeName" v-model="employee.name" disabled>
		</div>
		<div class="medium-3 cell">
			<label for="employeeStatus">Status:</label>
			<select name="employeeStatus" id="employeeStatus" v-model="employee.status">
                <option v-for="status in statuses" :value="status">{{status}}</option>
            </select>
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
                <option v-for="gender in genders" :value="gender">{{gender}}</option>
            </select>
		</div>
		<div class="medium-3 cell">
			<label for="employeePhone">Phone:</label>
			<input type="text" name="employeePhone" id="employeePhone" v-model="employee.phone">
		</div>
        <div class="medium-3 cell">
			<label for="employeeSkype">Skype:</label>
			<input type="text" name="employeeSkype" id="employeeSkype" v-model="employee.skype">
		</div>
        <div class="medium-2 cell">
			<label for="employeeHire">Hire date:</label>
			<datepicker name="employeeHire" id="employeeHire" v-model="employee.hire"></datepicker>
		</div>
		<div class="small-12 cell">
			<button type="submit" class="button" title="Update">Update</button>
		</div>
		<div class="small-12 cell" v-if="employee.timeOff">
			<h2 class="title">Time off:</h2>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>From</th>
						<th>To</th>
						<th class="text-right">Days</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td colspan="4" class="text-right">Total: {{total}}</td>
					</tr>
				</tfoot>
				<tbody>
					<tr v-for="(item, index) in employee.timeOff">
						<td>{{index + 1}}</td>
						<td>{{item.from}}</td>
						<td>{{item.to}}</td>
						<td class="text-right">{{item.days}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</form>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
	name: 'Employee',
	components: {
		Datepicker
	},
	methods: {
		updateEmployee: function () {
			let id = +this.$route.params.id,
				employee = this.employee;
			this.$store.dispatch('updateEmployee', {id, employee});
			this.$toasted.success('Employee has been updated.');
		}
	},
	computed: {
		employee () {
			let id = +this.$route.params.id;
			return this.$store.getters.getEmployees(id);
		},
		genders () {
			return this.$store.getters.getGenders;
		},
		statuses () {
			return this.$store.getters.getStatuses;
		},
		total () {
			return this.employee.timeOff.reduce((sum, item) => sum + item.days, 0);
		}
	}
}
</script>
