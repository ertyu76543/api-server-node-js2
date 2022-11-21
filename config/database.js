const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '52.79.163.178',
    user: 'will',
    port: '3306',
    password: '12345will',
    database: 'willdb'
});

module.exports = {
    pool: pool
};