const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter a name"],
        minlength: [3, "Min length is 3 chars long"],
    },
    score : {
        type: Number,
        required: true,
        min: 0,
    },
    game_id : {
        type: Number,
        default: 1,
    },
}, {timestamp: true});

const Game = mongoose.model("Game", GameSchema);
