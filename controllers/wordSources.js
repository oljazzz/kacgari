const WordSources = require('../models/wordSources');
const ObjectID = require('mongodb').ObjectID


exports.all = (req, res) => {
    WordSources.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = (req, res) => {
    WordSources.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = (req, res) => {
    var example = {
        wordId: ObjectID(req.params.id), 
        text: req.body.text
    };

    WordSources.create(example, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(example);
    })
}

exports.update = (req, res) => {
    WordSources.update(req.params.id, { name: req.body.text }, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    WordSources.delete(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}