var sub1 = parseInt(prompt("enter marks obtained in 1st subject"));
var sub2 = parseInt(prompt("enter marks obtained in 2nd subject"));
var sub3 = parseInt(prompt("enter marks obtained in 3rd subject"));
var totalM = parseInt(prompt("enter total marks"));
markObt = sub1 + sub2 + sub3;
percnt = ((markObt * 100)/totalM);
document.write("<h1>Marks Sheet <br><h3>Total marks: " + totalM + "<br>Marks obtained: " + markObt + "<br>Percentage: " + percnt + "%" + "<br> Grade: ");
if (percnt >= 80) {
    document.write("A-one <br>Remarks: Excellent");
}
else if (percnt >= 70) {
    document.write("A <br>Remarks: Good");
}
else if ( percnt >= 60) {
    document.write("B <br>Remarks: You need to improve");
}
else if ( percnt < 60) {
    document.write("Fail <br>Remarks: Sorry");
}