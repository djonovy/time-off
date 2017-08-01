<template>
<form @submit.prevent="addTimeOff">
  <div class="grid-x grid-padding-x">
    <h2 class="cell">Add time off</h2>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-3 cell">
      <label for="employeeName">Select employee:</label>
      <select name="employeeName" id="employeeName" v-model="newTimeOff.name">
        <option disabled value="">Choose option</option>
        <option v-for="employee in employees" :key="employee.id" :value="employee.name">
          {{employee.name}}
        </option>
      </select>
    </div>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-2 cell">
      <label for="timeOffFrom">From:</label>
      <datepicker ref="dateFrom" v-model="newTimeOff.from" :disabled="disabledFrom" @selected="disableDatesFrom" name="timeOffFrom" id="timeOffFrom"></datepicker>
    </div>
    <div class="medium-2 cell">
      <label for="timeOffTo">To:</label>
      <datepicker ref="dateTo" v-model="newTimeOff.to" :disabled="disabledTo" @selected="disableDatesTo" name="timeOffTo" id="timeOffTo"></datepicker>
    </div>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-3 cell">
      <label for="timeOffType">Type:</label>
      <select name="timeOffType" id="timeOffType" v-model="newTimeOff.type">
				<option v-for="type in types" :value="type">
					{{type}}
				</option>
			</select>
    </div>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-4 cell">
      <label for="timeOffNote">Note:</label>
      <textarea name="timeOffNote" id="timeOffNote" v-model="newTimeOff.note"></textarea>
    </div>
  </div>
  <div class="grid-x grid-padding-x">
    <div class="medium-2 cell">
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
        name: '',
        from: null,
        to: null,
        type: '',
        note: ''
      },
      disabledFrom: {},
      disabledTo: {}
    };
  },
  computed: {
    employees () {
      return this.$store.getters.getActiveEmployees;
    },
    types () {
      return this.$store.getters.getTimeOffTypes;
    }
  },
  methods: {
    addTimeOff () {
      let dateFrom = this.newTimeOff.from;
      let dateTo = this.newTimeOff.to;
      if (dateFrom && dateTo) {
        this.employees.forEach((element) => {
          if (element.name === this.newTimeOff.name) {
            let employee = this.$store.getters.getEmployees(element.id);
            let timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
            let formattedDates = {
              from: this.$refs.dateFrom.formattedValue,
              to: this.$refs.dateTo.formattedValue,
              days: diffDays
            };
            let timeOff = Object.assign(this.newTimeOff, formattedDates);

            this.$store.dispatch('addTimeOff', {employee, timeOff});
            this.$toasted.success('Time off has been added.');
            this.resetData();
          }
        });
      }
    },
    disableDatesFrom (value) {
      this.newTimeOff.from = value;
      this.disabledTo = {
        from: null,
        to: value
      };
    },
    disableDatesTo (value) {
      this.newTimeOff.to = value;
      this.disabledFrom = {
        from: value,
        to: null
      };
    },
    resetData () {
      this.newTimeOff = {
        name: '',
        from: null,
        to: null,
        type: this.types.length ? this.types[0] : '',
        note: ''
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
  },
  mounted () {
    this.newTimeOff.name = this.employees.length ? this.employees[0].name : '';
    this.newTimeOff.type = this.types.length ? this.types[0] : '';
  }
};
</script>
