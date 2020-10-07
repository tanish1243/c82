var mouse_event="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color="black";
var width_of_line=2;


canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouse_event="mousedown";

}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    var current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("Last position of x and y co-ordinates are:");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("Current position of x and y co-ordinates are :")
console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}