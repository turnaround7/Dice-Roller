var random_num=Math.floor(Math.random()*6+1);
var s="images/dice"+random_num+".png";
var dice_image=document.querySelectorAll("img");
dice_image[0].setAttribute("src",s);
var random_num2=Math.floor(Math.random()*6+1);
var s2="images/dice"+random_num2+".png";
dice_image[1].setAttribute("src",s2);

var title_change=document.querySelector("h1");
var P1=" 🚩Player 1 Wins!";
var P2="Player 2 Wins! 🚩";
var draw="Draw!!";

if(random_num>random_num2)
title_change.innerHTML=P1;
else if(random_num<random_num2)
title_change.innerHTML=P2;
else
title_change.innerHTML=draw;
//document.querySelectorAll("img")[0].setAttribute("src" ,s);
