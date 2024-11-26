'use strict';

var utils = require('../utils/writer.js');
var Bilheteira = require('../service/BilheteiraService');

module.exports.createBilheteira = function createBilheteira (req, res, next, body, id) {
  Bilheteira.createBilheteira(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBilheteira = function getBilheteira (req, res, next, id) {
  Bilheteira.getBilheteira()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
