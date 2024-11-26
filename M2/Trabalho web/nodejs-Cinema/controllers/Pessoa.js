'use strict';

var utils = require('../utils/writer.js');
var Pessoa = require('../service/PessoaService');

module.exports.createPessoa = function createPessoa (req, res, next, body) {
  Pessoa.createPessoa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePessoa = function deletePessoa (req, res, next, id) {
  Pessoa.deletePessoa(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPessoa = function getPessoa (req, res, next) {
  Pessoa.getPessoa()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePessoa = function updatePessoa (req, res, next, body, id) {
  Pessoa.updatePessoa(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
