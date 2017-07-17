<template>
<div class="grid-x grid-padding-x">
	<div class="cell">
		<h2 class="title">List of employees</h2>
		<input type="text" placeholder="Search employee" v-model="searchQuery">
        <div class="toolbar-container grid-x">
            <div class="small-2 cell">
                <label class="title middle">Total: {{filteredData.length}}</label>
            </div>
            <div class="small-2 small-offset-6 cell">
                <label for="filterBy" class="text-right middle title">Filter by:</label>
            </div>
            <div class="small-2 cell">
                <select name="filterBy" id="filterBy" class="select" v-model="employeesInfo.employeesActiveFilter">
                    <option v-for="item in filters" :value="item">{{item}}</option>
                </select>
            </div>
        </div>
		<table>
			<colgroup>
				<col width="5%">
				<col width="50%">
				<col width="35%">
				<col width="10%">
			</colgroup>
			<thead>
				<tr>
					<th>#</th>
					<th>Employee</th>
					<th>Balance</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(employee, index) in filteredData">
					<td>{{index + 1}}</td>
					<td>
						<router-link :to="{ name: 'Employee', params: { id: index} }" :title="employee.name" class="link">{{employee.name}}</router-link>
					</td>
					<td>{{employee.balance}}</td>
					<td>{{employeesInfo.defaultVacation}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: 'Employees',
	data() {
        let allFilter = 'All',
            filters = ['Active', 'Inactive', allFilter];
		return {
			searchQuery: '',
            allFilter: allFilter,
            filters: filters
		}
	},
	computed: mapState({
		employeesInfo: function(state) {
			return state.Employees.employeesInfo;
		},
        filteredData: function () {
            let data = this.employeesInfo.employees,
				searchQuery = this.searchQuery,
				activeFilter = this.employeesInfo.employeesActiveFilter;
			if (searchQuery) {
				data = data.filter(function(item) {
				    return item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
				});
			}
            if (activeFilter && activeFilter !== this.allFilter) {
                data = data.filter(function(item) {
                    if (item.status === activeFilter) {
    				    return item.status.toLowerCase().indexOf(activeFilter.toLowerCase()) > -1;
                    }
				});
            }
            return data;
        }
	})
}
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
