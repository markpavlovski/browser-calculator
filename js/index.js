const tilt = 5
const displayLength = 14
const calculator = document.querySelector("#calculator")
const screen = document.querySelector("#screen")
const buttons = document.querySelector(".buttons")
const operators = ["+","-","÷","x","C","="]
const calculate = {
  "+": (a,b) => a+b,
  "-": (a,b) => a-b,
  "x": (a,b) => a*b,
  "÷": (a,b) => a/b
}

let leftNumber = 0
let rightNumber = 0
let operation = null
let justCalculated = false
let displayText = ""

screen.innerText = displayText
console.log(screen.innerText)


// Tilting
document.addEventListener("mousemove",(event)=>{
  center = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
  }
  angle = {
    x: (event.x - center.x)/(window.innerWidth - center.x)*tilt,
    y: (event.y - center.y)/(window.innerHeight - center.y)*tilt
  }
  calculator.style.transform = `perspective( 600px ) rotateY( ${angle.x}deg ) rotateX( ${-angle.y}deg )`;
})

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

      if (justCalculated){
        displayText = value
      } else {
        console.log("add another number")
        if (displayText.length < displayLength){
          displayText += value
        }
      }
      justCalculated = false
    }

  }

  // RENDER
  screen.innerText = displayText

})
