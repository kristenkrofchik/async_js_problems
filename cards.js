/*$(function() {

    let baseUrl = 'https://deckofcardsapi.com/api/deck'
    let mainGameDeck 

    $.getJSON(`${baseUrl}/new/draw/?count=1`).then(response => {
        let { suit, value } = response.cards[0];
        console.log(`${value} of ${suit}`)
    })

    let card1

    $.getJSON(`${baseUrl}/new/draw/?count=1`)
        .then(response => {
            let { suit, value } = response.cards[0];
            let deckId = response.deck_id
            card1 = `${value} of ${suit}`;
            return $.getJSON(`${baseUrl}/${deckId}/draw/?count=1`);
        })
        .then(response2 => {

            let card2Suit = response2.cards[0].suit;
            let card2Value = response2.cards[0].value;
            let card2 = `${card2Value} of ${card2Suit}`;
            console.log(`${card1}, ${card2}`)
        });

    
    $.getJSON(`${baseUrl}/new/shuffle/`).then(response => {
        deckId = response.deck_id;
        $('button').show();
    });
    
    $('button').click(function() {
        $.getJSON(`${baseUrl}/${deckId}/draw/?count=1`)
            .then(response => {
                let currentCardImage = response.cards[0].image;
                $('body').append(`<img src=${currentCardImage}></img>`);
                console.log(response.remaining);
                if(response.remaining === 0) {
                    $('button').remove();
                }
            })
    })
})*/
let baseUrl = 'https://deckofcardsapi.com/api/deck'

async function drawCard() {
    const res = await axios.get(`${baseUrl}/new/draw/?count=1`);
    const data = res.data;
    let { suit, value } = data.cards[0];
    console.log(`${value} of ${suit}`)
};

drawCard();

async function draw2Cards() {
    let res = await axios.get(`${baseUrl}/new/draw/`);
    let deckId = res.data.deck_id;
    let res2 = await axios.get(`${baseUrl}/${deckId}/draw/`);
    
    [res.data ,res2.data].forEach(card => {
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      });
    
}

draw2Cards();


async function cardGame() {
    let $btn = $('button');

    let res = await axios.get(`${baseUrl}/new/shuffle/`);
    $btn.show().on('click', async function() {   
        let cardData = await axios.get(`${baseUrl}/${res.data.deck_id}/draw/`);
        let cardSrc = cardData.data.cards[0].image;

        $('body').append(`<img src=${cardSrc}></img>`);
                if(cardData.data.remaining === 0) {
                    $('button').remove();
                    }
    });
}

cardGame();




