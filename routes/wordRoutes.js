const ObjectID = require('mongodb').ObjectID
const wordsController = require('../controllers/words');
const wordExamples = require('../controllers/wordExamples');
module.exports = function(app){
    app.get('/words', wordsController.all);
    app.get('/words/:id', wordsController.findById);
    app.post('/words', wordsController.create);
    app.put('/words/:id', wordsController.update);
    app.delete('/words', wordsController.delete);
    app.get('/words/:id/examples', wordsController.examples);
    app.post('/words/:id/examples', wordExamples.create);
};

