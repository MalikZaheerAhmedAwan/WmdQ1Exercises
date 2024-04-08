var userNames = ["admin", "Malik", "Zaheer", "Ahmed", "Junaid", "Imran", "Yousuf"];
for (var x = 0; x < userNames.length; x++) {
    if (userNames[x] == "admin")
        console.log("Hello " + userNames[x] + " , would you like to see a status report?");
    else
        console.log("Hello " + userNames[x] + " , thank you for logging in again.");
}
