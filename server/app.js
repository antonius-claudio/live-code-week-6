require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(router);
console.log('test env :', process.env.secret);
app.listen(port, () => {
    console.log('listening port ', port);
})