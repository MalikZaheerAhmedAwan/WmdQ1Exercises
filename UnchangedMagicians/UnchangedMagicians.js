var magiciansName = ["Wasim Akram", "Waqar Younis", "Saqlain Mustaq", "Muhammad Asif"];
console.log("\n Original Array \n");
show_magicians(magiciansName);
var greatMagiciansName = [];
console.log("\n Adding the phrase \n");
greatMagiciansName = make_great(magiciansName);
console.log("\n New Array \n");
show_magicians(greatMagiciansName);
console.log("\n Original Array \n");
show_magicians(magiciansName);
function show_magicians(names) {
    for (var a = 0; a < names.length; a++)
        console.log(names[a]);
}
function make_great(names) {
    var newarray = names.map(function (Value) { return "The Great " + Value; });
    return newarray;
}
