const Words = require('../models/words');

exports.all = (req, res) => {
    Words.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = (req, res) => {
    Words.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = (req, res) => {
    const word = {
        text: req.body.text,
        desc: req.body.desc
    };

    Words.create(word, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(word);
    })
}

exports.update = (req, res) => {
    Words.update(req.params.id, { name: req.body.name }, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Words.delete(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.examples = (req, res) => {
    Words.wordExamples(req.params.id, (err, examples) => {
        console.log(req.params.id);
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        
        res.send(examples);
    })
}