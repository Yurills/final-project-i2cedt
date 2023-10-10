const url = "http://localhost:8080"

//get all the deck data using DeckID as parameter
export async function fetchDeck(deckID) {
    const res = await fetch(`${url}/deckInfo/${deckID}`);
    const data = await res.json();
    return data;
}

//post a deck into a database, Deck_data is array of JSON Object
export async function postDeck(DeckID, Deckname, Slots, Deck_data) {
    await fetch(`${url}/deckInfo/`,
    {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            DeckID: DeckID,
            Deckname: Deckname,
            Slots: Slots,
            Deck_data: Deck_data
        })
    })
}
//edit deck by using deckID, Deck_data parameter is array of JSON object
export async function editDeck(id, DeckID, Deckname, Slots, Deck_data) {
    await fetch(`${url}/deckInfo/${id}` , {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            DeckID: DeckID,
            Deckname: Deckname,
            Slots: Slots,
            Deck_data:Deck_data
        }
        )
    })
}