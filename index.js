var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var playbtn = document.getElementById("playbtn")
let curr_track = document.getElementById('audio');

var startX 
var startY


ctx.beginPath();
ctx.lineWidth = "0";
ctx.strokeStyle = "red";
ctx.fillStyle = "lightgrey"

let y=[120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,150, 140,159,160,130,110,130,150,140,135,150,139]
let height = [110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,139,132,139,120,130, 100,123, 150, 140,159,160,130]
var j = 0
for(let i=0;i<y.length;i++){
    
     ctx.fillRect(j, y[i], 5, height[i]);
     j+=10
}
let flag = true

 var interval
            j=0
           var index=0
           var isPlaying = false;      


    function start(i,j,clickedincanvas) {
        console.log(i,j)
    
       playpauseTrack()
        if(flag || clickedincanvas ){
            playbtn.innerHTML=`<i class="fa fa-pause"></i>`
            clearInterval(interval)
             interval = setInterval(()=>{
                ctx.fillStyle = "rgb(221, 127, 149)"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
                i++
               
            },1000)
            flag=false
        }
        else{
            clearInterval(interval)
            flag=true
            playbtn.innerHTML=`<i class="fa fa-play"></i>`
        }  
    }
    

    playbtn.addEventListener("click",()=>{
        console.log(index)
        start(index,j)
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
            ctx.fillStyle = "rgb(221, 127, 149)"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
        }
        console.log(i,j)
        index=i
        start(i,j,true)
        // console.log(startX,startY) 
    }

    c.addEventListener("mousedown",(e)=>{
        filled(e)
       
    })

ctx.stroke();

function loadTrack(){
    curr_track.src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
    curr_track.load()
}
loadTrack()
function playpauseTrack() {
    console.log("playpauseTrack")
    if (!isPlaying) playTrack();
    else pauseTrack();
  }

  function playTrack() {
    console.log("playTrack")
    curr_track.play();
    isPlaying = true;
    console.log(isPlaying)
  }

  function pauseTrack() {
    console.log("pauseTrack")
    curr_track.pause();
    isPlaying = false;
  }