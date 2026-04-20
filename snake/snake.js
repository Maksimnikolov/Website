const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x:200,y:200}];
let food = {x:100,y:100};
let dx = 20, dy = 0;

document.onkeydown = e=>{
  if(e.key==="ArrowUp"){dx=0;dy=-20;}
  if(e.key==="ArrowDown"){dx=0;dy=20;}
  if(e.key==="ArrowLeft"){dx=-20;dy=0;}
  if(e.key==="ArrowRight"){dx=20;dy=0;}
};

function loop(){
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);

  if(head.x===food.x && head.y===food.y){
    food = {
      x: Math.floor(Math.random()*20)*20,
      y: Math.floor(Math.random()*20)*20
    };
  } else snake.pop();

  ctx.fillRect(0,0,400,400);

  ctx.fillStyle="lime";
  snake.forEach(s=>ctx.fillRect(s.x,s.y,18,18));

  ctx.fillStyle="red";
  ctx.fillRect(food.x,food.y,18,18);

  setTimeout(loop,100);
}
loop();
