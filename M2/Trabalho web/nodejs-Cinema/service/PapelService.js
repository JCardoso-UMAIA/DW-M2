'use strict';

var sql= require('../utils/mysql');
/**
 * Criar um papel
 *
 * body Papel 
 * returns Papel
 **/
exports.createPapel = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Papel (funcao_id,pessoa_id,filme_id) VALUES (?, ?,?)",
      [body.funcao_id,body.pessoa_id,body.filme_id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res.insertId);
        }
      });
  });
  };


/**
 * Obter todos os papéis
 *
 * returns List
 **/
exports.getPapel = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Papel", function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
 };

