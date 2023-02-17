const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getMeme,
        investMeme,
        changeMemePrice,
        dumpMeme} = require('./controller')

app.get("/api/meme", getMeme);
app.post("/api/meme", investMeme)
app.put("/api/meme/:id", changeMemePrice)

app.listen(4000, () => console.log("Server running on 4000"));
