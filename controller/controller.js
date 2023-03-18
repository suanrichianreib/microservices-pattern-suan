'use strict';

var properties = require('../package.json')
var measure = require('../service/measure');


var controllers = {

   getMeasure: function(req, res) {
           measure.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
};

module.exports = controllers;