"use strict";
require('./mongo');
const http = require('http');
const api = require('./app');
const configuration = require('./utils/config');
const PORT = configuration.port;
const server = http.createServer(api);
server.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});
