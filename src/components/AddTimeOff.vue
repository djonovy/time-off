<template>
<form @submit.prevent="addTimeOff">
  <div class="grid-x grid-padding-x">
    <h2 class="cell">Add time off</h2>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-3 cell">
      <label for="employeeName">Select employee:</label>
      <select name="employeeName" id="employeeName" v-model="newTimeOff.name">
        <option v-for="(employee, index) in employees" :value="employee.name">
          {{employee.name}}
        </option>
      </select>
    </div>
    <div class="medium-2 cell">
      <label for="timeOffFrom">From:</label>
      <datepicker ref="dateFrom" v-model="dates.dateFrom" :disabled="disabledFrom" @selected="disableDatesFrom" name="timeOffFrom" id="timeOffFrom"></datepicker>
    </div>
    <div class="medium-2 cell">
      <label for="timeOffTo">To:</label>
      <datepicker ref="dateTo" v-model="dates.dateTo" :disabled="disabledTo" @selected="disableDatesTo" name="timeOffTo" id="timeOffTo"></datepicker>
    </div>
    <div class="medium-3 cell">
      <label for="timeOffType">Type:</label>
      <select name="timeOffType" id="timeOffType" v-model="newTimeOff.type">
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
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'AddTimeOff',
  components: {
    Datepicker
  },
  data () {
    return {
      newTimeOff: {
        name: this.$store.state.employees.length ? this.$store.state.employees[0].name : '',
        type: this.$store.state.timeOffTypes ? this.$store.state.timeOffTypes[0] : ''
      },
      dates: {
        dateFrom: null,
        dateTo: null
      },
      disabledFrom: {},
      disabledTo: {}
    };
  },
  computed: {
    employees () {
      return this.$store.getters.getEmployees();
    },
    types () {
      return this.$store.getters.getTimeOffTypes;
    }
  },
  methods: {
    addTimeOff: function () {
      let dateFrom = this.dates.dateFrom;
      let dateTo = this.dates.dateTo;
      if (dateFrom && dateTo) {
        this.employees.forEach((element, index) => {
          if (element.name === this.newTimeOff.name) {
            let timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
            let from = this.$refs.dateFrom.formattedValue;
            let to = this.$refs.dateTo.formattedValue;
            let type = this.newTimeOff.type;

            this.$store.commit('ADD_TIME_OFF', {index, from, to, diffDays, type});
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
    disableDatesFrom: function (value) {
      this.dates.dateFrom = value;
      this.disabledTo = {
        from: null,
        to: value
      };
    },
    disableDatesTo: function (value) {
      this.dates.dateTo = value;
      this.disabledFrom = {
        from: value,
        to: null
      };
    }
  }
};
</script>
