
// Test to change main display text when summitButton is clicked
let summitButton = document.getElementById("main__user-input--inputbutton");
summitButton.addEventListener("click", function(){
    let TemporaryInput = document.getElementById("main__user-input--inputbar");
    let MainDisplay = document.querySelector("#main__display--cardplay span");

    let TemporaryInputText = TemporaryInput.value;
    MainDisplay.innerHTML = TemporaryInputText;
    TemporaryInput.value = ""; 
});


//Switching state of display between before and after choosing a deck to play and playing WORK IS PROGRESS
let chooseDeckButton = document.getElementById("main__display--buttonselect-deck");
chooseDeckButton.addEventListener("click", ()=>{
    let DeckSelectingScreen = document.getElementById("main__display--deckchooser");
    let DeckPlayingScreen = document.getElementById("main__display--screen");
    DeckSelectingScreen.style.display = "none";
    DeckPlayingScreen.style.display = "block";

})