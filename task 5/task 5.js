var a = 3;
var b = parseInt(prompt("guess a selected no. ranging from 1 to 10"));
if (a === b){
    alert("Bingo! Correct answer");
}
else if(a === ++b) {
    alert("Close enough to the correct answer");
}