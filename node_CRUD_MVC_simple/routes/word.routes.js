module.exports = (app) => {
    const words = require('../controllers/word.controller');

    // Create a new Note
    app.post('/words', words.create);

    // Retrieve all words
    app.get('/words', words.findAll);

    // Retrieve a single Note with noteId
    app.get('/words/:wid', words.findOne);

    // Update a Note with wid
    app.put('/words/:wid', words.update);

    // Delete a Note with wid
    app.delete('/words/:wid', words.delete);

    app.get('/wordrand', words.findRand);
}