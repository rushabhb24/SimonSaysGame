let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btn = ["yellow", "green", "red", "purple"];

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started == false){   
        console.log("Game is started");
        started = true;   
        levelUp();
    } 
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq = [];  // reset userSeq for new level
    level++;
    h2.innerText = `Level ${level}`;

    //Random btn choose
    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level}</b> <br> press any key to start game` ;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false; 
    gameSeq=[];
    userSeq=[];
    level = 0;
}