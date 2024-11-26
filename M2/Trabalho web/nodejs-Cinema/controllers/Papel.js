'use strict';

var utils = require('../utils/writer.js');
var Papel = require('../service/PapelService');

module.exports.createPapel = function createPapel (req, res, next, body) {
  Papel.createPapel(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPapel = function getPapel (req, res, next) {
  Papel.getPapel()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
