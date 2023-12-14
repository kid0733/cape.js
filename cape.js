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


//VARIABLE COLLECTION
let isGameRunning = false;
let SA1_rand_row;
let SA2_rand_row;
let SA3_rand_row;




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
    x=Math.floor(Math.random()*3)
    if(x===1){
        trueSA=SA1
    }else if(x===2){
        trueSA=2
    }else if(x===3){
        trueSA=3
    }
}
//EVENT LISTENERS
playButton.addEventListener('click',run)

//RUN GAME
function run(){
    isGameRunning=true
    SA1_rand_row,SA2_rand_row,SA3_rand_row=randomSA()
    setSA(SA1_rand_row,SA2_rand_row,SA3_rand_row)
    findTrueSA()
    console.log(isGameRunning);
    hideIntro()
    showBox()
    console.log('The SA1 are:',SA1_rand_row.x,SA1_rand_row.y);
    console.log('The SA2 are:',SA2_rand_row.x,SA2_rand_row.y);
    console.log('The SA3 are:',SA3_rand_row.x,SA3_rand_row.y);
}

