
// Tilting
const tilt = 5
const shade = 40
//
//
// center = {
//   x: window.innerWidth/2,
//   y: window.innerHeight/2
// }
// delta = {
//   x: (event.x - center.x)/(window.innerWidth - center.x),
//   y: (event.y - center.y)/(window.innerHeight - center.y)
// }
// calculator.style.transform = `perspective( 600px ) rotateY( ${delta.x * tilt}deg ) rotateX( ${-delta.y * tilt}deg )`;
// calculator.style.boxShadow = `${-delta.x * shade + 0}px ${-delta.y * shade + 0}px ${40}px ${0}px rgba(0, 0, 0, 0.4)`


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
  calculator.style.boxShadow = `${-delta.x * shade + 0}px ${-delta.y * shade + 0}px ${40}px ${0}px rgba(0, 0, 0, 0.4)`
})
