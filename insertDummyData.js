const {Pool} = require('pg');
require('dotenv').config();
const dummyData = require('file:///C:/Users/CH.VSIVARAMA%20KRISHNA/OneDrive/Desktop/New%20folder/server/dummyData.js'); //insert dummy data file 

const Pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const insertDummyData =async () =>{
    try{
        const client = await Pool.connect();
        //insert logic here using dummydata array
        client.release();
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:',error);
    } finally {
        Pool.end();
    }
};

insertDummyData();