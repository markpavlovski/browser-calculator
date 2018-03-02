
const displayLength = 14
const calculator = document.querySelector("#calculator")
const screen = document.querySelector("#screen")
const buttons = document.querySelector(".buttons")
const operators = ["+","-","÷","x","C","="]
const calculate = {
  "+": (a,b) => a+b,
  "-": (a,b) => a-b,
  "x": (a,b) => a*b,
  "÷": (a,b) => {
    if (b===0){
        justCalculated = true
        return 'ERROR'
    }
    return a/b
  }
}

let leftNumber = 0
let rightNumber = 0
let operation = null
let justCalculated = false
let displayText = ""

screen.innerText = displayText
console.log(screen.innerText)




// Calculating
buttons.addEventListener("click",(event)=>{
  if (event.target.tagName === "SPAN"){

    const value = event.target.innerText

    if(operators.includes(value)){

      // HANDLE OPERATORS

      if (value === "C"){
      // Deal with clear button
        displayText = ""
        operation = null
        justCalculated = false

      } else if (value === "=") {
      // Deal with equals button
        if (operation && displayText){
          rightNumber = Number(displayText.split(operation)[1])
          console.log(Number(rightNumber))
          displayText = calculate[operation](leftNumber,rightNumber)
          operation = null
          justCalculated = true
        }
        operation = null
      } else {
      // Deal with operators
        if (!operation && displayText){
          leftNumber = Number(displayText)
          console.log(Number(leftNumber))
          displayText += value
          operation = value
          justCalculated = false
        }

      }
    } else {

      // HANDLE NUMERIC INPUTS
      console.log(justCalculated)
      if (justCalculated){
        displayText = value
      } else {
        console.log("add another number")
        console.log(displayText.length)
        console.log(displayLength)
        if (displayText.length < displayLength){
          displayText += value
        }
      }
      justCalculated = false
    }
  }

  // RENDER
  screen.innerText = displayText.toString().slice(0,displayLength)

})
