const db = require('../config/db');
const ObjectID = require('mongodb').ObjectID
const wordExamples = require('./wordExamples');

exports.all = (cb) => {
    db.get().collection('words').find().toArray((err, docs) => {
        cb(err, docs);
    })
}

exports.findById = (id, cb) => {
    db.get().collection('words').findOne({ _id: ObjectID(id), }, (err, doc) => {
        cb(err, doc);
    })
}

exports.create = (word, cb) => {
    db.get().collection('words').insert(word, (err, result) => {
        cb(err, result);
    })
}

exports.update = (id, newData, cb) => {
    db.get().collection('words').updateOne(
        { _id: ObjectID(id) },
        newData,
        (err, result) => {
            cb(err, result);
        }
    )
}

exports.delete = (id, cb) => {
    db.get().collection('words').deleteOne(
        { _id: ObjectID(id) },
        (err, result) => {
            cb(err, result)
        }
    )
}

exports.wordExamples = (wordId, cb) => {
    wordExamples.allExamplesOfWord(wordId, (err, docs) => {
        cb(err, docs);
    })
}