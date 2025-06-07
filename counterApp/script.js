var count=0

function increment(){
    count=count+1;
    document.getElementById("result").innerHTML=count;
}

function decrement(){
    count=count-1;
    document.getElementById("result").innerHTML=count;
}

function reset(){
    count=0;
    document.getElementById("result").innerHTML=count;
}