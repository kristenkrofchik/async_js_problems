let baseUrl = "http://numbersapi.com"
let faveNum  = 6

$.getJSON(`${baseUrl}/${faveNum}/trivia?json`).then(response => {
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
    })