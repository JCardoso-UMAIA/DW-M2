'use strict';

var utils = require('../utils/writer.js');
var Papel = require('../service/PapelService');


module.exports.getPapel = function getPapel(req, res, next) {
  const { pessoa_id, filme_id, funcao_id } = req.query;
  Papel.getPapel(pessoa_id, filme_id, funcao_id)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.createPapel = function createPapel(req, res, next) {
  const body = req.body;
  Papel.createPapel(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};


