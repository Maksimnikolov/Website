const box = document.getElementById("box");
const result = document.getElementById("result");

box.style.height="200px";
box.style.background="#eee";
box.style.borderRadius="12px";

let start;

setTimeout(()=>{
  box.style.background="#111";
  start = Date.now();
}, Math.random()*3000+1000);

box.onclick = ()=>{
  if(box.style.background==="#111"){
    result.innerText = (Date.now()-start)+" ms";
  } else {
    result.innerText = "Too early";
  }
};
