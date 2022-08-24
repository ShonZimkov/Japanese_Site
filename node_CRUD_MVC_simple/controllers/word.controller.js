const Word = require('../models/word.model');

// Create and Save a new word
exports.create = (req, res) => {
    // Validate request
    if(!req.body.japanese ) {
        return res.status(400).send({
            message: "japanese word can not be empty"
        });
    }
    if(!req.body.translation) {
        return res.status(400).send({
            message: "translation word can not be empty"
        });
    }
    if( !req.body.unit) {
        return res.status(400).send({
            message: "unit number can not be empty"
        });
    }

    // Create a Word
    const word = new Word({
        japanese: req.body.japanese , 
        translation: req.body.translation, 
        unit: req.body.unit
    });

    // Save Word in the database
    word.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Word."
        });
    });
};

// Retrieve and return all words from the database.
exports.findAll = (req, res) => {
    Word.find().then(words => res.send(words)
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving words."
        });
    });
};

exports.findRand = (req, res) => {
    Word.find().then(words => res.send(words[Math.floor(Math.random() * words.length)])
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving words."
        });
    });
};

// Find a single word 
exports.findOne = (req, res) => {
    Word.findById(req.params.wid)
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });            
        }
        res.send(word);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });                
        }
        return res.status(500).send({
            message: "Error retrieving word with id " + req.params.wid
        });
    });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.japanese) {
        return res.status(400).send({
            message: "japanese word can not be empty"
        });
    }

    // Find note and update it with the request body
    Word.findByIdAndUpdate(req.params.wid, {
        japanese: req.body.japanese ,
        translation: req.body.translation,
        unit : req.body.unit
    }, {new: true})
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });
        }
        res.send(word);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });                
        }
        return res.status(500).send({
            message: "Error updating word with id " + req.params.wid
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Word.findByIdAndRemove(req.params.wid)
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });
        }
        res.send({message: "word deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wid
            });                
        }
        return res.status(500).send({
            message: "Could not delete word with id " + req.params.wid
        });
    });
};