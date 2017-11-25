const MongoClient = require('mongodb').MongoClient;
const databaseUrl = require('./url');
var state = {
    db: null
};

exports.connect = (done) => {
    if (state.db) {
        return done();
    }
    MongoClient.connect(databaseUrl.url, (err, db) => {
        if (err) {
            return done(err);
        }
        state.db = db;
        done();
    })

}

exports.get = () => {
    return state.db;
}