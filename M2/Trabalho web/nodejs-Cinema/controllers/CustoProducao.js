'use strict';

var utils = require('../utils/writer.js');
var CustoProducao = require('../service/CustoProducaoService');

module.exports.createCustoProducao = function createCustoProducao (req, res, next, body, id) {
  CustoProducao.createCustoProducao(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustoProducao = function getCustoProducao (req, res, next, id) {
  CustoProducao.getCustoProducao()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
