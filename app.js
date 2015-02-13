var zetta = require('zetta');


 //start server, on CF use binded port
var port = process.env.PORT || 3000;

zetta()
 .name('test-zetta-app')
 .link('http://zetta.nova.scapp.io')
 .listen(port);

