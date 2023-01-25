const express = require('express')
const logger = require('morgan')
var http = require('http');
const app = express();

require('dotenv').config()
require('./config/database')

const PORT = process.env.PORT || 3000;

app.use(express.json())

require('./utils/users-api')
app.use("/api/users", require('./routes/api/users'))
app.use(logger('dev'))

// app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}`));


var server = http.createServer(app);


server.listen(PORT);
