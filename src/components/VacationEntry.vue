<template>
<form class="">
	<div class="row">
		<div class="medium-5 columns">
			<label for="employeeName">Select employee:</label>
            <select name="employeeName" id="employeeName">
                <option v-for="(item, index) in employeesInfo.employees" :value="index">
                    {{item.name}}
                </option>
            </select>
		</div>
        <div class="medium-5 columns">
            <label for="vacationAmount">Vacation amount:</label>
            <input type="number" name="vacationAmount" id="vacationAmount" :value="addVacation.days">
		</div>
        <div class="medium-2 columns">
            <label>&nbsp;</label>
            <button type="submit" class="button small-12">Send</button>
		</div>
	</div>
</form>
</template>

<script>
export default {
	name: 'employeesEntry',
	props: ['employeesInfo'],
	data() {
		return {
			addVacation: {
				employee: '',
				days: 0
			}
		}
	}
}
</script>

<style>
</style>
