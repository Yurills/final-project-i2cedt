import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.static("frontend/public"));
app.use(cors());

app.listen(PORT, ()=> {
    console.log(`frontend is live at http://localhost:${PORT}`);
} )
