var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./controllers/artists');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req,res){
    res.send("Hello Karla");
})

db.connect('mongodb://localhost:32768/mydb', function(err){
    if(err){
        return console.log(err);
    }
    
    app.listen(3012, function(){
        console.log('Сервер сәтті қосылды!');
    })

})

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);



