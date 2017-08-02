<template>
<form class="form" @submit.prevent="updateEmployee">
  <div class="grid-x grid-padding-x">
    <div class="small-12 cell">
      <h2 class="title">Information:</h2>
      <p>
        <img v-if="employee.avatar" class="avatar" :src="employee.avatar" :alt="employee.name">
        <img v-else-if="placeholderUrl" class="avatar" :src="placeholderUrl" :alt="employee.name">
      </p>
      <!-- <input type="file" name="employeeAvatar" id="employeeAvatar" @input="updateField($event, 'avatar')" :value="employee.avatar"> -->
      <p><b>Balance: {{employee.balance}} day(s)</b></p>
    </div>
    <div class="medium-3 cell">
      <label for="employeeName">Name:</label>
      <input type="text" name="employeeName" id="employeeName" @input="updateField($event, 'name')" :value="employee.name" disabled>
    </div>
    <div class="medium-3 cell">
      <label for="employeeStatus">Status:</label>
      <select name="employeeStatus" id="employeeStatus" @input="updateField($event, 'status')" :value="employee.status">
        <option v-for="status in statuses" :value="status">{{status}}</option>
      </select>
    </div>
    <div class="medium-3 cell">
      <label for="employeePosition">Position:</label>
      <select name="employeePosition" id="employeePosition" @input="updateField($event, 'position')" :value="employee.position">
        <option disabled value="">Choose option</option>
        <option v-for="position in positions" :value="position">{{position}}</option>
      </select>
    </div>
    <div class="medium-3 cell">
      <label for="employeeEmail">Email:</label>
      <input type="email" name="employeeEmail" id="employeeEmail" @input="updateField($event, 'email')" :value="employee.email">
    </div>
    <div class="medium-2 cell">
      <label for="employeeDOB">Date of birthday:</label>
      <datepicker ref="dob" name="employeeDOB" id="employeeDOB" @selected="updateDob" :value="employee.dob"></datepicker>
    </div>
    <div class="medium-2 cell">
      <label for="employeeGender">Gender:</label>
      <select name="employeeGender" id="employeeGender" @input="updateField($event, 'gender')" :value="employee.gender">
        <option v-for="gender in genders" :value="gender">{{gender}}</option>
      </select>
    </div>
    <div class="medium-3 cell">
      <label for="employeePhone">Phone:</label>
      <input type="text" name="employeePhone" id="employeePhone" @input="updateField($event, 'phone')" :value="employee.phone">
    </div>
    <div class="medium-3 cell">
      <label for="employeeSkype">Skype:</label>
      <input type="text" name="employeeSkype" id="employeeSkype" @input="updateField($event, 'skype')" :value="employee.skype">
    </div>
    <div class="medium-2 cell">
      <label for="employeeHire">Hire date:</label>
      <datepicker ref="hire" name="employeeHire" id="employeeHire" @selected="updateHire" :value="employee.hire"></datepicker>
    </div>
    <div class="small-12 cell">
      <label for="employeeAbout">About me:</label>
      <textarea name="employeeAbout" id="employeeAbout" rows="3" @input="updateField($event, 'about')" :value="employee.about"></textarea>
    </div>
    <div class="small-12 cell">
      <button type="submit" class="button" title="Update">Update</button>
    </div>
    <div class="small-12 cell" v-if="employee.timeOff && employee.timeOff.length">
      <h2 class="title">Time offs:</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th class="text-right">&nbsp;</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="5" class="text-right">Total: {{total}}</td>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="(item, index) in employee.timeOff" :key="index">
            <td>{{index + 1}}</td>
            <td>{{item.from}}</td>
            <td>{{item.to}}</td>
            <td>{{item.days}}</td>
            <td class="text-right"><button type="button" @click="removeTimeOff(employee, index)" title="Remove"><svgicon icon="remove" height="18"></svgicon></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</form>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import '@/assets/svg/remove';

export default {
  name: 'Employee',
  components: {
    Datepicker
  },
  props: ['id'],
  data () {
    return {
      updatedFields: {}
    };
  },
  methods: {
    updateField (e, field) {
      let value = e.target.value;
      this.updatedFields[field] = value;
    },
    updateDob () {
      this.updatedFields['dob'] = this.$refs.dob.formattedValue;
    },
    updateHire () {
      this.updatedFields['hire'] = this.$refs.hire.formattedValue;
    },
    updateEmployee () {
      let id = +this.id;
      let updatedFields = this.updatedFields;
      this.$store.dispatch('updateEmployee', {id, updatedFields});
      this.$toasted.success('Employee has been updated.');
    },
    removeTimeOff (employee, timeOffIndex) {
      this.$store.dispatch('removeTimeOff', {employee, timeOffIndex});
      this.$toasted.success('Time off has been removed.');
    }
  },
  computed: {
    employee () {
      let id = +this.id;
      let employee = this.$store.getters.getEmployees(id);
      if (employee === undefined) {
        this.$router.push({name: 'NotFound'});
        return false;
      }
      return employee;
    },
    genders () {
      return this.$store.getters.getGenders;
    },
    statuses () {
      return this.$store.getters.getStatuses;
    },
    positions () {
      return this.$store.getters.getPositions;
    },
    placeholderUrl () {
      return this.$store.getters.getPlaceholderUrl;
    },
    total () {
      return this.employee.timeOff.reduce((sum, item) => sum + item.days, 0);
    }
  }
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  max-width: 100px;
}
</style>
