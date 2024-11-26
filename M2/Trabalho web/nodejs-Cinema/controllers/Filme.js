'use strict';

var utils = require('../utils/writer.js');
var Filme = require('../service/FilmeService');

module.exports.createFilme = function createFilme (req, res, next, body) {
  Filme.createFilme(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilme = function deleteFilme (req, res, next, id) {
  Filme.deleteFilme(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilme = function getFilme (req, res, next) {
  Filme.getFilme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFilme = function updateFilme (req, res, next, body, id) {
  Filme.updateFilme(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
