<template>
<form class="add-vacation" @submit.prevent="addVacation">
	<div class="grid-x grid-padding-x">
		<h3 class="cell">Add vacation</h3>
	</div>
	<div class="grid-x grid-padding-x">
		<div class="medium-3 cell">
			<label for="employeeName">Select employee:</label>
			<select name="employeeName" id="employeeName" v-model="newVacation.name">
	            <option v-for="(item, index) in employeesInfo.employees" :value="item.name">
	                {{item.name}}
	            </option>
	        </select>
		</div>
		<div class="medium-2 cell">
			<label for="vacationFrom">From:</label>
			<datepicker v-model="dates.dateFrom" :disabled="disabledFrom" @selected="disableDatesFrom" name="vacationFrom" id="vacationFrom"></datepicker>
		</div>
		<div class="medium-2 cell">
			<label for="vacationTo">To:</label>
			<datepicker v-model="dates.dateTo" :disabled="disabledTo" @selected="disableDatesTo" name="vacationTo" id="vacationTo"></datepicker>
		</div>
		<div class="medium-3 cell">
			<label for="vacationType">Type:</label>
			<select name="vacationType" id="vacationType" v-model="newVacation.type">
				<option v-for="item in types" :value="item">
					{{item}}
				</option>
			</select>
		</div>
		<div class="medium-2 cell">
			<label>&nbsp;</label>
			<button type="submit" class="button expanded" title="Add">Add</button>
		</div>
	</div>
</form>
</template>

<script>
import {
	mapState
} from 'vuex';
import Datepicker from 'vuejs-datepicker'

export default {
	name: 'vacationEntry',
	components: {
		Datepicker
	},
	computed: mapState({
		employeesInfo: state => state.Employees.employeesInfo
	}),
	data() {
		return {
			types: ['Annual', 'By illness'],
			newVacation: {
				name: this.$store.state.Employees.employeesInfo.employees ? this.$store.state.Employees.employeesInfo.employees[0].name : '',
				type: 'Annual'
			},
			dates: {
				dateFrom: null,
				dateTo: null
			},
			disabledFrom: {},
			disabledTo: {}
		}
	},
	methods: {
		addVacation: function() {
			this.employeesInfo.employees.forEach((element, index) => {
				if (element.name === this.newVacation.name && this.dates.dateFrom && this.dates.dateTo) {
					let timeDiff = Math.abs(this.dates.dateTo.getTime() - this.dates.dateFrom.getTime()),
						diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					this.employeesInfo.employees[index].balance -= diffDays + 1;
					this.dates = {
						dateFrom: null,
						dateTo: null
					};
					this.disabledFrom = {
						from: null,
						to: null
					};
					this.disabledTo = {
						from: null,
						to: null
					};
				}
			});
		},
		disableDatesFrom: function(value) {
			this.dates.dateFrom = value;
			this.disabledTo = {
				from: null,
				to: value
			};
		},
		disableDatesTo: function(value) {
			this.dates.dateTo = value;
			this.disabledFrom = {
				from: value,
				to: null
			};
		}
	}
}
</script>

<style>
</style>
