<template>
<form id="form-add-employee" @submit.prevent="add">
  <div class="grid-x grid-padding-x">
    <div class="small-12 cell">
      <h2 class="title">Add employee</h2>
    </div>
    <div class="medium-4 cell">
      <label for="newEmployeeName">Name:</label>
      <input type="text" name="newEmployeeName" id="newEmployeeName" v-model.trim="newEmployee.name" autocomplete="off">
    </div>
    <div class="medium-4 cell">
      <label for="newEmployeePosition">Position:</label>
      <select name="newEmployeePosition" id="newEmployeePosition" v-model="newEmployee.position">
        <option disabled value="">Choose option</option>
        <option v-for="position in positions" :value="position">{{position}}</option>
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
export default {
  name: 'AddEmployee',
  data () {
    return {
      newEmployee: {
        name: '',
        status: 'Active',
        position: ''
      }
    };
  },
  methods: {
    add: function () {
      let name = this.newEmployee.name;
      let newEmployee = this.newEmployee;
      if (!name) {
        return true;
      }
      this.$store.dispatch('addEmployee', {newEmployee});
      this.$toasted.success(`Employee "${name}" has been added.`);
      this.newEmployee.name = '';
      this.newEmployee.position = '';
    }
  },
  computed: {
    positions () {
      return this.$store.getters.getPositions;
    }
  }
};
</script>
