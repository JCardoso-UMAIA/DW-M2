'use strict';
var sql= require('../utils/mysql');

// Criar uma nova pessoa
exports.createPessoa = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Pessoa (id,nome,nome_artistico,data_nascimento,local_nascimento,data_morte,local_morte) VALUES (?, ?,?,?, ?,?,?)",
      [body.id,body.nome,body.nome_artistico, body.data_nascimento,body.local_nascimento,body.data_morte,body.local_morte],
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

// Obter lista de pessoas
exports.getPessoa = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Pessoa", function(err, res) {
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


 exports.getPessoaid = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Pessoa WHERE id = ?", [id], function(err, res) {
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


 //Atualizar uma pessoa
 exports.updatePessoa = function(body, id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE Cinema.Pessoa SET nome = ?, nome_artistico = ?, data_nascimento = ?, local_nascimento = ?, data_morte = ?, local_morte = ? WHERE id = ?",
      [body.nome, body.nome_artistico, body.data_nascimento, body.local_nascimento, body.data_morte, body.local_morte, id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(`Pessoa com id ${id} atualizada com sucesso`);
          resolve({ message: `Pessoa com id ${id} atualizada com sucesso` });
        }
      }
    );
  });
};

//Apagar uma pessoa ID
exports.deletePessoa = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Cinema.Pessoa WHERE id = ?", [id], function(err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`Pessoa com id ${id} apagado com sucesso`);
        resolve(res);;
      }
    });
  });
};;