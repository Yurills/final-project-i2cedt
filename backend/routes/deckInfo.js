import express from 'express'
const router = express.Router();
import deckModel from '../models/decklist.js'

//get all
router.get('/', async (req,res) => {
    try {
        const deckItem = await deckModel.find();
        res.json(deckItem);
    }catch (error){
        res.status(500).send(error.message);
    }
})

//get deck
router.get('/:id', async (req,res) => {
    try {
        const deckItem = await deckModel.findOne({ DeckID: req.params.id });
        res.json(deckItem);
    }catch (error){
        res.status(500).send(error.message);
    }
}
)

//add deck object
router.post('/', async (req,res) => {
    const deck = new deckModel({
        DeckID: req.body.DeckID,
        Deckname: req.body.Deckname,
        Slots: req.body.Slots, 
        Deck_data: req.body.Deck_data,
        Username : req.body.Username
    })
    try {
        const newDeck = await deck.save();
        res.status(201).json(newDeck);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
})

export default router;