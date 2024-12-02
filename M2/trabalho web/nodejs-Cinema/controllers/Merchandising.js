'use strict';

var utils = require('../utils/writer.js');
var Merchandising = require('../service/MerchandisingService');

module.exports.getMerchandising = function getMerchandising (req, res, next, id) {
  Merchandising.getMerchandising(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.updateMerchandising = function updateMerchandising(req, res, next, body, id) {
  body.filme_id = id; // Adiciona o filme_id ao corpo da requisição
  Merchandising.updateMerchandising(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

