'use strict';

var sql= require('../utils/mysql');


// Obter a listagem dos Filmes Pais

exports.getFilmepais = function(req, res) {
  const filme_id = req.params.id;
  sql.query("SELECT * FROM Cinema.Filme_Pais WHERE filme_id = ?", [filme_id], function(err, result) {
    if (err) {
      res.status(500).send({ message: "Erro ao buscar países do filme" });
    } else {
      res.status(200).json(result);
    }
  });
};


// Obter dados de custo de produção de um filme

exports.addFilmepais = function(id, body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO Cinema.Filme_Pais (filme_id, pais) VALUES (?, ?)",
      [id, body.pais],
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


