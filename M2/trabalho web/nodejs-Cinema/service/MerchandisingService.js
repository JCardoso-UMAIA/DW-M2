'use strict';
var sql= require('../utils/mysql');

 //Obter dados de merchandising de um filme

exports.getMerchandising = function(filme_id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Cinema.Merchandising WHERE filme_id = ?",[filme_id], function(err, res) {
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

 // Atualizar Merchandising
 exports.updateMerchandising = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query(
      "UPDATE Cinema.Merchandising SET merchandising = ? WHERE filme_id = ?",
      [body.merchandising, body.filme_id],
      function(err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.affectedRows); // Use affectedRows para atualizações
          resolve(res);
        }
      }
    );
  });
};
