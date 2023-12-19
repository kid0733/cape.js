
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
//input box
const inputBox=document.getElementById('inputButtons')



const inputBtnOne=document.getElementById('inputBtnOne');
const inputBtnTwo=document.getElementById('inputBtnTwo');
const inputBtnThree=document.getElementById('inputBtnThree');
const inputBtnFour=document.getElementById('inputBtnFour');
const inputBtnFive=document.getElementById('inputBtnFive');
const inputBtnSix=document.getElementById('inputBtnSix');
const inputBtnSeven=document.getElementById('inputBtnSeven');
const inputBtnEight=document.getElementById('inputBtnEight');

inputBtnOne.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnTwo.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnThree.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnFour.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnFive.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnSix.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnSeven.addEventListener('click', (e)=>{
    userChoice(e)
});
inputBtnEight.addEventListener('click', (e)=>{
    userChoice(e)
});



//VARIABLE COLLECTION
let isGameRunning = false;
let SA1_rand;
let SA2_rand;
let SA3_rand;
let trueSA;

//setting pre search data
let p1=0.2;
let p2=0.5;
let p3=0.3;

//declaring search area prob var (sep)
let sep1=0;
let sep2=0;
let sep3=0;

const text=`hello world. \n
welcome to cape.js :) \n
please read the instructions above to understand how to play the game.`


//OUTPUTBOX
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
 function runIntroAnimation() {
    typeWriter(text, 50);
}

//clear output box
function clearOutput(){
    outputText.innerHTML=''
}



//FUNCTIONS
//Random uniform distribution
function randomUniform(min, max) {
    x= Math.random() * (max - min) + min;
    return x
  }
//Hide the intro dialogue Box:
function hideIntro(){
    if (askBox.style.visibility != 'hidden'){
        askBox.style.visibility = 'hidden';
        inputBox.style.visibility='hidden'; 
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
    SA1_rand={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    SA2_rand={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    SA3_rand={x:Math.floor(Math.random()*8),y:Math.floor(Math.random()*8)};
    return SA1_rand,SA2_rand,SA3_rand
}
//Set SA on the UI
function setSA(SA1_rand,SA2_rand,SA3_rand){
    SA1.style.gridArea=SA1_rand.x,SA1_rand.y;
    SA2.style.gridArea=SA2_rand.x,SA2_rand.y;
    SA3.style.gridArea=SA3_rand.x,SA3_rand.y;

}
//set random SA box as true Location 
function findTrueSA(){
    x = Math.floor(Math.random() * 3) + 1;
    if(x===1){
        trueSA=1
        row=SA1_rand.x
        col=SA1_rand.y
    }else if(x===2){
        trueSA=2
        row=SA2_rand.x
        col=SA2_rand.y
    }else if(x===3){
        trueSA=3
        row=SA3_rand.x
        col=SA3_rand.y
    }
 
    return trueSA;
}
//Search Effectiveness Calc:
function calcSearchEffectiveness(){
    sep1=randomUniform(0.2,0.9);
    sep2=randomUniform(0.2,0.9);
    sep3=randomUniform(0.2,0.9);

    return sep1,sep2,sep3;
}

function search(areaNum,areaArr, effectivenessProb ){
    runGameData()
}
function runGameData() {
    p1=0.2
    p2=0.5
    p3=0.3
    txt=`Initial Probabilities (P) for Search:\n
    P1 = ${p1}, P2 = ${p2}, P3 = ${p3} \n
    Search 1

        Choose next areas to search:

        1 - Quit
        2 - Search Area 1 twice
        3 - Search Area 2 twice
        4 - Search Area 3 twice
        5 - Search Areas 1 & 2
        6 - Search Areas 1 & 3
        7 - Search Areas 2 & 3
        8 - Start Over`
    typeWriter(txt, 50);
    setTimeout(()=>inputBox.style.visibility='visible',5000);
    // setTimeout(()=>clearOutput(),2000)
}

//USER CHOICES
function userChoice(e){
    if(e.target.value==1){
        console.log('you chose 1');
    }else if(e.target.value==2){
        clearOutput();
        oneAreaResult(SA1,trueSA)
    }else if(e.target.value==3){
        clearOutput();
        oneAreaResult(SA2,trueSA)
    }else if(e.target.value==4){
        clearOutput();
        oneAreaResult(SA3,trueSA)
    }else if(e.target.value==5){
        clearOutput();
        oneAreaResult(SA4,trueSA)
    }else if(e.target.value==6){
        clearOutput();
        oneAreaResult(SA1,trueSA)
    }else if(e.target.value==7){
        clearOutput();
        oneAreaResult(SA1,trueSA)
    }else if(e.target.value==8){
        clearOutput();
        oneAreaResult(SA1,trueSA)
    }else{
        clearOutput();
        typeWriter(txt='an error occured',50)
    }
    //     //1. Exit Game
    //     case '1':
    //         console.log(`you chose 1`);
    //     //2. Search Area 1 twice
    //     case '2':
    //         oneAreaResult(SA1,trueSA)   
    //     //3. Search Area 2 twice
    //     case '3':
    //         oneAreaResult(SA2,trueSA)   
    //     //4. Search Area 3 twice
    //     case '4':
    //         oneAreaResult(SA3,trueSA)
    //     //5. Search Area 1 + 2
    //     case '5':
    //         twoAreaResult(SA1,SA2,trueSA)
    //     //6. Search Area 1 + 3
    //     case '6':
    //         twoAreaResult(SA1,SA3,trueSA)
    //     //7. Search Area 2 + 3
    //     case '7':
    //         twoAreaResult(SA3,SA2,trueSA)
    // }
}
function oneAreaResult(SA_X, trueSA) {
    // Search Area 1 twice
    console.log(`running ${SA_X.textContent}`);
    console.log(`true ${trueSA}`);
    if (SA_X.textContent == trueSA) {
      txt_end = `You found the sunken ship!!\n
                 The ship was found on ${SA_X}`;
      typeWriter(txt_end, 50);
    } else {
      typeWriter(txt=`
      That was not the correct area. \n
      Choose next areas to search:

        1 - Quit
        2 - Search Area 1 twice
        3 - Search Area 2 twice
        4 - Search Area 3 twice
        5 - Search Areas 1 & 2
        6 - Search Areas 1 & 3
        7 - Search Areas 2 & 3
        8 - Start Over
      `)
    }

    // else{
    //     clearOutput()
    //     txt_end=`Please try again.\n
    //     Choose next areas to search:

    //     1 - Quit
    //     2 - Search Area 1 twice
    //     3 - Search Area 2 twice
    //     4 - Search Area 3 twice
    //     5 - Search Areas 1 & 2
    //     6 - Search Areas 1 & 3
    //     7 - Search Areas 2 & 3
    //     8 - Start Over`
    //     typeWriter(txt_end, 50);
    // }
}
function twoAreaResult(SA_X,SA_Y,trueSA){
    //Search Area 1 twice
    if(SA_X===trueSA){
        clearOutput()
        txt_end=`You found the sunken ship!!\n
        The ship was found on ${SA_X}`
        typeWriter(txt_end, 50)
        
    }else if(SA_Y===trueSA){
        clearOutput()
        txt_end=`You found the sunken ship!!\n
        The ship was found on ${SA_Y}`
        typeWriter(txt_end, 50);
    }else{
        console.log('wrong answer');
    }
    // else{
    //     clearOutput()
    //     txt_end=`Please try again.\n
    //     Choose next areas to search:

    //     1 - Quit
    //     2 - Search Area 1 twice
    //     3 - Search Area 2 twice
    //     4 - Search Area 3 twice
    //     5 - Search Areas 1 & 2
    //     6 - Search Areas 1 & 3
    //     7 - Search Areas 2 & 3
    //     8 - Start Over`
    //     typeWriter(txt_end, 50);
    // }
}

//EVENT LISTENERS
//Play button
playButton.addEventListener('click',run)
inputBox.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        console.log(inputBox.value);
    }
})
//Each input btn


//RUN GAME
function run(){
    isGameRunning=true
    SA1_rand,SA2_rand,SA3_rand=randomSA()
    setSA(SA1_rand,SA2_rand,SA3_rand)
    sep1,sep2,sep3=calcSearchEffectiveness()
    trueSA=findTrueSA()
    console.log(trueSA);
    // if(trueSA===SA1||trueSA===SA2||trueSA===SA3){
    //     console.log(true);
    //     console.log(trueSA);
    //     console.log(SA1);
    //     console.log(SA2);
    //     console.log(SA3);

    // }
    // console.log(isGameRunning);
    // console.log('The SA1 are:',SA1_rand.x,SA1_rand.y);
    // console.log('The SA2 are:',SA2_rand.x,SA2_rand.y);
    // console.log('The SA3 are:',SA3_rand.x,SA3_rand.y);

    
    runIntroAnimation()
    setTimeout(()=>clearOutput(),8500)
    setTimeout(()=>search(),9000)

    
    hideIntro()
    showBox()
}

