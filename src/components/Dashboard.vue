<template>
<div class="grid-x grid-padding-x">
  <div class="small-12 cell">
    <h1>{{msg}}</h1>
    <div class="recently-hired" v-if="filteredHires.length">
      <h3>Recently hired</h3>
      <table>
        <thead>
          <tr>
            <th width="2%">#</th>
            <th width="30%">Employee</th>
            <th>Position</th>
            <th class="text-right">Hire date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in filteredHires" :key="employee.id">
            <td>{{index + 1}}</td>
            <td><router-link :to="{name: 'Employee', params: {id: employee.id}}">{{employee.name}}</router-link></td>
            <td>{{employee.position}}</td>
            <td class="text-right">{{employee.hire}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="neartest-timeoffs" v-if="filteredTimeOffs.length">
      <h3>Nearest time offs</h3>
      <table>
        <thead>
          <tr>
            <th width="2%">#</th>
            <th width="30%">Employee</th>
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th class="text-right">Days</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(timeOff, index) in filteredTimeOffs" :key="index">
            <td>{{index + 1}}</td>
            <td><router-link :to="{name: 'Employee', params: {id: timeOff.id}}">{{timeOff.name}}</router-link></td>
            <td>{{timeOff.from}}</td>
            <td>{{timeOff.to}}</td>
            <td>{{timeOff.type}}</td>
            <td class="text-right">{{timeOff.days}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'HR Portal',
      timeOffs: [],
      todayTime: new Date().getTime(),
      timeStampCoefficient: 60 * 60 * 24 * 1000,
      recentlyHiredPeriod: 31,
      timeOffPeriod: 31
    };
  },
  computed: {
    employees () {
      return this.$store.getters.getEmployees();
    },
    filteredHires () {
      return this.employees.filter(item => {
        let hireTime = item.hire ? new Date(item.hire).getTime() : 0;
        let periodTime = hireTime + (this.recentlyHiredPeriod * this.timeStampCoefficient);
        return periodTime > this.todayTime;
      });
    },
    filteredTimeOffs () {
      for (var i = 0; i < this.employees.length; i++) {
        let item = this.employees[i];
        if (item.timeOff && item.timeOff.length) {
          let periodTime = this.todayTime + (this.timeOffPeriod * this.timeStampCoefficient);
          let name = item.name;
          let id = item.id;
          item.timeOff.forEach(item => {
            let timeOffStartTime = new Date(item.from).getTime();
            if (timeOffStartTime + this.timeStampCoefficient >= this.todayTime && timeOffStartTime <= periodTime) {
              item.id = id;
              item.name = name;
              this.timeOffs.push(item);
            }
          });
        }
      }
      return this.timeOffs;
    }
  }
};
</script>
