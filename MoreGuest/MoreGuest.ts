let guestList:string[]=["Surkhoru Khan","Malik Faheem","Ayesha"];


console.log("Respected Father, "+guestList[0]+" You are invited at my dauther BirthDay.");
console.log("Dear Brother, "+guestList[1]+" You are your family are invited at my dauther BirthDay.");
console.log("Dear Sister, " + guestList[2] + " Me and my family invited you and your family on dinner at my home.");

console.log("\n\n\nMy Sister "+guestList[2]+ " can't attend the dinner due to out of city\n\n\n");

guestList[2]="Zafar";
console.log("Respected Father, "+guestList[0]+" You are invited at my dauther BirthDay.");
console.log("Dear Brother, "+guestList[1]+" You are your family are invited at my dauther BirthDay.");
console.log("Dear Cousin, "+guestList[2]+" Me and my family invited you and your family on dinner at my home.");

console.log("\n\nI have found a bigger dinner table\n\n");

let newGuest =guestList.splice(0,0,"Ata Muhammad");
newGuest =guestList.splice(3,0,"Faiza");
let Guest =guestList.push("Humaira");

console.log("Respected Grand Father, "+guestList[0]+" You are invited at my dauther BirthDay.");
console.log("Respected Father, "+guestList[1]+" You are invited at your grand dauther BirthDay.");
console.log("Dear Brother, "+guestList[2]+" You are your family are invited at my dauther BirthDay.");
console.log("Dear Sister, " + guestList[3] + " Me and my family invited you and your family on dinner at my home.");
console.log("Dear Cousin, "+guestList[4]+" All of your family are invited on dinner at my home.");
console.log("Dear Sister, "+guestList[5]+" you with family are invited on dinner at my home.");
console.log("\n\n");

for (let x=0; x<guestList.length;x++)
console.log("Dear "+guestList[x]+ " You and your family are invited on dinner");
