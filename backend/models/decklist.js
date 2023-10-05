const mongoose = require("mongoose");

const CardSlot = new mongoose.Schema ({
    Question: {
        type: String,
        required: true
    },
    Answer: {
        type: String,
        required: true
    },
    pass: {
        type: Boolean,
        required: true,
        default: false
    }
})

const DecklistSchema = new mongoose.Schema({
    DeckID: {
        type: Int32Array,
        required: true
    },
    Deckname: {
        type: String,
        required: true
    },
    Slots: {
        type: Int32Array,
        required: true
    },
    Deck_data: [CardSlot]
    
})

module.exports.deckModel = mongoose.model('deckModel', DecklistSchema)