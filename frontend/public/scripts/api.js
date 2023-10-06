const url = "https://localhost:8080"

export function fetchDeck(deckID) {
    fetch(`${url}/${deckID}`)
    .then((deck) => {
        return deck.json();
    })
}

