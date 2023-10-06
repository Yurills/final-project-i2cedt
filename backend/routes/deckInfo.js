const express = require('express');
const router = express.Router();
const deckModel = require('../models/decklist');

//get all
router.get('/', async (req,res) => {
    try {
        const deckItem = await deckModel.find();
        res.json(deckItem);
    }catch (error){
        res.status(500).send(error.message);
    }
})

//add deck object
router.post('/', async (req,res) => {
    const deck = new deckModel({
        DeckID: req.body.DeckID,
        Deckname: req.body.Deckname,
        Slots: req.body.Slots, 
        Deck_data: req.body.Deck_data
    })
    try {
        const newDeck = await deck.save();
        res.status(201).json(newDeck);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;