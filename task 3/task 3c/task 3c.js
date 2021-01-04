var c = 12;
if (c++ === 13) { // c is 12 for statement and then increased to 13
    alert("condition 1 is true");
}
if (c ===  14) {
alert("condition 2 is true");// c is 13 here so condition does not match
}
if (++c < 14) {
    alert("condition 3 is true");// c is increased to 14 and condition disqualifies
}
if (c === 14) {// c is 14 and condition matches
    alert("condition 4 is true");
}