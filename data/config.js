const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: 'hosthost',
    user: 'root',
    password: 'root',
    database: 'api',
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;