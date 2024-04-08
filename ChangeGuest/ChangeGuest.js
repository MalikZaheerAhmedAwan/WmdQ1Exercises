var guestList = ["Surkhoru Khan", "Malik Faheem", "Ayesha"];
console.log("Respected Father, " + guestList[0] + " You are invited at my dauther BirthDay.");
console.log("Dear Brother, " + guestList[1] + " You are your family are invited at my dauther BirthDay.");
console.log("Dear Sister, " + guestList[2] + " Me and my family invited you and your family on dinner at my home.");
console.log("\n\n\nMy Sister " + guestList[2] + " can't attend the dinner due to out of city\n\n\n");
guestList[2] = "Zafar";
console.log("Respected Father, " + guestList[0] + " You are invited at my dauther BirthDay.");
console.log("Dear Brother, " + guestList[1] + " You are your family are invited at my dauther BirthDay.");
console.log("Dear Cousin, " + guestList[2] + " Me and my family invited you and your family on dinner at my home.\n\n");
for (var x = 0; x < guestList.length; x++)
    console.log("Dear " + guestList[x] + " You and your family are invited on dinner");
