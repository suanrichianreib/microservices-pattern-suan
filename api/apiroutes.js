'use strict';

const controller = require('../controller/controller');

module.exports = function(app) {

   app.route('/measure/:zipcode1/:zipcode2')
       .get(controller.getMeasure);
};