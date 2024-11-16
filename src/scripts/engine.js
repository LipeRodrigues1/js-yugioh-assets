const state= {
    score:{
        playerScore: 0,
        pcScore:0,
        scoreBox: document.getElementById('score_points')
    },
    cardSprites:{
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type'),
    },
    fieldCards:{
        player: document.getElementById('player-field-card'),
        pc:document.getElementById('pc-field-card'),
    },
    button: document.getElementById('next-battle')
     
}

const cardData = [
    {
        id : 0,
        name : "Blue Eyes Dragon",
        type: "Paper",
        img: "./src/assers/icons/dragon.png",
        win:[1],
        lose:[2]
    },
    {
        id : 1,
        name : "Dark Magician",
        type: "Rock",
        img: "./src/assers/icons/magician.png",
        win:[2],
        lose:[0]
    },
    {
        id : 2,
        name :"Exodia",
        type: "Scissors",
        img: "./src/assers/icons/exodia.png",
        win:[0],
        lose:[1]
    }
]

async function getRandomCardId() {
    const randomIndex = Math.floor(random() * cardData.length);
    return cardData[randomIndex].id;
}

async function creatCardImage(idCard,fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === PlayerSide.player1){
        cardImage.addEventListener('click',() => {
            setCardField(cardImage.getAttribute("data-id"));
        });
    }
    cardImage.addEventListener("mouseover", ()=>{
        drawSelectedCard(idCard);
    });

    return cardImage;
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await creatCardImage(randomIdCard,fieldSide);
        
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

const PlayerSide = {
    player1: document.getElementById('player-field-card'),
    pc: document.getElementById('pc-field-card')
}

function main() {
    drawCards(5,PlayerSide.player1);
    drawCards(5,PlayerSide.pc);
}
