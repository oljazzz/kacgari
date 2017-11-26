const wordExamples = require('../controllers/wordExamples');
module.exports = function (app) {
    app.get('/examples', wordExamples.all);
    app.get('/examples/:id', wordExamples.findById);
    app.post('/examples', wordExamples.create);
    app.put('/examples/:id', wordExamples.update);
    app.delete('/examples', wordExamples.delete);

};

