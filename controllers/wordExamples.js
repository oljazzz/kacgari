const WordExamples = require('../models/wordExamples');
const ObjectID = require('mongodb').ObjectID

exports.all = (req, res) => {
    WordExamples.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = (req, res) => {
    WordExamples.findById(req.params.id, (err, doc) => {
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

    WordExamples.create(example, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(example);
    })
}

exports.update = (req, res) => {
    WordExamples.update(req.params.id, { name: req.body.text }, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    WordExamples.delete(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}