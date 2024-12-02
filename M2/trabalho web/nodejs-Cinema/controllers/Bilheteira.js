'use strict';

var utils = require('../utils/writer.js');
var Bilheteira = require('../service/BilheteiraService');


module.exports.getBilheteira = function getBilheteira (req, res, next, id) {
  Bilheteira.getBilheteira(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBilheteira = function updateBilheteira(req, res, next, body, id) {
  body.filme_id = id; // Adiciona o filme_id ao corpo da requisição
  Bilheteira.updateBilheteira(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      utils.writeJson(res, { message: error.message });
    });
};

