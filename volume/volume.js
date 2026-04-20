const btn = document.getElementById("btn");
const bar = document.getElementById("bar");

btn.onclick = ()=>{
  bar.style.width = Math.random()*300 + "px";

  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();

  if(Math.random() > 0.7){
    alert("NOPE 😈");
  }
};
