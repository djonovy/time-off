<template>
<form class="add-vacation" @submit.prevent="addVacation">
	<div class="columns">
		<h3>Add vacation</h3>
	</div>
	<div class="medium-4 columns">
		<label for="employeeName">Select employee:</label>
		<select name="employeeName" id="employeeName" v-model="newVacation.name">
            <option v-for="(item, index) in employeesInfo.employees" :value="item.name">
                {{item.name}}
            </option>
        </select>
	</div>
	<div class="medium-3 columns">
		<label for="vacationFrom">From:</label>
		<datepicker v-model="state.dateFrom" :disabled="disabledFrom" @selected="disableDatesFrom" name="vacationFrom" id="vacationFrom"></datepicker>
	</div>
	<div class="medium-3 columns">
		<label for="vacationTo">To:</label>
		<datepicker v-model="state.dateTo" :disabled="disabledTo" @selected="disableDatesTo" name="vacationTo" id="vacationTo"></datepicker>
	</div>
	<div class="medium-2 columns">
		<label>&nbsp;</label>
		<button type="submit" class="button small-12">Send</button>
	</div>
</form>
</template>

<script>
let state = {
	dateFrom: null,
	dateTo: null
}

import Datepicker from 'vuejs-datepicker'

export default {
	name: 'vacationEntry',
	components: {
		Datepicker
	},
	props: ['employeesInfo'],
	data() {
		return {
			newVacation: {
				name: this.employeesInfo.employees ? this.employeesInfo.employees[0].name : ''
			},
			state: state,
			disabledFrom: {},
			disabledTo: {}
		}
	},
	methods: {
		addVacation: function() {
			this.employeesInfo.employees.forEach((element, index) => {
				if (element.name === this.newVacation.name && this.state.dateFrom && this.state.dateTo) {
					let timeDiff = Math.abs(this.state.dateTo.getTime() - this.state.dateFrom.getTime()),
						diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					this.employeesInfo.employees[index].balance -= diffDays + 1;
					this.state = {
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
			this.state.dateFrom = value;
			this.disabledTo = {
				from: null,
				to: value
			};
		},
		disableDatesTo: function(value) {
			this.state.dateTo = value;
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
