'use strict';

var utils = require('../utils/writer.js');
var Filmepais = require('../service/FilmepaisService.js');

module.exports.addFilmepais = function addFilmepais(req, res, next, body, id) {
  Filmepais.addFilmepais(body, id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmepais = function getFilmepais(req, res, next) {
  Filmepais.getFilmepais()
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};
