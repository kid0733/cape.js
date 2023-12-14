
//JS check
// alert('JS file functional')


//ADDING HTML ELEMENTS 
//initial play button element to exe run function 
const playButton=document.getElementById('play')
//initial ask box Element
const askBox=document.getElementById('askbox')
//all divs when the game is on
const gameDiv=document.getElementById('game')
//getting all sa-grid items
const SA1=document.querySelector('.SA-1')
const SA2=document.querySelector('.SA-2')
const SA3=document.querySelector('.SA-3')
//outputText:
const outputText=document.getElementById('outputText')


//VARIABLE COLLECTION
let isGameRunning = false;
let SA1_rand_row;
let SA2_rand_row;
let SA3_rand_row;
let trueSA;
const text=`hello world. \n
welcome to cape.js :) \n
please read the instructions above to understand how to play the game.`


//SANDBOX
//typewriter effect
function typeWriter(remainingText, speed) {
    if (remainingText.length > 0) {
      const char = remainingText.charAt(0);
      if (char === '\n') {
        outputText.innerHTML += '<br>';
      } else {
        outputText.innerHTML += char;
      }
      setTimeout(() => typeWriter(remainingText.slice(1), speed), speed);
    }
}
// OUTPUT DIALOGUEBOX
async function runIntroAnimation() {
    const firstPromise = typeWriter(text, 50);
    await firstPromise; // Wait for first animation to finish
    
  }
  

//FUNCTIONS
//Hide the intro dialogue Box:
function hideIntro(){
    if (askBox.style.visibility != 'hidden'){
        askBox.style.visibility = 'hidden'; 
    }
}
//DIALOGUE BOXES
//Show other Dialogue Boxes
function showBox(){
    gameDiv.style.visibility = 'visible'; 
}
//User Input
//get data/user-choice from input box



//GRID ITEMS
//get random grid item num for all SA
function randomSA(){
    //Random row numbers x3
    SA1_rand_row={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    SA2_rand_row={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    SA3_rand_row={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    return SA1_rand_row,SA2_rand_row,SA3_rand_row
}
//Set SA as random location 
function setSA(SA1_rand_row){
    SA1.style.gridArea=SA1_rand_row.y,SA1_rand_row.y;
    SA2.style.gridArea=SA2_rand_row.y,SA2_rand_row.y;
    SA3.style.gridArea=SA3_rand_row.y,SA3_rand_row.y;

}
//set random SA box as true Location 
function findTrueSA(){
    x=Math.floor(Math.random()*3)+1
    if(x===1){
        trueSA=SA1
    }else if(x===2){
        trueSA=SA2
    }else if(x===3){
        trueSA=SA3
    }
    return trueSA;
}

//USER CHOICES
function userChoice(){

}
//EVENT LISTENERS
playButton.addEventListener('click',run)

//RUN GAME
function run(){
    // if(trueSA===SA1||trueSA===SA2||trueSA===SA3){
    //     console.log(true);
    //     console.log(trueSA);
    //     console.log(SA1);
    //     console.log(SA2);
    //     console.log(SA3);

    // }
    // console.log(isGameRunning);
    // console.log('The SA1 are:',SA1_rand_row.x,SA1_rand_row.y);
    // console.log('The SA2 are:',SA2_rand_row.x,SA2_rand_row.y);
    // console.log('The SA3 are:',SA3_rand_row.x,SA3_rand_row.y);

    isGameRunning=true
    SA1_rand_row,SA2_rand_row,SA3_rand_row=randomSA()
    setSA(SA1_rand_row,SA2_rand_row,SA3_rand_row)
    trueSA=findTrueSA()
    runIntroAnimation()
    // setTimeout(()=>typeWriter(txt='hello world',50),2000)

    
    hideIntro()
    showBox()
}

