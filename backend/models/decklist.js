import mongoose from 'mongoose'

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
        type: Number,
        required: true
    },
    Deckname: {
        type: String,
        required: true
    },
    Slots: {
        type: Number,
        required: true
    },
    Deck_data: [CardSlot]
    
})

export default mongoose.model('deckModel', DecklistSchema);
