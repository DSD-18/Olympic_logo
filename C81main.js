myCanvas=document.getElementById ("myCanvas");
ctx = myCanvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(250,240,40,0,2*Math.PI);
ctx.stroke();

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(290,200,40,0,2*Math.PI);
ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(340,240,40,0,2*Math.PI);
ctx.stroke();

color="orange";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(380,200,40,0,2*Math.PI);
ctx.stroke();