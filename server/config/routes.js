const mongoose = require('mongoose');
      Game = mongoose.model('Game');
      games = require('../controllers/controllers.js');

module.exports = function(app) {
    app.get('/users', (req, res) => {
        games.retrive_all(req, res);
    });
    app.post('/users/new', (req, res) => {
        games.create(req, res);
    });
    app.put('/game/update/:id', (req, res) => {
        games.update(req, res);
    });
    app.get('/game/edit/:id', (req, res) => {
        games.retrive_id(req, res);
    });
    app.delete('/game/delete/:id', (req, res) =>{
        games.delete(req, res);
    });
}