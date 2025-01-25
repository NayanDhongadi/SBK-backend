const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/db/db');
const router = require('./src/routes/router');
// const cookieParser = require('cookie-parser');
// const jwt = require('jsonwebtoken');
require('dotenv').config();


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

// app.use(cookieParser());


connectDB();

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
