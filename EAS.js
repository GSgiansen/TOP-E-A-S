const container=document.querySelector("#container");

const square=document.createElement("div");
square.className="square";



for(let i=0;i<16;i++){
    var line=document.createElement("div");
    line.className="line";
    for (let j=0;j<16;j++){
        const square=document.createElement("div");
        
        square.className="square";
        square.classList.add("show")
        line.appendChild(square);
    }
    container.appendChild(line);
}

function hovered(e){
    e.target.classList.add("hidden");
    e.target.classList.remove("show");
}

const squares=container.querySelectorAll(".square")
squares.forEach(square=>square.addEventListener("mouseenter",hovered));
