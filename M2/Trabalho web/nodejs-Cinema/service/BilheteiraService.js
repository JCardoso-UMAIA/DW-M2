'use strict';

/**
 * Criar dados de bilheteira para um filme
 *
 * body Bilheteira 
 * id String 
 * returns Bilheteira
 **/
var sql= require('../utils/mysql');

exports.createBilheteira = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Bilheteira (filme_id,pais_exibicao,receita_bilheteira) VALUES (?, ?, ?)",
    [body.filme_id,body.pais_exibicao,body.receita_bilheteira],
    function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res);
      }
    });
});
};

/**
 * Obter dados de bilheteira de um filme
 *
 * id String 
 * returns Bilheteira
 **/
exports.getBilheteira = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Bilheteira", function(err, res) {
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

