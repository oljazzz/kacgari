const db = require('../db');
const ObjectID = require('mongodb').ObjectID


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

exports.create = (artist, cb) => {
    db.get().collection('words').insert(artist, (err, result) => {
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