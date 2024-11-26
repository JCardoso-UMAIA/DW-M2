'use strict';

var sql= require('../utils/mysql');
/**
 * Criar dados de custo de produção para um filme
 *
 * body CustoProducao 
 * id String 
 * returns CustoProducao
 **/
exports.createCustoProducao = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query( "INSERT INTO Cinema.Custo_Producao (filme_id, custo_producao) VALUES (?, ?)",
    [body.filme_id ,body.custo_producao],
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
 * Obter dados de custo de produção de um filme
 *
 * id String 
 * returns CustoProducao
 **/
exports.getCustoProducao = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Custo_Producao", function(err, res) {
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


