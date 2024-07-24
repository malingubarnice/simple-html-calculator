// creating the two varibles that the user will be working with
let firstNumber = 7
let secondNumber = 9

// grabbing the span in the html and assigning them the value of the two varibles 
document.getElementById("span1-el").textContent = firstNumber 
document.getElementById("span2-el").textContent = secondNumber

//grabbing the span in the html with the "Results: "
let captureResult= document.getElementById("span3-el")


//function to be called when the add button is clicked
function add(){
    let additionResult = firstNumber + secondNumber
    captureResult.textContent = "Result: " + additionResult
}

//function to be called when the divide button is clicked
function divide(){
    let divisionResult = firstNumber / secondNumber
    captureResult.textContent = "Result: " + divisionResult
}

//function to be called when the subtract button is clicked
function subtract(){
    let subtractionResult = firstNumber - secondNumber
    captureResult.textContent = "Result: " + subtractionResult
}

//function to be called when the multiply button is clicked
function multiply(){
    let multiplicationResult = firstNumber * secondNumber
    captureResult.textContent = "Result: " + multiplicationResult
}