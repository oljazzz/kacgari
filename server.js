const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./config/db');
const port = 3012;
const host = '0.0.0.0';
const wordRoutes = require('./routes');
const wordExamplesRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send("Welcome to Kacgari API");
})

db.connect(function (err) {
    if (err) {
        return console.log(err);
    }
    wordRoutes(app);
    wordExamplesRoutes(app);
    app.listen(port, host, () => {
        console.log('Сервер келесі мекен-жайда істеп тұр: ' +
            'http://' + host + ':' + port);
    })

})


