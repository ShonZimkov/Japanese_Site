module.exports = (app) => {
    const units = require('../controllers/unit.controller');

    // Create a new Note
    app.post('/units', units.create);
    
    // Delete a Note with cid
    app.delete('/units/:uid', units.delete);
}