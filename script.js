





var user = prompt("What is your Nickname?")
document.getElementById("user").innerHTML=user + ": "  ;




var score1 = 0;
var score2 = 0;

function myFunc(){


        var randomNumber = Math.floor(Math.random()*6+1);
    var path = "img/dice"+ randomNumber + ".png";
    document.getElementById("img").setAttribute("src" , path);


    var randomNumber2 = Math.floor(Math.random()*6+1);
    var path2 = "img/dice"+ randomNumber2 + ".png";
    document.getElementById("img2").setAttribute("src" , path2);


    
    if(randomNumber>randomNumber2){
            var score1Incrise = score1 + 1;
        document.getElementById("resultLine" ).innerHTML = user +  " Win";
        document.getElementById("userScore").innerHTML = score1Incrise;
        score1++
        if(score1 === 10){
            document.getElementById("h1").innerHTML = user +  " Win In Full Game"
            setTimeout(function(){
                alert("New Game ?")
                location.reload();
             }, 3000);
        }
    }
    else if(randomNumber<randomNumber2){

        var score2Incrise = score2 + 1;
        document.getElementById("resultLine" ).innerHTML = "Computer  Win";
        document.getElementById("computerScore").innerHTML =  score2Incrise;
        score2++

        if(score2  === 10){
            document.getElementById("h1").innerHTML = "Computer Win In Full Game"
            setTimeout(function(){
                alert("New Game ?")
                location.reload();
             }, 3000);
        }
        
    }
    else{
        document.getElementById("resultLine" ).innerHTML = "Oops Draw!!";

    }

    if(score1===10 || score2 ===10){
        document.getElementById("resultBtn").setAttribute("onclick" , "notRun()")
        document.getElementById("resultBtn").innerHTML = "Game Over"

        
    }

    

}






