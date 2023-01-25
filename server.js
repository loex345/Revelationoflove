const express = require('express')
const app = express();

require('dotenv').config()
require('./config/database')

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

require('./utils/users-api')
app.use("/api/users", require('./routes/api/users'))

console.log(process.env.DATABASE_URL)

app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}`));