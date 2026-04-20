const btn = document.getElementById("btn");
const bar = document.getElementById("bar");

bar.style.height="10px";
bar.style.background="#111";
bar.style.width="100px";
bar.style.marginTop="20px";

btn.onclick = ()=>{
  const value = Math.random()*300;
  bar.style.width = value+"px";

  if(Math.random()>0.6){
    btn.innerText = "Nope";
  }
};
