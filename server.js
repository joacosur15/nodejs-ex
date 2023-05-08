//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    https   = require("https");
    fs      = require("fs");
    
Object.assign=require('object-assign')

https
  .createServer(app)
  .listen(8080, ()=>{
    console.log('server is runing at port 8080')
  });
  
app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    
app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  res.send("Hello from express server.")
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

//app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = https ;
