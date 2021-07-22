const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 1300;

var items=[];
var push;
var count=-1;
var posx=150,posy=50;

var x;
var top_ind=0;
var top_str=top_ind.toString();

var x1 = 237 + 50;
var y1 = 89;
var z = 137;

var x2 = 137 + 50;
var y2 = 306;

var tempx = 237 + 50;

var fin=-75;

var slider=document.getElementById("slider");
var speed=1;

    document.getElementById("slider").value=speed;
    slider.oninput = function() {
    speed=document.getElementById("slider").value;
    speed=parseInt(speed);
    }

    ////  pushing value
    ////  pushing value
    ////  pushing value



function topAnimation(event){
  ctx.strokeStyle = "#03256c";
  ctx.lineWidth=5;
  ctx.strokeRect(250, 50, 75, 75);
  ctx.lineWidth=1;
  ctx.clearRect(0,0,200,100);
  setTimeout(function(){
    ctx.clearRect(240, 40, 97, 97);
    ctx.strokeStyle = "black";
    ctx.lineWidth=1;
    ctx.strokeRect(250, 50, 75, 75);
     if(event==1)
      top_ind++;

    if(event==-1)
    top_ind--;

      top_str=top_ind.toString();
      //to
    ctx.font = "20pt sans-serif";
    ctx.fillText(top_str, 280, 100);
    x1=287;
    y1=89;
  }, 500);
}

function draw_val_ani(ele){
    drawArray();
    draw();
    ctx.arc(x1, y1, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;

  ctx.font = "20pt sans-serif";

  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText(ele , posx, posy);
  console.log(posx,posy);
  speed=parseInt(speed);
  posy +=speed;
  posx +=((180-150+fin)/200)*speed;

}

function draw_val(ele) {
  ctx.font = "20pt sans-serif";
  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText(ele , posx+3, posy);//initial
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "17pt serif";
  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText('Pushing Value:' , 10, 50);

}

function drawArray(event=1) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.strokeRect(250, 50, 75, 75);
  ctx.font = "15pt sans-serif";
  ctx.fillText("Top", 199, 90);
   x = 0;
  ctx.font = "20pt sans-serif";
  var x_str = x.toString();
  ctx.fillText(top_str, 280, 100);

  for(var j=0;j<items.length-1;j++)
  {
      ctx.font = "20pt sans-serif";
        ctx.fillText(items[j], 180+j*75, 250);
  }
  if(event==0)
  {
      ctx.font = "20pt sans-serif";
      ctx.fillText(items[j], 180+j*75, 250);
  }

  x = 150;
  num = 0;
  for (var i = 0; i < 15; i++) {
    ctx.strokeRect(x, 200, 75, 75);
    ctx.font = "12pt sans-serif";

    var tex = num.toString();
    num++;
    ctx.fillText(tex, x + 31, 315);
    x = x + 75;
  }
}


function drawCircle() {
  drawArray();
    draw();
    if(y1<=306)
    {
        draw_val(push);
    }
    ctx.arc(x1, y1, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;
    x1=x1+((181-280+fin)/215)*speed;
    y1=y1+speed;
}

function movetext(){
  if (posy <= 250) {
        window.requestAnimationFrame(movetext);
       draw_val_ani(push);

  } else {

    ctx.arc(x1, y1, 15, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "white";
    ctx.lineWidth=7;
    ctx.stroke();

    topAnimation(1);
    var ind=(items.length-1).toString();
    ctx.font = "12pt sans-serif";
    ctx.fillText(ind, 150+fin+31, 315);
  }
}

function drawIt() {

    if (y1 <= 303) {
       window.requestAnimationFrame(drawIt);
         drawCircle();
    }
  else {
    movetext();
    z+=75;
    x2=x2+75;
  }
}

function pushFunction() {
   push = document.getElementById("myText").value;
  if (push != "") {
    fin=fin+75;
    posx=150;
    posy=50;
    count++;
    items.push(push);
        draw(1);
        draw_val(push);
        drawIt();
  }
  document.getElementById("myText").value = "";
}


///  clear stack function
///
///


function clearStack(){
  items=[];
  top_str="0";
  top_ind=0;
  fin=-75;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  drawArray(1);
}



///  popped value
///   popped value
///   popped value


function drawpop() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "17pt serif";
  ctx.fillStyle = 'black'; // or whatever color the text should be.
    ctx.fillText('Popped Value:' , 10, 50);

}


function draw_val_ani_pop(){
    drawArray();
    drawpop();
    ctx.arc(x1, y1, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;

  ctx.font = "20pt sans-serif";

  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText(items[items.length-1] , posx, posy);
  console.log(posx,posy);
  speed=parseInt(speed);
  posy -=speed;
  posx -=((180-150+fin)/200)*speed;


}





function movepoptext(){

  if (posy >= 50) {
        window.requestAnimationFrame(movepoptext);
       draw_val_ani_pop();

  } else {

    ctx.arc(x1, y1, 15, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "white";
    ctx.lineWidth=7;
    ctx.stroke();
    items.pop();
    fin=fin-75;
     x1 = 237 + 50;
     y1 = 89;

  }
}


function drawCirclepop()
{
    drawArray(0);
    drawpop();
    ctx.arc(x1, y1, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;
    x1=x1+((181-280+fin)/215)*speed;
    y1=y1+speed;
}


function drawItpop()
{
    if (y1 <= 307)
    {
        window.requestAnimationFrame(drawItpop);
        drawCirclepop();
    }
    else
    {
        movepoptext();
        z+=75;
        x2=x2+75;
    }
}


function popFunction() {

   if(items.length!=0){
     posx=179+fin;
     posy=248;
     topAnimation(-1);
     setTimeout(function (){
     drawItpop();
   },500);
   }
}




function init() {
  drawArray();
}
init();