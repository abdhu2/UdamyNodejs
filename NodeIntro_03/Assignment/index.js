const url = require('http');
const routes = require('./routes');

const server = url.createServer(routes);

server.listen(3000);

