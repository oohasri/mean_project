const mongoose = require('mongoose');
      Game = mongoose.model('Game');

module.exports = {
    retrive_all: function(req, res) {
    	Game.find({}).sort({ score: -1}).limit(5)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    retrive_id :function(req, res){
        Game.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
    },
    create :function(req, res){
        Game.create(req.body)
        // Game.findOneAndUpdate({_id: p._id}, {Gameid: +1})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update : function(req, res){
        Game.findOneAndUpdate({_id : req.params.id} , req.body, { runValidators: true })
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete : function(req, res){
        Game.deleteOne({_id : req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}