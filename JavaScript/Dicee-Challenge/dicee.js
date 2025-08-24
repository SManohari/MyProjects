let randomNumber1 = Math.random() * 6;
let randomDiceMove1 = Math.floor(randomNumber1)+1;
let randomDiceImage1 = "images/"+ "dice"+randomDiceMove1+".png" 
let randomNumber2= Math.random() * 6;
let randomDiceMove2 = Math.floor(randomNumber2)+1;
let randomDiceImage2 = "images/"+ "dice"+randomDiceMove2+".png" 

document.querySelector('.img1').setAttribute('src',randomDiceImage1);
document.querySelector('.img2').setAttribute('src',randomDiceImage2);

if(randomDiceMove1 > randomDiceMove2){
  document.querySelector('h1').innerHTML = 'Player1 Wins'
} else if(randomDiceMove1 < randomDiceMove2){
    document.querySelector('h1').innerHTML = 'Player2 Wins'
} else if(randomDiceMove1 === randomDiceMove2){
    document.querySelector('h1').innerHTML = 'Ties'
}