'use strict'

var http = require('http');
var mysql = require('mysql2'); // Necessario para ligar ao mysql

var connection = mysql.createConnection({ //usa as configuraçoes da base de dados 
    // Validaçao a base de dados , confirma todos os acessos.
        host: process.env.DATABASE_HOST, 
        user: process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT
    });

connection.connect (function(err) {
    if (err) {
        console.error('Erro na ligação à base de dados:', err.message);
        throw err;
    }
    console.log('Ligação à base de dados ativa Cinema.');
});

module.exports = connection;