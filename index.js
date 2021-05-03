let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

ctx.fillStyle = 'black';
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.lineCap = "round";

function paintLine (x1,y1,x2,y2){
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


let painting = false;
let oldpoint ;
let touchTurn = "ontouchstart" in document.documentElement;

if(touchTurn){

    canvas.ontouchstart = (e)=>{
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        oldpoint = [x,y];
    }

    canvas.ontouchmove = (e)=>{
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
    
        ctx.beginPath();
        paintLine(oldpoint[0],oldpoint[1],x,y);
        oldpoint = [x,y]
    }

} else {

    canvas.onmousedown = (e)=>{
        painting = true;
        oldpoint = [e.clientX,e.clientY];
    }

    canvas.onmousemove = (e)=>{
        if(painting === true){
            ctx.beginPath();
            paintLine(oldpoint[0],oldpoint[1],e.clientX,e.clientY);
            oldpoint = [e.clientX,e.clientY]
        }
        
    }

    canvas.onmouseup = ()=>{
        painting = false;
    }

}
