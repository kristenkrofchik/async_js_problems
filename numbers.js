let baseUrl = "http://numbersapi.com"
let faveNum  = 6
let myNums = [33, 44, 55]
let fourNumFacts = []

/*$.getJSON(`${baseUrl}/${faveNum}/trivia?json`).then(response => {
    trivia = response.text;
    console.log(trivia)
});


let myNums = [33, 55, 98]
$.getJSON(`${baseUrl}/${myNums}?json`).then(response => {
    console.log(response)
});

let fourNumFacts = [];

for (let i = 1; i < 5; i++) {
    fourNumFacts.push(
        $.getJSON(`${baseUrl}/${faveNum}/trivia?json`)
    )
}

Promise.all(fourNumFacts)
    .then(factsArr => {
        for (res of factsArr) {
            $("body").append(`<h3>${res.text}</h3>`);
        }
    })*/

async function faveNumFact(num) {
    const res = await axios.get(`${baseUrl}/${num}/trivia?json`);
    const trivia = res.data.text;
    console.log(trivia);
}

faveNumFact(faveNum);

async function multNumFacts(nums) {
    const res = await axios.get(`${baseUrl}/${nums}?json`);
    const facts = Object.values(res.data);
    for(fact of facts) {
        $("body").append(`<h3>${fact}</h3>`);
    }
}

multNumFacts(myNums);

async function fourFacts(n) {
    let facts = await Promise.all([
        $.getJSON(`${baseUrl}/${n}/trivia?json`),
        $.getJSON(`${baseUrl}/${n}/trivia?json`),
        $.getJSON(`${baseUrl}/${n}/trivia?json`),
        $.getJSON(`${baseUrl}/${n}/trivia?json`)
    ])
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}

fourFacts(7);

