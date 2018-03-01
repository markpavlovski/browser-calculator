const tilt = 2;
document.addEventListener("mousemove",(event)=>{
  center = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
  }
  angle = {
    x: (event.x - center.x)/(window.innerWidth - center.x)*tilt,
    y: (event.y - center.y)/(window.innerHeight - center.y)*tilt
  }
  console.log(center)

  console.log(event.x, event.y)
  document.querySelector("#calculator").style.transform = `perspective( 600px ) rotateY( ${angle.x}deg ) rotateX( ${-angle.y}deg )`;
})
