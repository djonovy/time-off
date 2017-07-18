export default {
	defaultVacation: 21,
	employees: [
		{
			id: 0,
			name: 'Marina Roba',
            gender: 'Male',
            phone: '',
			balance: 5,
            status: 'Active'
		},
		{
			id: 1,
			name: 'Olga Mirg',
            gender: 'Female',
            phone: '',
            email: 'test@weg.com',
			balance: 15,
            status: 'Active'
		},
		{
			id: 2,
			name: 'Red Werr',
            gender: '',
            phone: '',
			balance: 3,
            status: 'Active'
		},
		{
			id: 3,
			name: 'Tom Inactive',
            gender: '',
            phone: '',
			balance: 12,
            status: 'Inactive'
		}
	],
	genders: ['Male', 'Female'],
    statuses: ['Active', 'Inactive'],
	timeOffTypes: ['Annual', 'By illness'],
    employeesActiveFilter: 'Active'
};
