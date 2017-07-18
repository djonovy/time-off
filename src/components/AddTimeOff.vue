<template>
<form class="add-vacation" @submit.prevent="addVacation">
	<div class="grid-x grid-padding-x">
		<h2 class="cell">Add vacation</h2>
	</div>
	<div class="grid-x grid-padding-x">
		<div class="medium-3 cell">
			<label for="employeeName">Select employee:</label>
			<select name="employeeName" id="employeeName" v-model="newVacation.name">
	            <option v-for="(employee, index) in employees" :value="employee.name">
	                {{employee.name}}
	            </option>
	        </select>
		</div>
		<div class="medium-2 cell">
			<label for="vacationFrom">From:</label>
			<datepicker ref="dateFrom" v-model="dates.dateFrom" :disabled="disabledFrom" @selected="disableDatesFrom" name="vacationFrom" id="vacationFrom"></datepicker>
		</div>
		<div class="medium-2 cell">
			<label for="vacationTo">To:</label>
			<datepicker ref="dateTo" v-model="dates.dateTo" :disabled="disabledTo" @selected="disableDatesTo" name="vacationTo" id="vacationTo"></datepicker>
		</div>
		<div class="medium-3 cell">
			<label for="vacationType">Type:</label>
			<select name="vacationType" id="vacationType" v-model="newVacation.type">
				<option v-for="type in types" :value="type">
					{{type}}
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
import {mapState, mapMutations} from 'vuex';
import Datepicker from 'vuejs-datepicker';

export default {
	name: 'AddTimeOff',
	components: {
		Datepicker
	},
	data() {
		return {
			newVacation: {
				name: this.$store.state.employees ? this.$store.state.employees[0].name : '',
				type: this.$store.state.timeOffTypes ? this.$store.state.timeOffTypes[0] : ''
			},
			dates: {
				dateFrom: null,
				dateTo: null
			},
			disabledFrom: {},
			disabledTo: {}
		}
	},
	computed: mapState({
		employees: state => state.employees,
		types: state => state.timeOffTypes
	}),
	methods: {
		addVacation: function() {
			let dateFrom = this.dates.dateFrom,
				dateTo = this.dates.dateTo;
			if (dateFrom && dateTo) {
				this.employees.forEach((element, index) => {
					if (element.name === this.newVacation.name) {
						let timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime()),
							diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1,
							from = this.$refs.dateFrom.formattedValue,
							to = this.$refs.dateTo.formattedValue;

						this.$store.commit('ADD_TIME_OFF', {index, from, to, diffDays});
						this.$toasted.success('Time off has been added.');
						// Reset fields
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
			}
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
