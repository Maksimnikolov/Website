const box = document.getElementById("box");
let start;

setTimeout(()=>{
  box.style.background="green";
  start = Date.now();
}, Math.random()*3000+1000);

box.onclick = ()=>{
  if(box.style.background==="green"){
    alert("Time: " + (Date.now()-start) + "ms");
  } else {
    alert("Too early!");
  }
};
