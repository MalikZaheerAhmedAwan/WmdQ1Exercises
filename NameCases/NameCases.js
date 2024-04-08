var myName = "Malik zaheer ahmed awan";
console.log("My Name is " + myName);
console.log("In Lower Case " + myName.toLowerCase());
console.log("In Upper Case " + myName.toUpperCase());
console.log("In Title Case " + TitleCase(myName));
console.log("In Title Case " + TCase(myName));
function TitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++)
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    return str.join(' ');
}
function TCase(str) {
    str = str.toLowerCase().split(' ');
    str = str.map(function (value) {
        return value.replace(value[0], value[0].toUpperCase());
    });
    return str.join(' ');
}
