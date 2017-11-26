const wordRoutes = require('./wordRoutes');
const wordExamplesRoutes = require('./wordExamplesRoutes');
const wordSourcesRoutes = require('./wordSourcesRoutes');
module.exports = function(app){
    wordRoutes(app);
    wordExamplesRoutes(app);
    wordSourcesRoutes(app);
}