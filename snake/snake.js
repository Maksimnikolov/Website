const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x:10,y:10}];
let food = {x:5,y:5};
let dir = {x:1,y:0};

document.addEventListener("keydown", e=>{
  if(e.key==="ArrowUp") dir={x:0,y:-1};
  if(e.key==="ArrowDown") dir={x:0,y:1};
  if(e.key==="ArrowLeft") dir={x:-1,y:0};
  if(e.key==="ArrowRight") dir={x:1,y:0};
});

function loop(){
  const head = {x:snake[0].x+dir.x, y:snake[0].y+dir.y};

  snake.unshift(head);

  if(head.x===food.x && head.y===food.y){
    food = {x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*20)};
  } else snake.pop();

  ctx.clearRect(0,0,400,400);

  ctx.fillStyle="#111";
  snake.forEach(s=>ctx.fillRect(s.x*20,s.y*20,18,18));

  ctx.fillStyle="#888";
  ctx.fillRect(food.x*20,food.y*20,18,18);

  requestAnimationFrame(loop);
}
loop();
