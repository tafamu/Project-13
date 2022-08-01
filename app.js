let canvas=document.querySelector("canvas");
let ctx=canvas.getContext("2d"); 

var x=400;
var y=400;
function reset(){
    ctx.strokeRect(x,y,30,30);
}


function move_up(e){
    if(e.which==87){
        ctx.clearRect(0,0,800,800);
        y-=10;
        ctx.strokeRect(x,y,30,30);
    }
}
function move_left(e){
    if(e.which==65){
        ctx.clearRect(0,0,800,800);
        x-=10;
        ctx.strokeRect(x,y,30,30);
    }
}

function move_right(e){
    if(e.which==68){
        ctx.clearRect(0,0,800,800);
        x+=10;
        ctx.strokeRect(x,y,30,30);
    }
}

function move_down(e){
    if(e.which==83){
        ctx.clearRect(0,0,800,800);
        y+=10;
        ctx.strokeRect(x,y,30,30);
    }
}

function clear(e){
    if(e.which==46){
        x=400;
        y=400
        ctx.clearRect(0,0,800,800);
        ctx.strokeRect(x,y,30,30);
    }
}






window.addEventListener("load",reset);
window.addEventListener("keydown",move_left)
window.addEventListener("keydown",move_right)
window.addEventListener("keydown",move_up)
window.addEventListener("keydown",move_down)
window.addEventListener("keydown",clear)


