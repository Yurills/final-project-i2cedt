import express from "express";
const app = express();
const PORT = 8080;
import DeckList from "./deck.json" assert {type: 'json'};

app.get("/decklist", (req, res)=> {
    res.status(200).json(DeckList);
}
)

app.listen(PORT, ()=> {
    console.log (`server running at https://localhost:${PORT}`);
})