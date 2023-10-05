//Test random stuff here
export const LoadDeck = [ //This should be the data from the database (JSON) which is the same as chosen deck
        {
            "DeckID": 1,
            "Deckname": "Capital city",
            "Slots": 4,
            "Deck_data":[
                {
                    "Question":"What is the capital of the United States?",
                    "Answer":"Washington, D.C.",
                    "pass": false
                },
                {
                    "Question":"What is the capital of the United Kingdom?",
                    "Answer":"London",
                    "pass": false
                },
                {
                    "Question":"What is the capital of France?",
                    "Answer":"Paris",
                    "pass": false
                },
                {
                    "Question":"What is the capital of Germany?",
                    "Answer":"Berlin",
                    "pass": false
                }
            ]
        }
];

let chooseDeck = LoadDeck;

function chooseDeckFunction() {
    const allpass = chooseDeck[0].Slots;
    let passcount = 0;
    while (passcount !== allpass) {
        const random = Math.floor(Math.random() * allpass);
        const currentCard = chooseDeck[0].Deck_data[random];
        if (!currentCard.pass) {
            console.log(currentCard.Question);
            console.log(currentCard.Answer);
            //... some process to check here
            currentCard.pass = true;
            passcount++;
        }
    }
}

