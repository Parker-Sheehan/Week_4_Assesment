const baseUrl = "http://localhost:4000/api/meme/"

invest = document.querySelector("#invest")


const createMemeCards = (data) =>{
    let rightSide = document.getElementById("right-side")
    rightSide.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        let memeCard = document.createElement("div")
        let memeName = document.createElement("h2")
        let memeImg = document.createElement("img")
        let memePrice = document.createElement("p")
        let pumpBtn = document.createElement("button")
        let dumpBtn = document.createElement("button")

        memeName.textContent = data[i].name
        memeImg.src = data[i].img
        memePrice.textContent = `Price: ${data[i].price}`

        pumpBtn.textContent = "Pump!"
        pumpBtn.setAttribute('id', data[i].id)
        pumpBtn.setAttribute('class', "pump")
        pumpBtn.addEventListener("click", changeMemePrice())

        dumpBtn.textContent = "Dump!"
        dumpBtn.setAttribute('id', data[i].id)
        dumpBtn.setAttribute('class', "dump")
        dumpBtn.addEventListener("click", changeMemePrice)




        memeCard.appendChild(memeName)
        memeCard.appendChild(memeImg)
        memeCard.appendChild(memePrice)
        memeCard.appendChild(pumpBtn)
        memeCard.appendChild(dumpBtn)
        rightSide.appendChild(memeCard)
    }
}

const getMemes = () => {
    axios.get(baseUrl)
        .then(res => {
            let data = res.data
            createMemeCards(data) 
        })
        .catch(err => {console.log(err)})
}

const createMemeObj = (evt) => {
    evt.preventDefault()
    let nameInput = document.querySelector("#name-input")
    let priceInput = document.querySelector("#price-input")
    let imgInput = document.querySelector("#img-input")
    let bodyObj = 
    {
        name:nameInput.value,
        img:imgInput.value,
        price:priceInput.value
    }

    investMeme(bodyObj)
}

const investMeme = (body) => {
    axios.post(baseUrl,body)
        .then(res => {
            let data = res.data
            createMemeCards(data) 
        })
        .catch(err => console.log(err))
}



const changeMemePrice = (evt) => {
    let id = evt.target.id
    let type = evt.target.classList
    console.log(type.value)
    console.log(id)
}


invest.addEventListener("submit", createMemeObj)

console.log("whoop")
getMemes()