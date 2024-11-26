'use strict';

var utils = require('../utils/writer.js');
var Merchandising = require('../service/MerchandisingService');

module.exports.createMerchandising = function createMerchandising (req, res, next, body, id) {
  Merchandising.createMerchandising(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMerchandising = function getMerchandising (req, res, next, id) {
  Merchandising.getMerchandising()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
