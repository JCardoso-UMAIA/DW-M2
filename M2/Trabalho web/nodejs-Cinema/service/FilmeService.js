'use strict';
var sql= require('../utils/mysql');

/**
 * Criar um novo filme
 *
 * body Filme 
 * returns Filme
 **/
exports.createFilme = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Filme (filme_id, nome, realizador_id,genero,ano,pais) VALUES (?, ?, ?,?, ?, ?)",
    [body.filme_id,body.nome,body.realizador_id,body.genero,body.ano, body.pais],
    function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
});
};

/**
 * Apagar um filme
 *
 * id String 
 * returns Filme
 **/
exports.deleteFilme = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Cinema.Filme WHERE filme_id = ?", [id], function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve({ message: `Filme com id ${id} apagado com sucesso` });
      }
    });
  });
};;


/**
 * Obter lista de filmes
 *
 * returns List
 **/
exports.getFilme = function() {
  return new Promise(function(resolve, reject) {
    sql.query("select * from Cinema.Filme", function(err, res)  {
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


/**
 * Atualizar um filme
 *
 * body Filme 
 * id String 
 * returns Filme
 **/
exports.updateFilme = function(id, body) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "UPDATE Cinema.Filme SET nome = ?, realizador_id = ?, genero = ?, ano = ?, pais = ? WHERE filme_id = ?",
      [body.nome,body.realizador_id,body.genero,body.ano,body.pais,body.filme_id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve({ message: `Filme atualizado com sucesso` });
        }
      }
    );
  });
};

