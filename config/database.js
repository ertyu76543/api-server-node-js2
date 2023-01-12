const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '44.212.65.221',
    user: 'will',
    port: '3306',
    password: '1q2w3e4r',
    database: 'willDB'
});

module.exports = {
    pool: pool
};