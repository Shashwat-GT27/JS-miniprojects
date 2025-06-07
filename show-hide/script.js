var flag=true;

function show(){
    if(flag==false){
        document.getElementById("text").style.display="block"
        flag=true;
    }
    
}

function hide(){
    if(flag==true){
        document.getElementById("text").style.display="none"
        flag=false;
    }
}