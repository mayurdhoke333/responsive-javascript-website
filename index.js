
let name = prompt("Please enter your name");
let firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase();
let restOfThem = name.slice(1,name.length);
restOfThem = restOfThem.toLowerCase();
alert("Welcome " +firstLetter+restOfThem+ " to our site");


function myHeading() {
    document.querySelector(".heading").innerHTML = "CALCULATE LOVE PERCENTAGE";
}

document.querySelectorAll("button")[2].addEventListener("click", myFunction);

function myFunction() {

    myDice();
    buttonAimation();


}




function buttonAimation() {

    // this can be used when css bootstrap is not assigned to the element......
    //  document.querySelectorAll("button")[2].classList.add("pressed");;

    //  setTimeout(function(){
    //     document.querySelectorAll("button")[2].classList.remove("pressed");
    //  },100)



    document.querySelectorAll("button")[2].style.boxShadow = "inset 3px 3px 20px 3px orange";
    setTimeout(function () {
        document.querySelectorAll("button")[2].style.boxShadow = "none";
    }, 100);

}

function myDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    let randomImage = document.querySelectorAll(".dice-image")[0].setAttribute("src", "dice" + random + ".png");



    let random1 = Math.floor(Math.random() * 6) + 1;
    let randomImage1 = document.querySelectorAll(".dice-image")[1].setAttribute("src", "dice" + random1 + ".png");

    if (random > random1) {
        document.querySelector(".heading2").innerHTML = "🏆 Player 1 wins";

    }
    else if (random < random1) {
        document.querySelector(".heading2").innerHTML = "🏆 Player 2 wins";
    }
    else {
        document.querySelector(".heading2").innerHTML = "DRAW";
    }
}



function buttonTransition() {
    // document.querySelectorAll(".dice-image")[0].style.transition="3s linear";
    // document.querySelectorAll(".dice-image")[0].style.transform="(360deg)";
}

// FOR LEAP YEAR

document.querySelectorAll("button")[3].addEventListener("click", function () {

    leapYear();
    leapButton();
});

function leapYear() {
    let leapValue = document.querySelectorAll("input")[0].value;

    if (leapValue % 4 === 0) {
        if (leapValue % 100 === 0) {
            if (leapValue % 400 === 0) {
                document.querySelector(".leap-heading").innerHTML = "IT IS A LEAP YEAR.";
            }
            else {
                document.querySelector(".leap-heading").innerHTML = "NOT A LEAP YEAR!."
            }
        } else {
            document.querySelector(".leap-heading").innerHTML = "IT IS A LEAP YEAR."
        }
    }
    else {
        document.querySelector(".leap-heading").innerHTML = "NOT A LEAP YEAR!."
    }
}

function leapButton()
{
    document.querySelectorAll("button")[3].classList.add("pressed");
    setTimeout(function () {
        document.querySelectorAll("button")[3].classList.remove("pressed");
    }, 100);
}


// FIFTH-SECTION 

document.querySelectorAll("button")[4].addEventListener("click",function(){
    loveCalculator();
    loveButton();
});


function loveCalculator()
{
let loveRandom = Math.floor(Math.random() * 100) + 1;

if (loveRandom > 70)
{
document.querySelector(".love-heading").innerHTML="You like each other Romeo and Juliet";
document.querySelector(".love-gif").setAttribute("src","https://media.giphy.com/media/26SYuQrlqrMCA/giphy.gif");
}
else if(loveRandom > 50 && loveRandom <=70)
{
    document.querySelector(".love-heading").innerHTML="WOO you are quiet Matched Couple";
    document.querySelector(".love-gif").setAttribute("src","https://media.giphy.com/media/lqMxLjlpyAaAjfJ9yj/giphy.gif");
}
else if (loveRandom > 30 && loveRandom <=50)
{
    document.querySelector(".love-heading").innerHTML="Not a relevant match try again"; 
    document.querySelector(".love-gif").setAttribute("src","https://media.giphy.com/media/kJ8qYls8n2tDW/giphy.gif");
} 

else
{
    document.querySelector(".love-heading").innerHTML="Not Matched Couple";
    document.querySelector(".love-gif").setAttribute("src","https://media.giphy.com/media/uP89pJyXBDqVi/giphy.gif");
}
}



function loveButton()
{
    document.querySelectorAll("button")[4].style.boxShadow="inset 3px 3px 20px 3px orange";

    setTimeout(function() {

         document.querySelectorAll("button")[4].style.boxShadow="none";
    }, 100);
}
