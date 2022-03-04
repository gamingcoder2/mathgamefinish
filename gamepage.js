var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

console.log(player1_name);
console.log(player2_name);

var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function send(){
number1=document.getElementById("number1").value;
number2-document.getElementById("number2").value;
actual_answer=parseInt(number1) * parseInt(number2);

question_number= "<h4>" + number1 + " X  " + number1 + "</h4>";
input_box= "<br> Answer : <input type='test' id='input_check_box'>";
check_button= "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
row=question_number+input_box+check_button ;

document.getElementById("output").innerHTML=row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

var answer_turn="Player 1"
var question_turn="Player 2"

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    var answer= get_answer;

    if (actual_answer==answer){

        if (answer_turn=="Player 2"){
        player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;

}
else{

    player1_score-player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;

    
}
    }

    if (answer_turn=="Player 1"){

        answer_turn="Player 2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
        
    }
    else{

        answer_turn="Player 1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1_name;
    }

    if (question_turn=="Player 1"){

        question_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
    }
    else{

        question_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
    }

    document.getElementById("output").innerHTML="";

}