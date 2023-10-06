const url = "https://localhost:8080"

function fetchDeck(deckID) {
    fetch(`${url}/${deckID}`)
    .then((deck) => {
        return deck.json();
    })
}

module.exports = fetchDeck;