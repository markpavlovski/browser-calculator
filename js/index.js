const tilt = 5
const calculator = document.querySelector("#calculator")
const screen = document.querySelector("#screen")
const buttons = document.querySelector(".buttons")
const operators = ["+","-","÷","x","C","="]
let leftNumber = 0
let rightNumber = 0
let operation = null
let displayText = ""
let z

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
      console.log("do the operation")
      
      switch(value){

        case "C":
          displayText = ""
          operation = null
          break

        case "=":
          displayText = ""
          operation = null
          break

        case "+":
          if (!operation){
            leftNumber = displayText
            console.log(Number(leftNumber))
            displayText += value
            operation = value
          }
          break

        case "-":
          if (!operation){
            displayText += value
            operation = value
          }
          break

        case "x":
          if (!operation){
            displayText += value
            operation = value
          }
          break

        case "÷":
          if (!operation){
            displayText += value
            operation = value
          }
          break

        default:
          break;

      }
    } else {
      console.log("add another number")
      displayText += value
    }




  }
  screen.innerText = displayText
})
