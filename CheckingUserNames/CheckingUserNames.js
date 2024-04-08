var current_users = ["admin", "Malik", "Zaheer", "Ahmed", "Junaid", "Imran", "Yousuf"];
var new_users = ["Ali", "Awan", "Zaheer", "Rauf", "Nadeem", "Zafar", "Yousuf"];
if (new_users.length > 0) {
    for (var x = 0; x < new_users.length; x++) {
        if (current_users.indexOf(new_users[x]) != -1)
            console.log("Hello " + new_users[x] + " ,  will need to enter a new username");
        else
            console.log("Hello " + new_users[x] + " , is available.");
    }
}
else
    console.log("List is empty!");
