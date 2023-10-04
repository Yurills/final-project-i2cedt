// button selection in main display
let button_MainDisplay = document.getElementsByClassName("deckname-button");

let button_Selection_Value;
let button_Selection = (event)=>{
    for (let i=0;i<button_MainDisplay.length;i++) {
        button_MainDisplay[i].style.backgroundColor = "#8898E0";
        button_MainDisplay[i].style.borderColor = "#788be0" 
    }
    button_Selection_Value = event.target.value;
    console.log(button_Selection_Value);
    document.getElementById(button_Selection_Value).style.backgroundColor = "#ffd683";
    document.getElementById(button_Selection_Value).style.borderColor = "#ae8454";
}

for (let i=0;i<button_MainDisplay.length;i++) {
    button_MainDisplay[i].addEventListener('click', button_Selection);   
}

