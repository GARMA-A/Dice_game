'use strict';

const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current1EL = document.getElementById('current--1');
const current0EL = document.getElementById('current--0');

const diceEL   = document.querySelector('.dice');

const btnNew   = document.querySelector('.btn--new');
const btnRoll   = document.querySelector('.btn--roll');
const btnHold   = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');
    

let scores,currentScore,activePlayer,playing;

 const init = function()
{
     scores=[0,0];
     currentScore =0;
     activePlayer =0;
     playing =true;

     score0El.textContent = 0;

     score1El.textContent = 0;
 
     current0EL.textContent = 0;
 
     current1EL.textContent = 0;
}
    init();

const swichPlayer = function()
{
    document.getElementById('current--'+activePlayer).
    textContent=0;
    currentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;

}

btnRoll.addEventListener('click',function()
{
    if(playing){

  
   const dice=Math.trunc(Math.random()*6)+1; 

   diceEL.classList.remove('hidden');
   diceEL.src= 'img/dice-'+dice+'.png';

   if(dice !== 1 )
   {
        currentScore +=dice;
        document.getElementById('current--'+activePlayer).
        textContent=currentScore;
   }
   else
   {
    swichPlayer();


   }
}
});
btnHold.addEventListener('click',function()
{
if(playing)
{


scores[activePlayer]+=currentScore;
document.getElementById('score--'+activePlayer).
textContent =
scores[activePlayer];
 
if(scores[activePlayer]>=50)
{
    playing = false;
    diceEL.classList.add('hidden');
    document.getElementById('name--'+activePlayer).
    textContent='Winner 🏆 ';
    document.querySelector('main').
    style.backgroundColor=' #2db267'; 
}
else
{
    swichPlayer();
}
}

});


btnNew.addEventListener('click',function(){
  
     init();
    document.querySelector('main').
    style.backgroundColor = '';

    document.getElementById('name--0').
    textContent='player 1';

    document.getElementById('name--1').
    textContent='player 2';





});