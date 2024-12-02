'use strict';

var utils = require('../utils/writer.js');
var FilmePais = require('../service/FilmePaisService');


//Pesquisar um Filme

module.exports.getFilmepais = function getFilmepais (req, res, next, id) {
  FilmePais.getFilmepais(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


//Atualizar um filme


module.exports.addFilmepais = function addFilmepais (req, res, next, body, id) {
  FilmePais.addFilmepais(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


