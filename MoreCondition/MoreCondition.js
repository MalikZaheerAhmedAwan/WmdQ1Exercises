var myName = "MALIK";
var friendName = "Junaid";
console.log("Is myName==friendName? | Predict False.");
console.log(myName == friendName);
console.log("Is myName!=friendName? | Predict True.");
console.log(myName != friendName);
console.log("Is myName.length==friendName.length? | Predict False.");
console.log(myName.length == friendName.length);
console.log("Is myName.length!=friendName.length? | Predict True.");
console.log(myName.length != friendName.length);
console.log("Is myName==myName.toLowerCase()? | Predict False.");
console.log(myName == myName.toLowerCase());
console.log("Is myName!=myName.toLowerCase()? | Predict True.");
console.log(myName != myName.toLowerCase());
console.log("(7+3)==6 ? | Predict False.");
console.log((7 + 3) == 6);
console.log("(6+3)==9 ? | Predict True.");
console.log((6 + 3) == 9);
console.log("(7+3)!=6 ? | Predict True.");
console.log((7 + 3) != 6);
console.log("(6+3)!=9 ? | Predict False.");
console.log((6 + 3) != 9);
console.log("(1+2)>9 ? | Predict False.");
console.log((1 + 2) > 9);
console.log("(8+2)>9 ? | Predict True.");
console.log((8 + 2) > 9);
console.log("5<9 ? | Predict True.");
console.log(5 < 9);
console.log("9<9 ? | Predict False.");
console.log(9 < 9);
console.log("(6+2)>=9 ? | Predict False.");
console.log((6 + 2) >= 9);
console.log("(7+2)>=9 ? | Predict True.");
console.log((7 + 2) >= 9);
console.log("4<=9 ? | Predict True.");
console.log(4 <= 9);
console.log("9<=8 ? | Predict False.");
console.log(9 <= 8);
console.log("Is myName.length==friendName.length OR myName==myName.toUpperCase() ? | Predict True.");
console.log(myName.length == friendName.length || myName == myName.toUpperCase());
console.log("Is myName.length==friendName.length OR myName==myName.toLowerCase() ? | Predict False.");
console.log(myName.length == friendName.length || myName == myName.toLowerCase());
console.log("Is myName.length==friendName.length and myName==myName.toUpperCase() ? | Predict False.");
console.log(myName.length == friendName.length && myName == myName.toUpperCase());
console.log("Is myName.length!=friendName.length and myName==myName.toUpperCase() ? | Predict True.");
console.log(myName.length != friendName.length && myName == myName.toUpperCase());
var names = ["Junaid", "Yousuf", "Imran", "Faisal", "Sohail"];
var val = names.some(isExist);
console.log("Is names.some(isExist) ? |  Predict True.");
console.log(val);
var val = names.some(notExist);
console.log("Is names.some(notExist) ? |  Predict False.");
console.log(val);
if (names.indexOf("Faisal") != -1) {
    console.log("Is names.indexOf(\"Faisal\")!=-1 ? |  Predict True.");
    console.log("True");
}
if (names.indexOf("Ali") == -1) {
    console.log("Is names.indexOf(\"Ali\")==-1 ? |  Predict False.");
    console.log("False");
}
console.log(names.indexOf("Faisal"));
console.log(names.indexOf("Ali"));
function isExist(element, index, array) {
    return (element == "Imran");
}
function notExist(element, index, array) {
    return (element != "Imran");
}
