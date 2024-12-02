'use strict';

var sql= require('../utils/mysql');


// Obter dados de bilheteira de um filme

exports.getBilheteira = function(filme_id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Bilheteira WHERE filme_id = ?", [filme_id], function(err, res) {
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


// Atualizar dados de bilheteira de um filme
exports.updateBilheteira = function(body) {
  return new Promise(function(resolve, reject) {
    // Primeiro, verifica se a combinação já existe
    sql.query(
      "SELECT * FROM Cinema.Bilheteira WHERE filme_id = ? AND pais_exibicao = ?",
      [body.filme_id, body.pais_exibicao],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else if (res.length > 0) {
          // Se já existir, rejeita com uma mensagem de erro
          reject(new Error("Entrada duplicada para o filme_id e pais_exibicao"));
        } else {
          // Se não existir, faz a atualização
          sql.query(
            "UPDATE Cinema.Bilheteira SET pais_exibicao = ?, receita_bilheteira = ? WHERE filme_id = ?",
            [body.pais_exibicao, body.receita_bilheteira, body.filme_id],
            function(err, res) {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                console.log(res.affectedRows);
                resolve(res);
              }
            }
          );
        }
      }
    );
  });
};




 
