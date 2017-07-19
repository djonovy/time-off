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
		<div class="medium-2 cell">
			<label>&nbsp;</label>
			<button type="submit" class="button expanded" title="Add">Add</button>
		</div>
	</div>
</form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'AddEmployee',
	data() {
		return {
			newEmployee: {
				name: ''
			}
		}
	},
	methods: {
		add: function() {
			let value = this.newEmployee.name;
			if (!value) {
				return true;
			}
			this.$store.commit('ADD_EMPLOYEE', {value});
			this.$toasted.success(`Employee "${value}" has been added.`);
            this.newEmployee.name = '';
		}
	}
}
</script>
