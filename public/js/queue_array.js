const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 1300;

var items=[];
var push;
var count=-1;
var posx=150,posy=50;

var x;
var head=0;
var head_str=head.toString();
var tail=0;
var tail_str=tail.toString();
var x1 = 237 + 50+130;
var y1 = 89;

var x3=237+50;
var y3=89;
var z = 137;

var x2 = 137 + 50;
var y2 = 306;

var tempx = 237 + 50;

var fin=-75;
var fin2=-75;
var fin3=0;

var slider=document.getElementById("slider");
var speed=7;

    document.getElementById("slider").value=speed;
    slider.oninput = function() {
    speed=document.getElementById("slider").value;
    speed=parseInt(speed);
    }

    ////  Enqueue
    ////  Enqueue
    ////  Enqueue

//////////////////////////////////////////////////////////////////////////////////

function topAnimation(){
  ctx.strokeStyle = "#03256c";
  ctx.lineWidth=5;
  ctx.strokeRect(250+140, 50, 75, 75);
  ctx.lineWidth=1;
  ctx.clearRect(0,0,200,100);
  setTimeout(function(){
  ctx.clearRect(240+140, 40, 97, 97);
  ctx.strokeStyle = "black";
  ctx.lineWidth=1;
  ctx.strokeRect(250+140, 50, 75, 75);
  tail++;
  tail_str=tail.toString();
  ctx.font = "20pt sans-serif";
  ctx.fillText(tail_str, 280+140, 100);
  x1=287+130;
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
    speed=parseInt(speed);
    posy +=speed;
    posx +=((183-170+fin)/200)*speed;


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
  ctx.fillText('Enqueuing Value:' , 10, 50);
}

function drawArray(event=0) {
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ctx.strokeRect(250, 50, 75, 75);
  ctx.strokeRect(390, 50, 75, 75);
  ctx.font = "15pt sans-serif";
  ctx.fillText("Head", 270, 30);
  ctx.fillText("Tail", 400, 30);
   x = 0;
  ctx.font = "20pt sans-serif";
  var x_str = x.toString();
  ctx.fillText(head_str, 280, 100);
  ctx.fillText(tail_str, 420, 100);

  for(var j=head+event;j<tail;j++)
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
    if(y1<=303)
    {
        draw_val(push);
    }

    ctx.arc(x1, y1, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;
    x1=x1+((188-417+fin)/215)*speed;
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

function enqueueFunction() {
   push = document.getElementById("myText").value;
  if (push != "") {
    fin=fin+75;
    posx=170;
    posy=50;
    count++;
    items.push(push);
        draw(1);
        draw_val(push);
        drawIt();
        document.getElementById("myText").value = "";
  }

}

////////////////////////////////////////////////////////////////////////////////////////
///  clear stack function
///
///


function clearQueue(){
  items=[];
  head_str="0";
  head=0;
  tail_str="0";
  tail=0;
  fin=-75;
  fin2=-75;
  fin3=0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawArray();
}


/////////////////////////////////////////////////////////////////////////////
///  dequeue
///  dequeue
///  dequeue


function topAnimationpop(){
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
  head++;
  head_str=head.toString();
  ctx.font = "20pt sans-serif";
  ctx.fillText(head_str, 280, 100);
  x1=287+130;
  y1=89;
  }, 500);
}


function drawpop() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "17pt serif";
  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText('Dequeued Value:' , 10, 50);
}


function draw_val_ani_pop(){
  drawArray(1);
  drawpop();
  ctx.arc(x3, y3, 25, 0, 2 * Math.PI, false);
  ctx.strokeStyle = "blue";
  ctx.lineWidth=5;
  ctx.stroke();
  ctx.lineWidth=1;
  ctx.font = "20pt sans-serif";
  ctx.fillStyle = 'black'; // or whatever color the text should be.
  ctx.fillText(items[head] , posx, posy);
  //console.log(posx,posy);
  speed=parseInt(speed);
  posy -=speed;
  posx -=((160-150+fin3)/200)*speed;
}


function movepoptext(){

  if (posy >= 55) {
        window.requestAnimationFrame(movepoptext);
       draw_val_ani_pop();
  } else {
    ctx.arc(x2, y2, 15, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "white";
    ctx.lineWidth=7;
    ctx.stroke();
    topAnimationpop();
    fin2=fin2+75;
    fin3=fin3+75;
     x3 = 237 + 50;
     y3 = 89;
       drawpop();
       draw_val_ani_pop();
  }
}


function drawCirclepop()
{
    drawArray();
    drawpop();
    ctx.arc(x3, y3, 25, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth=5;
    ctx.stroke();
    ctx.lineWidth=1;
  //  console.log(x3,y3);
    x3=x3+((238-270+fin2)/215)*speed;
    y3=y3+speed;
}


function drawItpop()
{
    if (y3 <= 303)
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


function dequeueFunction() {
   if(head<tail){
     posx=179+fin3;
     console.log(fin3);
     posy=248;
     setTimeout(function (){
     drawItpop();
   },500);
   }
}




function init() {
  drawArray();
}
init();
