var time = parseInt(prompt("enter time in 2400 hrs. format(don't forget to add double zeros for minutes or whatelse applicable)"));
if (0000 <= time && time <= 1159) {
    alert("the time is " + time + " a.m. \nGood Morning!");
}
 else if (1200 <= time && time <= 1659) {
         time = time - 1200;
    alert("the time is " + time + " p.m. \nGood Afternoon!");    
 }
 else if (1700 <= time && time <= 2059) {
         time = time - 1200;
         alert("the time is " + time + " p.m. \nGood Evening!");
 }
 else if (2100 <= time && time <= 2359) {
         time = time - 1200;
         alert("the time is " + time + "p.m. \nGood Night!");
 }
  
 else {
         alert("Invalid entry");
 }