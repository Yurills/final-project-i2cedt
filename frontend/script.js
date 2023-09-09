let summitButton = document.getElementById("main__user-input--inputbutton");
let TemporaryInput = document.getElementById("main__user-input--inputbar");
let MainDisplay = document.getElementById("main__display-screen");


// Test to change main display text when summitButton is clicked
summitButton.addEventListener("click", function(){
    const TemporaryInputText = TemporaryInput.value;
    MainDisplay.innerHTML = TemporaryInputText;
});