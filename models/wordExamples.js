const db = require('../config/db');
const ObjectID = require('mongodb').ObjectID
const collectionName = 'wordExamples';

exports.allExamplesOfWord = (wordId, cb) => {
    db.get().collection(collectionName).find({ wordId: ObjectID(wordId) }).toArray((err, examples) => {
        cb(err, examples);
    })
}

exports.all = (cb) => {
        db.get().collection(collectionName).find().toArray((err, examples) => {
            cb(err, examples);
        })
    }

exports.findById = (id, cb) => {
    db.get().collection(collectionName).findOne({ _id: ObjectID(id), }, (err, doc) => {
        cb(err, doc);
    })
}

exports.create = (example, cb) => {
    db.get().collection(collectionName).insert(example, (err, result) => {
        cb(err, result);
    })
}

exports.update = (id, newData, cb) => {
    db.get().collection(collectionName).updateOne(
        { _id: ObjectID(id) },
        newData,
        (err, result) => {
            cb(err, result);
        }
    )
}

exports.delete = (id, cb) => {
    db.get().collection(collectionName).deleteOne(
        { _id: ObjectID(id) },
        (err, result) => {
            cb(err, result)
        }
    )
}