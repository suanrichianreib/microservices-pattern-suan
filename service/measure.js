var request = require('request');


const zipCodeURL = 'https://www.zipcodeapi.com/rest/';
const apiKey = process.env.ZIPCODE_API_KEY || "2PkilZzSCAXhw2ggju0QuVojdh8MY8IvT4bimEwhZZBiXTKfPAr4eNPezDPnkIq1";


var measure = {
   find: function(req, res, next) {
       request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',

       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: "Invalid"});
           }
       });

   }
};

module.exports = measure;