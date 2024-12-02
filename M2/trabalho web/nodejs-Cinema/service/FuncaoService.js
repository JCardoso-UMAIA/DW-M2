'use strict';
var sql= require('../utils/mysql');


// Obter lista de Funcao 
 
exports.getFuncao = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Funcao" , function(err, res) {
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


// Criar uma nova Funcao
 
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

// Lista todas as FuncoesID

exports.getFuncaoid = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Funcao WHERE id = ?", [id], function(err, res) {
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

// Atualizar uma Funcao


exports.updateFuncao = function(body, id) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "UPDATE Cinema.Funcao SET nome = ? WHERE id = ?",
      [body.nome, id],
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


//Apagar uma Funcao

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


