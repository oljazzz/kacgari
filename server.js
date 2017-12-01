const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./config/db');
const PORT = process.env.PORT || 5000;

const wordRoutes = require('./routes');
const wordExamplesRoutes = require('./routes');
const wordSourcesRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send("Welcome to Kacgari API"));

db.connect(process.env.MONGODB_URI, (err) => {
    console.log(process.env.MONGODB_URI);
    if (err) {
        return console.log(err);
    }
    wordRoutes(app);
    wordExamplesRoutes(app);
    wordSourcesRoutes(app);
    app.listen(PORT, () => console.log("Server running at " + PORT));

})


