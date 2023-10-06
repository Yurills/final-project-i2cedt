require('dotenv').config();

const express = require("express");
const app = express();
const PORT = 8080;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', (error) => {console.error(error)});
db.once('open', ()=> {console.log("Connect to MONGODB")});

app.use(express.json());

const deckRouter = require("./routes/deckInfo");
app.use('/deckInfo', deckRouter);


app.listen(PORT, ()=> {
    console.log (`server running at https://localhost:${PORT}`);
})