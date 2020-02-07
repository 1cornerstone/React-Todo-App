
const express = require('express'),
    router = require('./routes'),
    bodyparser = require('body-parser'),
    {check,validationResult} = require('express-validator'),
    cors = require('cors'),
 app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(check());

app.use(cors());

app.use('/',router);

app.listen(3001, ()=>{console.log("Server responding")});