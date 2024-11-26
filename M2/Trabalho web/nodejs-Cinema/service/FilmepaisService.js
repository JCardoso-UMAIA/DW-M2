'use strict';

var sql= require('../utils/mysql');
/**
 * Associar um país a um filme
 *
 * body Filmepais 
 * id Integer 
 * returns Filmepais
 **/
exports.addFilmepais = function(body, id) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO Cinema.Filme_Pais (filme_id, pais) VALUES (?, ?)",
      [body.filme_id, body.pais],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res);
        }
      }
    );
  });
};

/**
 * Obter a listagem dos Filmes Pais
 **/
exports.getFilmepais = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Filme_Pais", function(err, res) {
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


