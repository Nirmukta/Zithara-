const dummyData =[
    {
        customer_name: 'John Smith',
        age:25,
        phone: '1234567890',
        loaction: 'New York',
        created_at_date: '2021-01-01', 
        created_at_time:'2021-01-01 08:00:00'
    },
    {
        customer_name: 'Emily Johnson',
        age:30,
        phone: '2345678901',
        loaction: 'Los Angeles',
        created_at_date: '2021-01-02', 
        created_at_time:'2021-01-02 09:00:00'
    },
    {
        customer_name: '"Michael Williams"',
        age:35,
        phone: '3456789012',
        loaction: 'Chicago',
        created_at_date: '2021-01-03', 
        created_at_time:'2021-01-03 10:00:00'
    },
    {
        customer_name: 'Sarah Brown',
        age:40,
        phone: '4567890123',
        loaction: 'Houston',
        created_at_date: '2021-01-04',
        created_at_time:'2021-01-04 11:00:00'
    },
    {
        customer_name: 'Daniel Wilson',
        age:45,
        phone: '5678901234',
        loaction: 'Miami',
        created_at_date: '2021-01-05', 
        created_at_time:'2021-01-05 12:00:00'
    },
    {
        customer_name: 'Jessica Martinez',
        age:50,
        phone: '1234567890',
        loaction: 'New York',
        created_at_date: '2021-01-01',
        created_at_time: '2021-01-01 08:00:00'
    },
    {
        customer_name: 'John Smith',
        age:25,
        phone: '6789012345',
        loaction: 'Seattle',
        created_at_date: '2021-01-06', 
        created_at_time:'2021-01-06 13:00:00'
    },
    {
        customer_name: 'Ryan Davis',
        age: 55,
        phone: '7890123456',
        loaction: 'San Francisco',
        created_at_date: '2021-01-07', 
        created_at_time: '2021-01-07 14:00:00'
    },
    {
        customer_name: 'Ava Taylor',
        age:60,
        phone: '8901234567',
        loaction: 'Dallas',
        created_at_date: '2021-01-08',
        created_at_time:'2021-01-08 15:00:00'
    },
    {
        customer_name: 'Matthew Anderson',
        age:65,
        phone: '9012345678',
        loaction: 'Boston',
        created_at_date: '2021-01-09', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-09 16:00:00'
    },
    {
        customer_name: 'Olivia White',
        age:70,
        phone: '0123456789',
        loaction: 'Atlanta',
        created_at_date: '2021-01-10', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-10 17:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Ethan Clark',
        age:75,
        phone: '9876543210',
        loaction: 'Phoenix',
        created_at_date: '2021-01-11', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-11 18:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Sophia Adams',
        age:28,
        phone: '8765432109',
        loaction: 'Denver',
        created_at_date: '2021-01-12', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-12 19:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Noah Moore',
        age:32,
        phone: '7654321098',
        loaction: 'Portland',
        created_at_date: '2021-01-13', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-13 20:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Isabella King',
        age:37,
        phone: '6543210987',
        loaction: 'Austin',
        created_at_date: '2021-01-14', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-14 21:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Logan Perez',
        age:42,
        phone: '5432109876',
        loaction: 'San Diego',
        created_at_date: '2021-01-15', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-15 22:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Amelia Garcia',
        age:48,
        phone: '4321098765',
        loaction: 'Las Vegas',
        created_at_date: '2021-01-16', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-16 23:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Benjamin Hernandez',
        age:53,
        phone: '3210987654',
        loaction: 'Orlando',
        created_at_date: '2021-01-17', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-17 10:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Mia Lopez',
        age:58,
        phone: '2109876543',
        loaction: 'Nashville',
        created_at_date: '2021-01-18', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-18 11:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'James Hill',
        age:64,
        phone: '1098765432',
        loaction: 'New Orleans',
        created_at_date: '2021-01-19', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-19 12:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Avery Torres',
        age:69,
        phone: '0987654321',
        loaction: 'Seattle',
        created_at_date: '2021-01-20', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-20 13:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Harper Scott',
        age:74,
        phone: '9876543210',
        loaction: 'Miami',
        created_at_date: '2021-01-21', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-21 14:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'John Adams',
        age:29,
        phone: '1234321098',
        loaction: 'Chicago',
        created_at_date: '2021-01-22', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-22 15:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Emma Rivera',
        age:36,
        phone: '1234098765',
        loaction: 'Atlanta',
        created_at_date: '2021-01-23', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-23 16:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'William Green',
        age:43,
        phone: '9871065432',
        loaction: 'Houston',
        created_at_date: '2021-01-24', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-24 17:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Aria Powell',
        age:49,
        phone: '9876543012',
        loaction: 'Dallas',
        created_at_date: '2021-01-25', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-25 18:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Alexander Stewart',
        age:55,
        phone: '9876501432',
        loaction: 'San Francisco',
        created_at_date: '2021-01-26', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-26 19:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Charlotte Long',
        age:61,
        phone: '9876504123',
        loaction: 'Los Angeles',
        created_at_date: '2021-01-27', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-27 20:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Henry Diaz',
        age:67,
        phone: '9876540213',
        loaction: 'Miami',
        created_at_date: '2021-01-28', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-28 21:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Scarlett Gray',
        age:73,
        phone: '9876542013',
        loaction: 'New York',
        created_at_date: '2021-01-29', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-29 22:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Jacob Evans',
        age:30,
        phone: '9876542130',
        loaction: 'Denver',
        created_at_date: '2021-01-30', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-30 23:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Lily Fisher',
        age:38,
        phone: '9876521430',
        loaction: 'Austin',
        created_at_date: '2021-01-31', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-01-31 10:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Nicholas Bryant',
        age:44,
        phone: '9876502143',
        loaction: 'Boston',
        created_at_date: '2021-02-01', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-01 11:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Penelope Hayes',
        age:51,
        phone: '9876502413',
        loaction: 'Chicago',
        created_at_date: '2021-02-02', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-02 12:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Madison Coleman',
        age:57,
        phone: '9876501243',
        loaction: 'Las Vegas',
        created_at_date: '2021-02-03', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-03 13:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Gabriel Patel',
        age:63,
        phone: '9876501342',
        loaction: 'Seattle',
        created_at_date: '2021-02-04', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-04 14:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Aiden Wright',
        age:70,
        phone: '9876501234',
        loaction: 'San Diego',
        created_at_date: '2021-02-05', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-05 15:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Natalie Simmons',
        age:76,
        phone: '9876502134',
        loaction: 'Portland',
        created_at_date: '2021-02-06', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-06 16:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Levi Pierce',
        age:82,
        phone: '9876502314',
        loaction: 'Phoenix',
        created_at_date: '2021-02-07', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-07 17:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Hannah Mitchell',
        age:31,
        phone: '9876503124',
        loaction: 'Detroit',
        created_at_date: '2021-02-08', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-08 18:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Dylan Crawford',
        age:39,
        phone: '9876503214',
        loaction: 'Denver',
        created_at_date: '2021-02-09', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-09 19:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Claire Banks',
        age:45,
        phone: '9876503124',
        loaction: 'Austin',
        created_at_date: '2021-02-10', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-10 20:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Owen Cunningham',
        age:52,
        phone: '9876501324',
        loaction: 'Nashville',
        created_at_date: '2021-02-11', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-11 21:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Julian Meyer',
        age:59,
        phone: '9876502134',
        loaction: 'Orlando',
        created_at_date: '2021-02-12', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-12 22:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Brooklyn Hoffman',
        age:66,
        phone: '9876502314',
        loaction: 'New Orleans',
        created_at_date: '2021-02-13', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-13 23:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Aubrey Saunders',
        age:72,
        phone: '9876503214',
        loaction: 'Seattle',
        created_at_date: '2021-02-14', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-14 12:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Wyatt Rodriguez',
        age:78,
        phone: '9876503124',
        loaction: 'Miami',
        created_at_date: '2021-02-15', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-15 13:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Samantha Velasquez',
        age:83,
        phone: '9876501324',
        loaction: 'Dallas',
        created_at_date: '2021-02-16', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-16 14:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Connor Harper',
        age:29,
        phone: '9876502134',
        loaction: 'Chicago',
        created_at_date: '2021-02-17', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-17 15:00:00'//sample timestamp in 'YYYY-MM-DD' format
    },
    {
        customer_name: 'Elena Parks',
        age:37,
        phone: '9876502314',
        loaction: 'Los Angeles',
        created_at_date: '2021-02-18', //sample date in 'YYYY-MM-DD' format
        created_at_time:'2021-02-18 16:00:00' //sample timestamp in 'YYYY-MM-DD' format
    },
    //{
    //   customer_name: 'Tristan Chambers',
    //        age:43,
    //        phone: '9876503214',
    //        loaction: 'Houston',
    //        created_at_date: '2021-02-19', //sample date in 'YYYY-MM-DD' format
    //        created_at_time:'2021-02-19 17:00:00', //sample timestamp in 'YYYY-MM-DD' format
    //},
    
];