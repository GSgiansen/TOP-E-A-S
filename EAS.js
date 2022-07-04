const container=document.querySelector("#container");

const square=document.createElement("div");
square.className="square";


let height=16;
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

function grid(num){
    for(let i=0;i<num;i++){
        var line=document.createElement("div");
        line.className="line";
        for (let j=0;j<num;j++){
            const square=document.createElement("div");
            
            square.className="square";
            square.classList.add("show")
            square.addEventListener("mouseenter",hovered)
            line.appendChild(square);
        }
        container.appendChild(line);
    }
}
function hovered(e){
    e.target.classList.add("hidden");
    e.target.classList.remove("show");
}

const squares=container.querySelectorAll(".square")
squares.forEach(square=>square.addEventListener("mouseenter",hovered));

const button=document.querySelector("button");
button.onclick=function(){
    let v=prompt("What size do you want ?")
    let u=parseInt(v)
    if (u>100){
        alert("Number less than 100!")
        }
    else if (u<=0) alert("Number greater than 0!")
    
    else{
        console.log(u)
        const container=document.querySelector("#container")
        while (container.firstChild){
            container.removeChild(container.lastChild)
        }
        grid(u);

    }
    }