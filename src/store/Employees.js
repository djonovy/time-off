export default {
    namespaced: true,
    state: {
        employeesInfo: {
    		defaultVacation: 21,
    		employees: [{
    				name: 'Marina Roba',
                    gender: 'Male',
                    phone: '',
    				balance: 5,
                    status: 'Active'
    			},
    			{
    				name: 'Olga Mirg',
                    gender: 'Female',
                    phone: '',
                    email: 'test@weg.com',
    				balance: 15,
                    status: 'Active'
    			},
    			{
    				name: 'Red Werr',
                    gender: '',
                    phone: '',
    				balance: 3,
                    status: 'Active'
    			},
    			{
    				name: 'Tom Inactive',
                    gender: '',
                    phone: '',
    				balance: 12,
                    status: 'Inactive'
    			}
    		],
            employeesActiveFilter: 'Active'
    	}
    }
};
