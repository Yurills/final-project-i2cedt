import { fetchDeck, postDeck } from './api.js'


//generate button with deck name
let button_MainDisplay = document.getElementsByClassName("deckname-button");

// button selection in main display

let button_Selection_Value = button_MainDisplay[0].value;
let button_Selection = (event) => {
    for (let i = 0; i < button_MainDisplay.length; i++) {
        button_MainDisplay[i].style.backgroundColor = "#8898E0";
        button_MainDisplay[i].style.borderColor = "#788be0"
    }
    button_Selection_Value = event.target.value;
    console.log(button_Selection_Value);
    document.getElementById(button_Selection_Value).style.backgroundColor = "#ffd683";
    document.getElementById(button_Selection_Value).style.borderColor = "#ae8454";
}
for (let i = 0; i < button_MainDisplay.length; i++) {
    button_MainDisplay[i].addEventListener('click', button_Selection);
}


// switching to flashcard display
let switchDisplay_Start = () => {
    document.getElementById("Main-Display").style.display = "none";
    document.getElementById("Flashcard").style.display = "block";

    let data = fetchDeck(button_Selection_Value);
    console.log(data);

    //generate flashcard loads form database
}
let switchDisplay_Return = () => {
    document.getElementById("Main-Display").style.display = "block";
    document.getElementById("Flashcard").style.display = "none";
}

let switchDisplay_Edit = () => {
    document.getElementById("Main-Display").style.display = "none";
    document.getElementById("Edit").style.display = "Block";
    document.getElementById("Add-QA").style.display = "Block";
}

let switchDisplay_Edit_Return = () => {
    document.getElementById("Main-Display").style.display = "block";
    document.getElementById("Edit").style.display = "none";
    document.getElementById("Add-QA").style.display = "none";
}



let counter = 1;

let QA_Add_Button = document.getElementById("Add-QA");
QA_Add_Button.addEventListener('click', function () {
    const existingElement = document.querySelector('#Edit-Wrapper');
    const newElement = existingElement.cloneNode(true);
    const NewID = 'Edit-Wrapper ' + counter;

    newElement.id = NewID;
    newElement.classList.add('Edit-Wrapper');
    const container = document.getElementById('Edit');
    container.appendChild(newElement);
    counter++;
});

function removeElement(elementId) {
    const elementToRemove = document.getElementById(elementId);
    elementToRemove.remove();
}



let Edit_Return_Button = document.getElementById("Edit-Return-Button");
Edit_Return_Button.addEventListener('click', switchDisplay_Edit_Return);

let Edit_Save_Button = document.getElementById("Edit-Save-Button");
Edit_Save_Button.addEventListener('click', Create_Flashcard);

let button_MainDisplay__EDIT = document.getElementById("Main-Display__Edit-Button");
button_MainDisplay__EDIT.addEventListener('click', switchDisplay_Edit);

let Flashcard_Return_Button = document.getElementById("Return-Button");
Flashcard_Return_Button.addEventListener('click', switchDisplay_Return);

let button_MainDisplay__START = document.getElementById("Main-Display__Start-Button");
button_MainDisplay__START.addEventListener('click', switchDisplay_Start);

function Create_Flashcard() {
    //get input values, <How to make it into an array?>
    let deckname = document.getElementById("Input-DeckName").value;
    let input_question = document.getElementById("Input-Question").value;
    let input_answer = document.getElementById("Input-Answer").value;

    let flashcard = {
        Question: input_question,
        Answer: input_answer,
        pass: false
    };
    //create flashcard with input values
    let createflashcard = {
        DeckID: button_Selection_Value,
        Deckname: deckname,
        Slots: 1, //counting QA-Add
        Deck_data: flashcard
    };

    console.log(createflashcard);
    //createflashcard.Deck_data.push(flashcard);
    //saveFlashcard(createflashcard);
}