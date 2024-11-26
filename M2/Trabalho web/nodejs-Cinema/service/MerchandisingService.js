'use strict';
var sql= require('../utils/mysql');

/**
 * Criar dados de merchandising para um filme
 *
 * body Merchandising 
 * id String 
 * returns Merchandising
 **/
exports.createMerchandising = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Merchandising (filme_id, merchandising) VALUES (?, ?)",
    [body.filme_id,body.merchandising],
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
 * Obter dados de merchandising de um filme
 *
 * id String 
 * returns Merchandising
 **/
exports.getMerchandising = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Merchandising", function(err, res) {
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

