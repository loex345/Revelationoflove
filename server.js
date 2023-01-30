const express = require('express')
const logger = require('morgan')
var http = require('http');
const app = express();
const methodOverride = require('method-override');

require('dotenv').config()
require('./config/database')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./utils/users-api')
app.use("/api/users", require('./routes/api/users'))
app.use("/api/lessons", require('./routes/api/lessons'))
app.use(logger('dev'))

app.use(methodOverride('_method'));

// app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}`));


var server = http.createServer(app);


server.listen(PORT);
