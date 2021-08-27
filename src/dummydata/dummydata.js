
module.exports = {
  users: [
    {
      id: 1,
      first_name: 'Justin',
      last_name: 'Case',
      current_rating: 2,
      email: 'redwoodentertainment@gmail.com',
      phone: 2342634275,
      profile_pic: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946",
      location: [
        {
          street_name: '11403 June Dr',
          city: 'Austin',
          state: 'TX',
          zipcode: 78753
        },
      ]
    },
    {
      id: 2,
      first_name: 'Christian',
      last_name: 'Gazmuri',
      current_rating: 5,
      email: 'christiangazmo@gmail.com',
      phone: 2342633225,
      profile_pic: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946",
      location: [
        {
          street_name: '1652 Rutland Dr #46',
          city: 'Austin',
          state: 'TX',
          zipcode: 78758
        },
      ]
    }
  ],

  contributions: [
    {
      id: 1,
      user: {
        id: 1,
        first_name: 'Justin',
        last_name: 'Case',
        current_rating: 2,
        email: 'redwoodentertainment@gmail.com',
        phone: 2342634275,
        location: [
          {
            street_name: '11403 June Dr',
            city: 'Austin',
            state: 'TX',
            zipcode: 78753
          }
        ],
        profile_pic: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'
      },
      title: 'Socks',
      description: 'Extra socks! XL',
      category: 'Clothing',
      date: '2021-08-20 03:14:07',
      condition: 'Used',
      available: true,
      photos: ["https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946"],
    },
    {
      id: 2,
      user: {
        id: 1,
        first_name: 'Justin',
        last_name: 'Case',
        current_rating: 2,
        email: 'redwoodentertainment@gmail.com',
        phone: 2342634275,
        location: [
          {
            street_name: '11403 June Dr',
            city: 'Austin',
            state: 'TX',
            zipcode: 78753
          }
        ],
        profile_pic: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'
      },
      title: 'Spicy Miso Ramen',
      description: 'Delicious ramen',
      category: 'Food',
      date: '2021-08-25 03:14:07',
      condition: 'new',
      available: true,
      photos: ['https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'],
    },
    {
      id: 3,
      user: {
        id: 1,
        first_name: 'Justin',
        last_name: 'Case',
        current_rating: 2,
        email: 'redwoodentertainment@gmail.com',
        phone: 2342634275,
        location: [
          {
            street_name: '11403 June Dr',
            city: 'Austin',
            state: 'TX',
            zipcode: 78753
          },
        ],
        profile_pic: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'
      },
      title: 'Canned soup',
      description: 'Too full, couldn\'t finish',
      category: 'Food',
      date: '2021-08-22 03:14:07',
      condition: 'used',
      available: true,
      photos: ['https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'],
      location: [
        {
          street_name: '1331 boombayah',
          city: 'Austin',
          state: 'TX',
          zipcode: '78751',
        }
      ],
    }
  ],

  requests: [
    {
      id: 1,
      user: {
        id: 1,
        first_name: 'Justin',
        last_name: 'Case',
        current_rating: 2,
        email: 'redwoodentertainment@gmail.com',
        phone: 2342634275,
        location: [
          {
            street_name: '11403 June Dr',
            city: 'Austin',
            state: 'TX',
            zipcode: 78753
          },
        ],
        profile_pic: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'
      },
      title: 'I need a bed :(',
      description: 'King size ONLY!!',
      category: 'Furniture',
      date: '2021-08-22 03:14:07',
      available: true,
    },
    {
      id: 2,
      user: {
        id: 2,
        first_name: 'Christian',
        last_name: 'Gazmuri',
        current_rating: 5,
        email: 'christiangazmo@gmail.com',
        phone: 2342633225,
        profile_pic: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946'
        location: [
          {
            street_name: '1652 Rutland Dr #46',
            city: 'Austin',
            state: 'TX',
            zipcode: 78758
          },
        ]
      }
      title: 'Water',
      description: 'Need H2O',
      category: 'Beverage',
      date: '2021-08-22 03:14:07',
      available: true,
    },
  ]
}
