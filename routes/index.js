const wordRoutes = require('./wordRoutes');
const wordExamplesRoutes = require('./wordExamplesRoutes');
module.exports = function(app){
    wordRoutes(app);
    wordExamplesRoutes(app);
}