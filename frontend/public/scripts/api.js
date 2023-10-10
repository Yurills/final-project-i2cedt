const url = "http://localhost:8080"

//get all the deck data using DeckID as parameter
export async function fetchDeck(username) {
    const res = await fetch(`${url}/deckInfo/${username}`);
    const data = await res.json();
    return data;
}

//post a deck into a database, Deck_data is array of JSON Object
export async function postDeck(deckObject) {
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
            Deck_data: Deck_data,
            Username: deckObject.Username
        })
    })
}
//edit deck by using deckID, Deck_data parameter is array of JSON object
export async function editDeck(deckObject) {
    await fetch(`${url}/deckInfo/${deckObject}` , {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            DeckID: deckObject.DeckID,
            Deckname: deckObject.Deckname,
            Slots: deckObject.Slots,
            Deck_data:deckObject.Deck_data,
            Username: deckObject.Username
        }
        )
    })
}

export async function getUserInfo(username) {
    const res = await fetch(`${url}/userInfo/${username}`);
    const data = await res.json();
    return data;
}

export async function postUserInfo(username, password) {
    await fetch(`${url}/userInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Username: username,
            Password: password
        })
    }
    )
    
}