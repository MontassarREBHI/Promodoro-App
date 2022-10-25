let time =1500;
const timer=document.getElementById('value');
const Status=document.getElementById('label');
function Decrease(){
    let minutes=parseInt(time/60);
    let seconds=parseInt(time%60);
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(seconds<10){
        seconds='0'+seconds;
    }
    timer.innerText=minutes+' : '+seconds;
    time--;
    if (time<=0){
        time=0
    }
}
function stopTimer(){
    clearInterval(myInterval);
}
function reset(){
if(Status.className=='pause'){    
    time=300;
    timer.innerText='05 : 00';
} 
else if(Status.className=='work'){
    time=1500;
    timer.innerText='25 : 00';
}
else {
    time=600;
    timer.innerText='10 : 00';
}
}
let myInterval;
function start(){
 myInterval= setInterval(Decrease,1000);
}
function work(){
    time=1500
    timer.innerText='25 : 00';
    Status.innerText='Pomodori';
    Status.className='work';
    document.body.style.backgroundColor='#AD4949';
    stopTimer();
}
function pause(){
    time=300;
    timer.innerText='05 : 00';
    Status.innerText='Pause';
    Status.className='pause';
    document.body.style.backgroundColor='#2596be';
    stopTimer();
}

function longPause(){
    time=600;
    timer.innerText='10 : 00';
    Status.innerText='Break';
    Status.className='bigrest';
    document.body.style.backgroundColor='#34eb4c';
    stopTimer();
}  

function addTask(){
    if(document.querySelector("#inp").value.length==0){
        alert("please enter a task first");}
        else{
    $('ul').append(`<li>${document.querySelector("#inp").value}<button class="delete" onclick="deletee(this)">
    done
</button></li>`);
    document.querySelector("#inp").value='';      
}
}
function deletee(elem) {
    $(elem).parent().remove();
  };






