var numVal = [];
for (var x = 0; x < 10; x++)
    numVal.push(x + 1);
for (var x = 0; x < numVal.length; x++)
    Ordinal(numVal[x]);
function Ordinal(val) {
    if (val == 1)
        console.log(val + "st");
    else if (val == 2)
        console.log(val + "nd");
    else if (val == 3)
        console.log(val + "rd");
    else if (val > 3 && val <= 9)
        console.log(val + "th");
}
