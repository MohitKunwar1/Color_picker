let card = document.querySelector("#card");
let start = document.querySelector("#start");
let rest = document.querySelector("#stop");
let box = document.querySelector("#side_box");
let copy = document.querySelector("#copy");

const changeColor = function(){ //Function to generate random color
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let interval;
const startChanging = function(){
    if(!interval){
        
        interval = setInterval(colorBg, 1000);
    }
     function colorBg(){
        card.style.backgroundColor = changeColor();
        box.innerHTML = changeColor();
        box.style.fontSize = "2vw"
    // console.log(changeColor()); 
    }
    
};


const stopChanging = function(){
    clearInterval(interval);
    interval = null;
};
start.addEventListener("click", startChanging);
rest.addEventListener("click", stopChanging);

