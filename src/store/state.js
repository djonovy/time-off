export default {
  defaultVacation: 21,
  employees: [
    {
      id: 0,
      name: 'Marina Roba',
      position: 'Front-end developer',
      gender: 'Male',
      phone: '',
      balance: 17,
      status: 'Active',
      timeOff: [
        {
          days: 4,
          from: '09 May 2017',
          to: '12 May 2017',
          note: 'Test note',
          type: 'Annual'
        }
      ]
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
  positions: ['Front-end developer', 'Back-end developer', 'Sales manager', 'Project manager', 'Office manager', 'PR manager', 'Business Analyst', 'CTO', 'HR manager'],
  timeOffTypes: ['Annual', 'By illness'],
  employeesActiveFilter: 'Active',
  placeholderUrl: '/static/placeholder.png'
};
