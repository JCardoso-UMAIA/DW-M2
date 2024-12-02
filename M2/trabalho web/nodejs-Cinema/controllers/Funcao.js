'use strict';

var utils = require('../utils/writer.js');
var Funcao = require('../service/FuncaoService');

module.exports.createFuncao = function createFuncao (req, res, next, body) {
  Funcao.createFuncao(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFuncaoid = function createFuncaoid (req, res, next, body, id) {
  Funcao.createFuncaoid(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFuncao = function deleteFuncao (req, res, next, id) {
  Funcao.deleteFuncao(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFuncao = function getFuncao (req, res, next) {
  Funcao.getFuncao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFuncaoid = function getFuncaoid (req, res, next, id) {
  Funcao.getFuncaoid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFuncao = function updateFuncao (req, res, next, body, id) {
  Funcao.updateFuncao(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
