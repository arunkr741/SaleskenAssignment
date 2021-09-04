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
//taking height and x-axis in array
let y=[120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,150, 140,159,160,130,110,130,150,140,135,150,139]
let height = [110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,120,120, 120,100, 150, 70,159,160,130,110,120,147,134,135,150,139,132,139,110,130,150,140,135,150,139,132,139,120,130, 100,123, 150, 140,159,160,130,139,132,139,120,130, 100,123, 150, 140,159,160,130]
var j = 0

for(let i=0;i<y.length;i++){
    //creating initial canvas rectangles using height and x
     ctx.fillRect(j, y[i], 5, height[i]);
     j+=10
}
        let flag = true
        var interval
        var index=0
        var x =0
        var checkinitial = true;      
            // initial fn for setting the values to initial state to stop the player when it reaches end
              
           function initial(){
               
                    curr_track.pause()
                    curr_track.currentTime=0
                    clearInterval(interval)
                    j=0
                    index=0
                    x=0
                    ctx.fillStyle = "lightgrey"
                    for(let i=0;i<y.length;i++){
                        
                        ctx.fillRect(j, y[i], 5, height[i]);
                        j+=10
                    }
              
                    
                    flag=false
                    checkinitial=false
                    start(0,0)
                
            
           }
           // start function start the music player
    function start(i,j,clickedincanvas) {
     
      // toggling the flag for play or pause the music player
      // if flag true its starts playing
        if(flag || clickedincanvas ){
            playbtn.innerHTML=`<i class="fa fa-pause"></i>`
            playTrack(i)
            checkinitial=true
            clearInterval(interval)
             interval = setInterval(()=>{
                 if(i>=80){
                   // if it reaches end invoked intial
                    initial()

                 }
               
                ctx.fillStyle = "rgb(221, 127, 149)"
                ctx.fillRect(j, y[i], 5, height[i]);
                j+=10
                i++
                index=i
               x=j
            },1000)
            flag=false
        }

    //  if flag false its stops the  player
        else{
            pauseTrack()
            clearInterval(interval)
            flag=true
        //    index=0
        //     x=0
            playbtn.innerHTML=`<i class="fa fa-play"></i>`
        }  
    }
    

    playbtn.addEventListener("click",()=>{
        console.log(index,x,checkinitial)
        if(checkinitial){
            start(index,x)
        }else{
            start(0,0)
        }
        
    })

    // canvas fn is changing the duration of music player and start from where user clicked
    function canvasFunction(e) {
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
        
        index=i
        x=j
        if(flag==false){
            start(i,j,true)
        }
        
        // console.log(startX,startY) 
    }

    c.addEventListener("mousedown",(e)=>{
        canvasFunction(e)
       
    })

ctx.stroke();
// loading track
function loadTrack(){
    curr_track.src= "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
    curr_track.load()
}
loadTrack()

// for playing track
  function playTrack(i) {
   
    

    curr_track.play();
    curr_track.currentTime = i+50
  }
// for stoping track
  function pauseTrack() {
   
    curr_track.pause();
  
  }