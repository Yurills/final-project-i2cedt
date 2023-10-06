import express from 'express';
const app = express();
const PORT = 3221;

app.use(express.static("public"));



app.listen(PORT, "0.0.0.0", ()=> {
    console.log(`frontend is live at http://localhost:${PORT}`);
} )
