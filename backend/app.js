import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express from 'express';
const app = express();
const PORT = 8080;

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', (error) => {console.error(error)});
db.once('open', ()=> {console.log("Connect to MONGODB")});

app.use(express.json());
app.use(cors());

import Router from './routes/deckInfo.js';
app.use('/deckInfo', Router);

app.use(express.static('frontend/public'));

app.listen(PORT, ()=> {
    console.log (`backend is live at http://localhost:${PORT}`);
})