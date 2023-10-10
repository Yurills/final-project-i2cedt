import express from 'express'
const router = express.Router();
import userData from '../models/user.js'

router.get('/', async (req,res) => {
    try {
        const user = await userData.find();
        res.json(user);
    }catch (error){
        res.status(500).send(error.message);
    }
})

//get userdata from username
router.get('/:id', async (req,res) => {
    try {
        const user = await userData.findOne({ Username: req.params.id });
        res.json(user);
    }catch (error){
        res.status(500).send(error.message);
    }
}
)

//add userData
router.post('/', async (req,res) => {
    const user = new userData({
        Username: req.body.Username,
        Password: req.body.Password
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
})

export default router;