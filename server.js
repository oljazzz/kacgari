const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./config/db');
const port = 3012;
const wordsController = require('./controllers/words');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send("Hello Kacgari API");
})

db.connect(function (err) {
    if (err) {
        return console.log(err);
    }

    app.listen(port, () => {
        console.log('Сервер сәтті қосылды!');
    })

})

app.get('/words', wordsController.all);
app.get('/words/:id', wordsController.findById);
app.post('/words', wordsController.create);
app.put('/words/:id', wordsController.update);
app.delete('/words', wordsController.delete);

