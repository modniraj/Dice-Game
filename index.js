var randomNumber1 = Math.floor((Math.random()*5));
var randomNumber2 = Math.floor((Math.random()*6));
var dice=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

document.querySelector("img.img1").setAttribute("src",dice[randomNumber1]);
document.querySelector("img.img2").setAttribute("src",dice[randomNumber2]);

if(randomNumber1 > randomNumber2)
{
  // document.querySelector("h1").innerHTML = "Player1 wins";
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2)
 {
    // document.querySelector("h1").innerHTML = "Player2 wins";
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
  // document.querySelector("h1").innerHTML = "Draw!";
  document.querySelector("h1").innerHTML = "Draw!";
}
