<template>
<div class="grid-x grid-padding-x">
  <div class="cell">
    <h2 class="title">List of employees</h2>
    <router-link :to="{ name: 'AddEmployee' }" class="button">Add new employee</router-link>
    <input type="text" placeholder="Search employee" v-model="searchQuery">
    <div class="toolbar-container grid-x">
      <div class="small-2 cell">
        <label class="title middle">Total: {{filteredData.length}}</label>
      </div>
      <div class="small-2 small-offset-6 cell">
        <label for="filterBy" class="text-right middle title">Filter by:</label>
      </div>
      <div class="small-2 cell">
        <select name="filterBy" id="filterBy" class="select" v-model="filterBy">
			      <option v-for="status in statuses" :value="status">
              {{status}}</option>
            <option :value="allFilter">{{allFilter}}</option>
        </select>
      </div>
    </div>
    <table>
      <colgroup>
        <col width="5%">
        <col width="30%">
        <col width="40%">
        <col width="20%">
        <col width="5%">
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>Employee</th>
          <th>Position</th>
          <th>Balance</th>
          <th class="text-right">&nbsp;</th>
        </tr>
      </thead>
      <tbody v-if="filteredData.length">
        <tr v-for="(employee, index) in filteredData">
          <td>{{index + 1}}</td>
          <td>
            <router-link :to="{ name: 'Employee', params: { id: employee.id} }" :title="employee.name" class="link">{{employee.name}}</router-link>
          </td>
          <td>{{employee.position}}</td>
          <td>{{employee.balance}}</td>
          <td class="text-right"><button type="button" @click="remove(employee.id, employee.name)" title="Remove"><svgicon icon="remove" height="18"></svgicon></button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center">There are no results.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import '@/assets/svg/remove';

export default {
  name: 'Employees',
  data () {
    return {
      searchQuery: '',
      allFilter: 'All'
    };
  },
  methods: {
    remove: function (id, name) {
      this.$store.dispatch('removeEmployee', {id});
      this.$toasted.success(`Employee "${name}" has been removed.`);
    }
  },
  computed: {
    statuses () {
      return this.$store.getters.getStatuses;
    },
    filterBy: {
      get () {
        return this.$store.getters.getEmployeesActiveFilter;
      },
      set (type) {
        this.$store.dispatch('filterEmployees', type);
      }
    },
    filteredData () {
      let data = this.$store.getters.getEmployees();
      let searchQuery = this.searchQuery;
      let activeFilter = this.$store.getters.getEmployeesActiveFilter;
      if (searchQuery) {
        data = data.filter(function (item) {
          return item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
        });
      }
      if (activeFilter && activeFilter !== this.allFilter) {
        data = data.filter(function (item) {
          if (item.status === activeFilter) {
            return item.status.toLowerCase().indexOf(activeFilter.toLowerCase()) > -1;
          }
        });
      }
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar-container {
    & {
        margin: 15px 0;
    }
    .title {
        margin: 0;
        padding-right: 5px;
        white-space: nowrap;
    }
    .select {
        margin: 0;
    }
}
</style>
