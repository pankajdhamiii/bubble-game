var timer=60
var score=0
var hitrn=0

var increaseScore=()=>{
    score+=10
    document.getElementById("scoreVal").textContent=score
}

var newHitVal=()=>{
    hitrn=Math.floor(Math.random()*10)
    document.getElementById("hitVal").textContent=hitrn
}

var bubble=()=>{
    var clutter=""
for(var i=0; i<=309; i++){
    var rn=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter
}

var timeChange=()=>{
    
    var timerInt=setInterval(()=>{
        if(timer>0){
            timer--
            document.getElementById("time").textContent=timer
        }
        else{
            clearInterval(timerInt)
            document.getElementById("pbtm").innerHTML=`<h2>Game Over </br> Your Score is ${score}</h1>`
        }
    },1000)
    
}

document.getElementById("pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent)
    if(clickedNum===hitrn){
        increaseScore()
        bubble()
        newHitVal()
        
    }
})

timeChange()
bubble()
newHitVal()



