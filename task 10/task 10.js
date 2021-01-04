var corrPswrd = "AimanSaad";
var pswrd = prompt("enter password");
if (pswrd.length <= 0) {
    alert("please enter a password");
    var pswrd2 = prompt("password??"); 
    if (pswrd2 === corrPswrd) {
        alert("Correct! The password you entered matches the original password");
    }
    else {
        alert("Incorrect password");
    }
}
else if(pswrd === corrPswrd) {
    alert("Correct! The password you entered matches the original password");  
}
else {
    alert("Incorrect password");
}