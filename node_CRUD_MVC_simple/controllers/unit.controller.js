const Unit = require('../models/unit.model');

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Unit id can not be empty"
        });
    }

    // Create a Student
    const unit = new Unit({
        id: req.body._id , 
        name: req.body.name ,
        // color: req.body.color || "red"
    });

    // Save Student in the database
    unit.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Unit."
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Unit.findByIdAndRemove(req.params.uid)
    .then(unit => {
        if(!unit) {
            return res.status(404).send({
                message: "unit not found with id " + req.params.uid
            });
        }
        res.send({message: "unit deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "unit not found with id " + req.params.uid
            });                
        }
        return res.status(500).send({
            message: "Could not delete unit with id " + req.params.uid
        });
    });
};