let magiciansName : string []=["Wasim Akram","Waqar Younis","Saqlain Mustaq","Muhammad Asif"];
show_magicians(magiciansName);


make_great(magiciansName);

console.log("\n Adding the phrase \n");

show_magicians(magiciansName);

function show_magicians ( names : string[]) {
    for (let a=0; a<names.length;a++ )
    console.log(names[a]);
}

function make_great ( names : string[]) {
    for (let a=0; a<names.length;a++ )
    names[a]="The Great "+names[a];
}
