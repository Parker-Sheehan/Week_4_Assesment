const bodyParser = require("body-parser");

arr = [
    {
        name:"Doge",
        img:"https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        price:500,
        id: 0
    },
    {
        name : "Pika-Pika",
        img : "https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg",
        price : 300,
        id: 1
    },
    {
        name : "Nyan Cat",
        img : "https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG",
        price : 1500,
        id: 2
    }
]

let idCount = 3

module.exports = {

    getMeme: (req, res) => {
        res.status(200).send(arr);
    },
    investMeme: (req,res) => {
        newMeme = {...req.body, id:idCount}
        console.log(newMeme)
        arr.push(newMeme)
        res.status(200).send(arr);
        idCount++
    },
    changeMemePrice: (req,res) => {
        console.log('yay')
    }

}