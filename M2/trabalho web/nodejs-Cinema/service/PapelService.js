'use strict';

var sql= require('../utils/mysql');


//Obter todos os papéis

exports.getPapel = function(pessoa_id, filme_id, funcao_id) {
  return new Promise(function(resolve, reject) {
    let query = "SELECT * FROM Cinema.Papel";
    let conditions = [];
    let params = [];

    if (pessoa_id) {
      conditions.push("pessoa_id = ?");
      params.push(pessoa_id);
    }
    if (filme_id) {
      conditions.push("filme_id = ?");
      params.push(filme_id);
    }
    if (funcao_id) {
      conditions.push("funcao_id = ?");
      params.push(funcao_id);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    sql.query(query, params, function(err, res) {
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


 //Criar um papel

 exports.createPapel = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "INSERT INTO Cinema.Papel (funcao_id, pessoa_id, filme_id) VALUES (?, ?, ?)",
      [body.funcao_id, body.pessoa_id, body.filme_id],
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



 

