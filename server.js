const port = process.env.PORT || 1000;

const express = require('express')
const app = express();


const routes = require('./api/apiroutes');
routes(app);


app.listen(port, function() {
   console.log('Port Started: ' + port);
});