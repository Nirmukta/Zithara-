const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const cors=require('cors');
const App = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
});

App.use(cors())
App.use(express.json());

// Define GET endpoint to fetch customer data
App.get('/api/customers', async (req, res) => {
  try {
    const { rows } = await pool.query('Select * from customers');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching customer data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define POST endpoint to create a new customer
App.post('/api/customers', async (req, res) => {
    try {
      const { customer_name, age, phone, location ,created_date,created_time} = req.body;
      res.status(201).json({
        status: 'success',
        data: {
          customer_name,
          age,
          phone,
          location,
          created_date,
          created_time
        }
      });
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Start the server
App.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});