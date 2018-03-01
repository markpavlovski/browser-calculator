const tilt = 5
const shade = 40
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
  delta = {
    x: (event.x - center.x)/(window.innerWidth - center.x),
    y: (event.y - center.y)/(window.innerHeight - center.y)
  }
  calculator.style.transform = `perspective( 600px ) rotateY( ${delta.x * tilt}deg ) rotateX( ${-delta.y * tilt}deg )`;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  calculator.style.boxShadow = `${-delta.x * shade + 0}px ${-delta.y * shade + 0}px ${20}px ${0}px rgba(0, 0, 0, 0.2)`
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
