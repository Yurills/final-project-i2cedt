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
router.get('/user', async (req,res) => {
    try {
        const deckItem = await deckModel.findOne({ Username: req.query.username, DeckID: req.query.deckid});
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

router.put('/user', async (req, res) => {
    try {
        const newDeck = await deckModel.replaceOne(
            {
                DeckID: req.query.deckid,
                Username: req.query.username
            },
            {
                Deckname: req.body.Deckname,
                Slots: req.body.Slots, 
                Deck_data: req.body.Deck_data,
                DeckID: req.query.deckid,
                Username: req.query.username
            }
            
            );
        res.status(201).json(newDeck);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
})
export default router;