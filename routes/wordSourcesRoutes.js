const wordSources = require('../controllers/wordSources');
module.exports = function (app) {
    app.get('/sources', wordSources.all);
    app.get('/sources/:id', wordSources.findById);
    app.post('/sources', wordSources.create);
    app.put('/sources/:id', wordSources.update);
    app.delete('/sources/:id', wordSources.delete);

};

