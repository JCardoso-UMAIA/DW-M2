'use strict';
var sql= require('../utils/mysql');

/**
 * Criar uma nova Funcao
 *
 * body Funcao 
 * returns Funcao
 **/
exports.createFuncao = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Funcao (id, nome) VALUES (?, ?)",
      [body.id,body.nome],
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
 * Apagar uma Funcao
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteFuncao = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Cinema.Funcao WHERE id = ?", [id], function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`Funcao com id ${id} apagado com sucesso`);
        resolve({ message: `Funcao com id ${id} apagado com sucesso` });
      }
    });
  });
};;

/**
 * Obter lista de Funcao
 *
 * returns List
 **/
exports.getFuncao = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Funcao", function(err, res) {
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
 * Atualizar uma Funcao
 *
 * body Funcao 
 * id String 
 * returns Funcao
 **/
exports.updateFuncao = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "UPDATE Cinema.Funcao SET nome = ? WHERE id = ?",
      [body.nome, body.id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve({ message: `Funcao com id ${id} atualizado com sucesso` });
        }
      }
    );
  });
};