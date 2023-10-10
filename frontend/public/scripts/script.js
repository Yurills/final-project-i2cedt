
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

    StartGame(button_Selection_Value);
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
let Remove_Button_ClassSet = document.getElementsByClassName("Remove-QA");
Remove_Button_ClassSet[0].addEventListener('click', removeElement);
let QA_Add_Button = document.getElementById("Add-QA");

const existingElement = document.getElementById("0");
const defaultnewElement = existingElement.cloneNode(true);

QA_Add_Button.addEventListener('click', function () {
    let newElement = defaultnewElement.cloneNode(true);
    
    newElement.classList.add('Edit-Wrapper');
    const container = document.getElementById('Edit');

    container.appendChild(newElement);

    Remove_Button_ClassSet = document.getElementsByClassName("Remove-QA")
    for (let i=0;i<Remove_Button_ClassSet.length;i++){
        Remove_Button_ClassSet[i].addEventListener('click', removeElement)
    }
});


function removeElement(event) {
    let toRemove = event.target.parentElement ;
    console.log(toRemove);
    toRemove.remove();
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
    let input_question_ClassSet = document.getElementsByClassName("Input-Question");
    let input_answer_Classset = document.getElementsByClassName("Input-Answer");

    let array_create_Deckdata = [];
    let create_DeckData;
    for (let i=0;i<input_question_ClassSet.length;i++) {
        create_DeckData = {
            Question: input_question_ClassSet[i].value,
            Answer: input_answer_Classset[i].value,
        }
        array_create_Deckdata.push(create_DeckData);
    }
    
    ;
    let createflashcard = {
        DeckID: button_Selection_Value,
        Deckname: document.getElementById("Input-Deck"),
        Slots: input_question_ClassSet.size, //counting QA-Add
        Deck_data: array_create_Deckdata
    };
    let temp = JSON.stringify(createflashcard)
    console.log(JSON.parse(temp));
    //createflashcard.Deck_data.push(flashcard);
    //saveFlashcard(createflashcard);
}








//starts the game
function FlipButtonShowDisplay(answerID) {
    let currentDisplay = document.getElementById("Question");
    console.log(answerID);  
    currentDisplay.innerHTML = answerID;
    
}

async function StartGame(deckID) {
    console.log("start!");
    let myDecklist = await fetchDeck(deckID);
    console.log(myDecklist);

    

    let currentIteration = 0;
    FlipButtonShowDisplay(myDecklist.Deck_data[currentIteration].Answer)

    console.log("current iteration " + currentIteration);
    let currentQuestion = document.getElementById("Question");
    currentQuestion.innerHTML = myDecklist.Deck_data[currentIteration].Question;

    let FlipButton = document.getElementById("Correct");
    let NextButton = document.getElementById("Wrong");
    
    FlipButton.addEventListener('click',  ()=> {FlipButtonShowDisplay(myDecklist.Deck_data[currentIteration].Answer)});
    NextButton.addEventListener('click', ()=> {FlipButtonShowDisplay(myDecklist.Deck_data[++currentIteration].Question)});


}

