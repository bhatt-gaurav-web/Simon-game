let gameseq = [];
let userseq = [];

let btns =["yellow","red","green","purple"];

let started = false;
let level = 0;
let high = 0;

let highscore = document.querySelector(".highscore");
let h2 = document.querySelector(".h2");
let body = document.querySelector("body");

//eventlistener for pressing buttons in game
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});

//function for gameflash
function gameflash(btn){ 
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}

//function for userflash after pressing
function userflash(btn){ 
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
}
     
//function for level up in game
function levelup()
{
    //for reset the value of userseq 
    userseq = [];
level++;

// to update high score of game
if(level > high){
    high++;
}

h2.innerText =`Level ${level}`;
highscore.innerText = `HighSCore = ${high}`;

let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameflash(randBtn);
gameseq.push(randColor);
console.log(gameseq);
// console.log(randIdx);
// console.log(randBtn);
// console.log(randColor);
}

function checkAns(idx){
    console.log("current level:", level);

    if(userseq[idx] === gameseq[idx]){
        console.log("Same Value!!")
        if(userseq.length === gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML = `Game Over!! Your Score is <b> ${level} </b> <br> Press any key to restart!`;
        reset();
        body.classList.add("red");
        setTimeout(function(){
            body.classList.remove("red")},200);
    }
}

//function for btnflash in user press
function btnpress(){
    console.log(this);
    userflash(this);
    userColor = this.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

//function to reset the game after game over!!

function reset(){
    userseq = [];
    gameseq = [];
    level = 0;
    started = false;
}
