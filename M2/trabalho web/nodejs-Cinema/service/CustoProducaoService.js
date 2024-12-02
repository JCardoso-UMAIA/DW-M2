'use strict';

var sql= require('../utils/mysql');


// Obter dados de custo de produção de um filme

exports.getCustoProducao = function(filme_id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Custo_Producao WHERE filme_id = ?", [filme_id], function(err, res) {
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

// Atualizar dados de custo de produção para um filme

exports.updateCustoProducao = function(body, id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE Cinema.Custo_Producao SET custo_producao = ? WHERE filme_id = ?",
      [body.custo_producao, id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      }
    );
  });
};
