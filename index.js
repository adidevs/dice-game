function clickButton(){
var flagA=0;
var flagB=0;
flagA=Math.floor(Math.random()*6)+1;
flagB=Math.floor(Math.random()*6)+1;
if(flagA>flagB){
    document.querySelector(".result").innerHTML = "🚩 Player 1 wins";
}
if(flagA<flagB){
    document.querySelector(".result").innerHTML = "Player 2 wins 🚩";
}
if(flagA==flagB){
    document.querySelector(".result").innerHTML = "Draw, Roll again!";
}
switch(flagA){
    case 1:
        document.querySelector(".Dice1").setAttribute("src","resources/dice1.png");
            break;
    
    case 2:
        document.querySelector(".Dice1").setAttribute("src","resources/dice2.png");
            break;
    
    case 3:
        document.querySelector(".Dice1").setAttribute("src","resources/dice3.png");
            break;
    
    case 4:
        document.querySelector(".Dice1").setAttribute("src","resources/dice4.png");
        break;
    
    case 5:
        document.querySelector(".Dice1").setAttribute("src","resources/dice5.png");
        break;
    
    case 6:
        document.querySelector(".Dice1").setAttribute("src","resources/dice6.png");
            break;
    
    default: break;
}
switch(flagB){
    case 1:
        document.querySelector(".Dice2").setAttribute("src","resources/dice1.png");
            break;
    
    case 2:
        document.querySelector(".Dice2").setAttribute("src","resources/dice2.png");
            break;
    
    case 3:
        document.querySelector(".Dice2").setAttribute("src","resources/dice3.png");
            break;
    
    case 4:
        document.querySelector(".Dice2").setAttribute("src","resources/dice4.png");
        break;
    
    case 5:
        document.querySelector(".Dice2").setAttribute("src","resources/dice5.png");
        break;
    
    case 6:
        document.querySelector(".Dice2").setAttribute("src","resources/dice6.png");
            break;
    
    default: break;
}
}