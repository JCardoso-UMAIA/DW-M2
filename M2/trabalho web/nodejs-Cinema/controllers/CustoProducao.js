'use strict';

var utils = require('../utils/writer.js');
var CustoProducao = require('../service/CustoProducaoService');


module.exports.getCustoProducao = function getCustoProducao (req, res, next, id) {
  CustoProducao.getCustoProducao(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustoProducao = function updateCustoProducao(req, res, next, body, id) {
  CustoProducao.updateCustoProducao(body, id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

