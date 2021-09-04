var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var playbtn = document.getElementById("playbtn")
var startX 
var startY


ctx.beginPath();
ctx.lineWidth = "0";
ctx.strokeStyle = "red";
ctx.fillStyle = "lightgrey"

let y=[120,130, 100,123, 150, 140,159,160,130,110,120,147,134,135,150,139,132,139]
let height = [110,120,147,134,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130]
var j = 0
for(var i=0;i<y.length;i++){
    
     ctx.fillRect(j, y[i], 5, height[i]);
     j+=10
}
let flag = true

 var interval
            j=0
            i=0
    function start(i,j,clickedincanvas) {
        console.log(i,j)
        if(flag || clickedincanvas ){
             interval = setInterval(()=>{
                ctx.fillStyle = "black"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
                i++
            },1000)
            flag=false
        }
        else{
            clearInterval(interval)
            flag=true
        }  
    }
    playbtn.addEventListener("click",()=>{
        start(i,j)
    })



    function filled(e) {
        startX=e.offsetX
        startY = e.offsetY
        clickedincanvas=true
        j=0

        for(var i=0;i<y.length;i++){
            ctx.fillStyle = "lightgrey"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
        }
        j=0
        for(var i=0;i<startX/10;i++){
            ctx.fillStyle = "black"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
        }
        console.log(i,j)
        start(i,j,true)
        // console.log(startX,startY) 
    }

    c.addEventListener("mousedown",(e)=>{
        filled(e)
        console.log(1)
    })




ctx.stroke();

